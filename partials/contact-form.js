(function () {
    'use strict';

    function getEndpoint() {
        var id = window.SD_CONTACT && window.SD_CONTACT.formspreeId;
        if (!id || id === 'YOUR_FORMSPREE_ID') return null;
        return 'https://formspree.io/f/' + id;
    }

    function setSubmitting(button, isSubmitting) {
        if (!button) return;
        button.disabled = isSubmitting;
        button.innerHTML = isSubmitting
            ? '<i class="fa-solid fa-spinner fa-spin"></i> Sending...'
            : '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }

    function initContactForm() {
        var form = document.getElementById('contact-form');
        if (!form) return;

        var submitBtn = form.querySelector('button[type="submit"]');
        var errorEl = document.getElementById('form-error');
        var successEl = document.getElementById('form-success');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var gotcha = form.querySelector('input[name="_gotcha"]');
            if (gotcha && gotcha.value) return;

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            var endpoint = getEndpoint();
            if (!endpoint) {
                if (errorEl) {
                    errorEl.textContent = 'Contact form is not configured yet. Please check back soon.';
                    errorEl.classList.remove('hidden');
                }
                return;
            }

            if (errorEl) errorEl.classList.add('hidden');
            setSubmitting(submitBtn, true);

            var formData = new FormData(form);
            var firstName = formData.get('first_name') || '';
            var lastName = formData.get('last_name') || '';
            var subject = formData.get('subject') || 'New Message';
            formData.append('_subject', 'Spoken Devotion Contact: ' + subject);
            formData.append('full_name', (firstName + ' ' + lastName).trim());

            fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' }
            })
                .then(function (response) {
                    if (!response.ok) throw new Error('Submit failed');
                    form.classList.add('hidden');
                    if (successEl) successEl.classList.remove('hidden');
                })
                .catch(function (err) {
                    console.error('Contact form error:', err);
                    if (errorEl) {
                        errorEl.textContent = 'Something went wrong. Please try again in a moment.';
                        errorEl.classList.remove('hidden');
                    }
                })
                .finally(function () {
                    setSubmitting(submitBtn, false);
                });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
})();