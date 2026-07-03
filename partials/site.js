(function () {
    'use strict';

    async function loadPartials() {
        await Promise.all([
            loadPartial('nav-root', '/partials/nav.html?v=20'),
            loadPartial('footer-root', '/partials/footer.html?v=15')
        ]);
        initMobileNav();
        highlightCurrentNav();
    }

    async function loadPartial(targetId, url) {
        const target = document.getElementById(targetId);
        if (!target) return;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to load ' + url);
            target.innerHTML = await response.text();
        } catch (err) {
            console.error(err);
        }
    }

    function initMobileNav() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('mobile-menu-icon');
        if (!btn || !menu) return;

        btn.addEventListener('click', function () {
            const isHidden = menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            if (icon) {
                icon.className = isHidden ? 'fa-solid fa-xmark text-2xl' : 'fa-solid fa-bars text-2xl';
            }
            btn.setAttribute('aria-label', isHidden ? 'Close menu' : 'Open menu');
            btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.add('hidden');
                if (icon) icon.className = 'fa-solid fa-bars text-2xl';
                btn.setAttribute('aria-label', 'Open menu');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    function highlightCurrentNav() {
        const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
        document.querySelectorAll('[data-nav-link]').forEach(function (link) {
            const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
            if (href === path) {
                link.classList.add('text-amber-400', 'font-medium');
            }
        });
    }

    function getCurrentSection() {
        const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/^\//, '').replace(/\/$/, '');
        const sections = ['bible', 'confessions', 'instrumental', 'prayer', 'reflections', 'worship'];
        return sections.find(function (s) { return path === s; }) || null;
    }

    window.getAudioUrl = function (filename, section) {
        section = section || getCurrentSection();
        const cleanFile = filename.replace(/^\//, '');
        if (section) {
            return window.location.origin + '/' + section + '/' + cleanFile;
        }
        return window.location.origin + '/' + cleanFile;
    };

    window.shareAudio = function (filename, title, section) {
        const url = /^https?:\/\//i.test(filename) ? filename : getAudioUrl(filename, section);
        navigator.clipboard.writeText(url).then(function () {
            showToast('Link for "' + title + '" copied!');
        }).catch(function () {
            prompt('Copy this link:', url);
        });
    };

    window.shareYouTube = function (url, title) {
        navigator.clipboard.writeText(url).then(function () {
            showToast('Link for "' + title + '" copied!');
        }).catch(function () {
            prompt('Copy this link:', url);
        });
    };

    window.showToast = function (message) {
        const toast = document.getElementById('toast');
        const text = document.getElementById('toast-text');
        if (!toast || !text) return;
        text.textContent = message;
        toast.style.display = 'flex';
        setTimeout(function () { toast.style.display = 'none'; }, 2500);
    };

    window.openContentModal = function (modal) {
        if (!modal) return;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    window.closeContentModal = function (modal) {
        if (!modal) return;
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    window.createAppleMusicIframe = function (songId, title) {
        if (!songId) return null;
        var iframe = document.createElement('iframe');
        iframe.allow = 'autoplay *; encrypted-media *; fullscreen *; clipboard-write';
        iframe.frameBorder = '0';
        iframe.height = '175';
        iframe.style.cssText = 'width:100%;max-width:660px;overflow:hidden;border-radius:10px;';
        iframe.sandbox = 'allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation';
        iframe.src = 'https://embed.music.apple.com/us/song/' + songId;
        if (title) iframe.title = title + ' on Apple Music';
        return iframe;
    };

    window.renderAppleMusicEmbed = function (target, songId, title) {
        if (!target || !songId) return;
        target.innerHTML = '';
        target.classList.add('apple-music-embed');
        var iframe = createAppleMusicIframe(songId, title);
        if (iframe) target.appendChild(iframe);
    };

    window.toggleAppleEmbed = function (button, songId, title) {
        if (!button || !songId) return;
        var row = button.closest('.album-track');
        if (!row) return;
        var panel = row.querySelector('.album-track__embed');
        if (!panel) {
            panel = document.createElement('div');
            panel.className = 'album-track__embed';
            row.appendChild(panel);
        }
        var isOpen = panel.classList.contains('is-open');
        document.querySelectorAll('.album-track__embed.is-open').forEach(function (openPanel) {
            openPanel.classList.remove('is-open');
            openPanel.innerHTML = '';
        });
        document.querySelectorAll('.album-track__action--listen.is-active').forEach(function (btn) {
            btn.classList.remove('is-active');
            btn.textContent = 'Listen';
        });
        if (isOpen) return;
        panel.classList.add('is-open');
        renderAppleMusicEmbed(panel, songId, title);
        button.classList.add('is-active');
        button.textContent = 'Close';
    };

    function initAppleMusicEmbeds() {
        document.querySelectorAll('[data-apple-embed]').forEach(function (container) {
            var songId = container.getAttribute('data-apple-embed');
            var title = container.getAttribute('data-apple-title') || '';
            if (songId) renderAppleMusicEmbed(container, songId, title);
        });
    }

    window.fetchJsonData = async function (url, cache) {
        if (cache && Object.keys(cache).length > 0) {
            return cache;
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }
        const data = await response.json();
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid JSON');
        }
        return data;
    };

    function createPlatformCard(platform, config) {
        var card;
        if (platform.url) {
            card = document.createElement('a');
            card.href = platform.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'platform-card';
            card.setAttribute('aria-label', platform.name + ' — Spoken Devotion Music');
        } else {
            card = document.createElement('div');
            card.className = 'platform-card platform-card--soon';
            card.setAttribute('aria-label', platform.name + ' — coming soon');
        }

        if (!platform.url) {
            var badge = document.createElement('span');
            badge.className = 'platform-card__badge';
            badge.textContent = 'Soon';
            card.appendChild(badge);
        }

        var icon = document.createElement('i');
        icon.className = (platform.icon || 'fa-solid fa-music') + ' platform-card__icon';
        icon.setAttribute('aria-hidden', 'true');
        card.appendChild(icon);

        var name = document.createElement('span');
        name.className = 'platform-card__name';
        name.textContent = platform.name;
        card.appendChild(name);

        var handle = document.createElement('span');
        handle.className = 'platform-card__status';
        handle.textContent = platform.url ? config.artistName || 'Listen' : 'Coming soon';
        card.appendChild(handle);

        return card;
    }

    function createPlatformGroup(label, platforms, config) {
        var group = document.createElement('div');
        group.className = 'platform-group';

        var heading = document.createElement('p');
        heading.className = 'platform-group__label';
        heading.textContent = label;
        group.appendChild(heading);

        var grid = document.createElement('div');
        grid.className = 'platform-grid';
        platforms.forEach(function (platform) {
            grid.appendChild(createPlatformCard(platform, config));
        });
        group.appendChild(grid);

        return group;
    }

    function renderStreamingPlatforms() {
        var config = window.SD_STREAMING_PLATFORMS;
        if (!config || !config.platforms || !config.platforms.length) return;

        var live = config.platforms.filter(function (platform) { return !!platform.url; });
        var soon = config.platforms.filter(function (platform) { return !platform.url; });

        document.querySelectorAll('[data-streaming-platforms]').forEach(function (container) {
            var wrapper = document.createElement('div');
            wrapper.className = 'platform-groups';

            if (live.length) {
                wrapper.appendChild(createPlatformGroup('Listen now', live, config));
            }
            if (soon.length) {
                wrapper.appendChild(createPlatformGroup('Coming soon', soon, config));
            }

            container.innerHTML = '';
            container.appendChild(wrapper);
        });
    }

    function renderReleaseDigest() {
        var config = window.SD_RELEASES;
        if (!config) return;

        document.querySelectorAll('[data-release-digest]').forEach(function (container) {
            container.innerHTML = '';

            var section = document.createElement('section');
            section.className = 'release-digest';
            section.setAttribute('aria-labelledby', 'releases-heading');

            var heading = document.createElement('h2');
            heading.id = 'releases-heading';
            heading.className = 'release-digest__heading';
            heading.textContent = 'New Releases';
            section.appendChild(heading);

            if (config.featured) {
                var featured = document.createElement('div');
                featured.className = 'release-digest__featured';

                var badge = document.createElement('span');
                badge.className = 'release-digest__badge';
                badge.textContent = config.featured.badge || 'Out Now';
                featured.appendChild(badge);

                var body = document.createElement('div');
                body.className = 'release-digest__featured-body';

                var title = document.createElement('span');
                title.className = 'release-digest__featured-title';
                title.textContent = config.featured.title || '';
                body.appendChild(title);

                var meta = document.createElement('span');
                meta.className = 'release-digest__featured-meta';
                meta.textContent = config.featured.meta || '';
                body.appendChild(meta);

                featured.appendChild(body);

                if (config.featured.href) {
                    var link = document.createElement('a');
                    link.className = 'release-digest__featured-link';
                    link.href = config.featured.href;
                    link.textContent = config.featured.linkText || 'Listen →';
                    featured.appendChild(link);
                }

                section.appendChild(featured);
            }

            if (config.items && config.items.length) {
                var list = document.createElement('ul');
                list.className = 'release-digest__list';

                config.items.forEach(function (item) {
                    var li = document.createElement('li');
                    var row = document.createElement('a');
                    row.className = 'release-digest__item';
                    row.href = item.href || '#';

                    var rowTitle = document.createElement('span');
                    rowTitle.className = 'release-digest__item-title';
                    rowTitle.textContent = item.title || '';
                    row.appendChild(rowTitle);

                    var rowMeta = document.createElement('span');
                    rowMeta.className = 'release-digest__item-meta';
                    rowMeta.textContent = item.meta || '';
                    row.appendChild(rowMeta);

                    li.appendChild(row);
                    list.appendChild(li);
                });

                section.appendChild(list);
            }

            if (config.note) {
                var note = document.createElement('p');
                note.className = 'release-digest__note';
                note.textContent = config.note;
                section.appendChild(note);
            }

            container.appendChild(section);
        });
    }

    function initPageBanners() {
        document.querySelectorAll('[data-banner]').forEach(function (section) {
            var url = section.getAttribute('data-banner');
            var fallbackClass = section.getAttribute('data-fallback') || 'devotion-bg';
            var fallback = section.querySelector('.page-banner__fallback');
            var imageLayer = section.querySelector('.page-banner__image');

            if (fallback) {
                fallback.classList.add(fallbackClass);
            }
            if (!url || !imageLayer) return;

            var loadedUrl = url.indexOf('?') >= 0 ? url : url + '?v=2';
            var img = new Image();
            img.onload = function () {
                imageLayer.style.backgroundImage = "url('" + loadedUrl + "')";
                imageLayer.classList.add('is-loaded');
            };
            img.onerror = function () {
                imageLayer.classList.add('hidden');
            };
            img.src = loadedUrl;
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadPartials();
        initPageBanners();
        renderReleaseDigest();
        renderStreamingPlatforms();
        initAppleMusicEmbeds();
    });
})();