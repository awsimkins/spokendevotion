(function () {
    'use strict';

    var ENDPOINT = 'https://api.web3forms.com/submit';

    function getAccessKey() {
        var key = window.SD_CONTACT && window.SD_CONTACT.accessKey;
        if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
            var form = document.getElementById('contact-form');
            key = form && form.getAttribute('data-access-key');
        }
        if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') return null;
        return key;
    }

    function setSubmitting(button, isSubmitting) {
        if (!button) return;
        button.disabled = isSubmitting;
        button.innerHTML = isSubmitting
            ? '<i class="fa-solid fa-spinner fa-spin"></i> Sending...'
            : '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }

    function showThankYouModal() {
        var modal = document.getElementById('thank-you-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    window.closeThankYouModal = function () {
        var modal = document.getElementById('thank-you-modal');
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    function initThankYouModal() {
        var modal = document.getElementById('thank-you-modal');
        if (!modal) return;

        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeThankYouModal();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                closeThankYouModal();
            }
        });
    }

    function initContactForm() {
        var form = document.getElementById('contact-form');
        if (!form) return;

        var submitBtn = form.querySelector('button[type="submit"]');
        var errorEl = document.getElementById('form-error');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var botcheck = form.querySelector('input[name="botcheck"]');
            if (botcheck && botcheck.checked) return;

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            var accessKey = getAccessKey();
            if (!accessKey) {
                if (errorEl) {
                    errorEl.textContent = 'Contact form is not configured yet. Please check back soon.';
                    errorEl.classList.remove('hidden');
                }
                return;
            }

            if (errorEl) errorEl.classList.add('hidden');
            setSubmitting(submitBtn, true);

            var firstName = (form.querySelector('[name="first_name"]') || {}).value || '';
            var lastName = (form.querySelector('[name="last_name"]') || {}).value || '';
            var email = (form.querySelector('[name="email"]') || {}).value || '';
            var subject = (form.querySelector('[name="subject"]') || {}).value || 'General';
            var message = (form.querySelector('[name="message"]') || {}).value || '';
            var phone = (form.querySelector('[name="phone"]') || {}).value || '';
            var wantsResponse = form.querySelector('[name="wants_response"]');
            var wantsResponseValue = wantsResponse && wantsResponse.checked ? 'Yes' : 'No';

            var subjectLabels = {
                general: 'General Question',
                prayer: 'Prayer Request',
                feedback: 'Feedback',
                partnership: 'Partnership / Ministry',
                technical: 'Website / Technical Issue',
                other: 'Other'
            };

            var payload = {
                access_key: accessKey,
                subject: 'Spoken Devotion Contact: ' + (subjectLabels[subject] || subject || 'New Message'),
                from_name: 'Spoken Devotion Website',
                name: (firstName + ' ' + lastName).trim(),
                email: email,
                message: message,
                phone: phone || 'Not provided',
                'Wants Official Response': wantsResponseValue,
                'First Name': firstName,
                'Last Name': lastName,
                'Topic': subjectLabels[subject] || subject || 'Not specified'
            };

            fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function (response) {
                    return response.json().then(function (data) {
                        if (!response.ok || !data.success) {
                            throw new Error(data.message || 'Submit failed');
                        }
                        return data;
                    });
                })
                .then(function () {
                    form.reset();
                    showThankYouModal();
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

    function init() {
        initThankYouModal();
        initContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();