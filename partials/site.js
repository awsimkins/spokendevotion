(function () {
    'use strict';

    async function loadPartials() {
        await Promise.all([
            loadPartial('nav-root', '/partials/nav.html'),
            loadPartial('footer-root', '/partials/footer.html')
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
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.add('hidden');
                if (icon) icon.className = 'fa-solid fa-bars text-2xl';
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
        const sections = ['worship', 'prayer', 'confessions', 'bible', 'instrumental'];
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
        const url = getAudioUrl(filename, section);
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

    window.loadFeatured = async function (pageUrl, targetId, pageName, folderPrefix) {
        const container = document.getElementById(targetId);
        if (!container) return;

        try {
            const response = await fetch(pageUrl);
            if (!response.ok) throw new Error('HTTP ' + response.status);

            const htmlText = await response.text();
            const doc = new DOMParser().parseFromString(htmlText, 'text/html');
            const featured = doc.getElementById('featured-item');
            if (!featured) throw new Error('No featured item found');

            featured.querySelectorAll('audio').forEach(function (audio) {
                audio.setAttribute('controlsList', 'nodownload');
            });

            featured.querySelectorAll('audio source').forEach(function (source) {
                const src = source.getAttribute('src');
                if (src && !src.includes('/')) {
                    source.setAttribute('src', folderPrefix + src);
                }
            });

            featured.querySelectorAll('a[download]').forEach(function (link) { link.remove(); });
            featured.querySelectorAll('button').forEach(function (btn) {
                const text = btn.textContent.toLowerCase();
                if (text.includes('show') || text.includes('lyrics') || text.includes('poetry') || text.includes('prayer')) {
                    btn.remove();
                }
            });

            const sectionName = folderPrefix.replace(/\/$/, '');
            featured.querySelectorAll('button[onclick*="shareAudio"]').forEach(function (btn) {
                const onclick = btn.getAttribute('onclick') || '';
                const match = onclick.match(/shareAudio\('([^']+)',\s*'([^']+)'/);
                if (match) {
                    btn.setAttribute('onclick', "shareAudio('" + match[1] + "', '" + match[2] + "', '" + sectionName + "')");
                }
            });

            featured.removeAttribute('id');
            container.innerHTML = featured.outerHTML;

            const card = container.firstElementChild;
            if (card) {
                const btnDiv = document.createElement('div');
                btnDiv.className = 'mt-6 text-center';
                btnDiv.innerHTML =
                    '<a href="' + pageUrl + '" class="inline-flex items-center gap-x-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold rounded-2xl text-sm transition-all">' +
                    '<i class="fa-solid fa-arrow-right"></i> View full ' + pageName + ' page</a>';
                card.appendChild(btnDiv);
            }
        } catch (error) {
            console.error('Could not load featured content from ' + pageUrl, error);
            container.innerHTML =
                '<p class="text-white/50 text-sm">Unable to load featured content. ' +
                '<a href="' + pageUrl + '" class="text-amber-400 underline">Visit ' + pageName + '</a></p>';
        }
    };

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

            var img = new Image();
            img.onload = function () {
                imageLayer.style.backgroundImage = "url('" + url + "')";
                imageLayer.classList.add('is-loaded');
            };
            img.onerror = function () {
                imageLayer.classList.add('hidden');
            };
            img.src = url;
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        loadPartials();
        initPageBanners();

        if (document.getElementById('featured-confessions')) {
            loadFeatured('confessions/', 'featured-confessions', 'Confessions', 'confessions/');
            loadFeatured('worship/', 'featured-worship', 'Worship', 'worship/');
            loadFeatured('prayer/', 'featured-prayer', 'Prayer', 'prayer/');
        }
    });
})();