(function () {
    'use strict';

    async function loadPartials() {
        await Promise.all([
            loadPartial('nav-root', '/partials/nav.html?v=18'),
            loadPartial('footer-root', '/partials/footer.html?v=14')
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
    });
})();