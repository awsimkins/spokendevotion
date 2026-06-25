(function () {
    'use strict';

    function getFormsparkEndpoint() {
        var formId = window.SD_CONTACT && window.SD_CONTACT.formId;
        if (!formId || formId === 'YOUR_FORMSPARK_FORM_ID') {
            return null;
        }
        return 'https://submit.formspark.io/' + encodeURIComponent(formId);
    }

    function getTurnstileToken() {
        if (!window.turnstile || window.SD_CONTACT.turnstileWidgetId == null) {
            return '';
        }
        return window.turnstile.getResponse(window.SD_CONTACT.turnstileWidgetId) || '';
    }

    function resetTurnstile() {
        if (window.turnstile && window.SD_CONTACT.turnstileWidgetId != null) {
            window.turnstile.reset(window.SD_CONTACT.turnstileWidgetId);
        }
    }

    function initTurnstile() {
        var siteKey = window.SD_CONTACT && window.SD_CONTACT.turnstileSiteKey;
        if (!siteKey) return;

        var container = document.getElementById('turnstile-widget');
        if (!container) return;

        function renderWidget() {
            if (!window.turnstile) {
                window.setTimeout(renderWidget, 100);
                return;
            }
            window.SD_CONTACT.turnstileWidgetId = window.turnstile.render('#turnstile-widget', {
                sitekey: siteKey,
                theme: 'dark'
            });
        }

        renderWidget();
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

            var gotcha = form.querySelector('input[name="_gotcha"]');
            if (gotcha && gotcha.value) return;

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            var endpoint = getFormsparkEndpoint();
            if (!endpoint) {
                if (errorEl) {
                    errorEl.textContent = 'Contact form is not configured yet. Please check back soon.';
                    errorEl.classList.remove('hidden');
                }
                return;
            }

            var turnstileToken = getTurnstileToken();
            if (window.SD_CONTACT.turnstileSiteKey && !turnstileToken) {
                if (errorEl) {
                    errorEl.textContent = 'Please complete the security check below, then try again.';
                    errorEl.classList.remove('hidden');
                }
                return;
            }

            if (errorEl) errorEl.classList.add('hidden');
            setSubmitting(submitBtn, true);

            var firstName = (form.querySelector('[name="first_name"]') || {}).value || '';
            var lastName = (form.querySelector('[name="last_name"]') || {}).value || '';
            var email = (form.querySelector('[name="email"]') || {}).value || '';
            var subject = (form.querySelector('[name="subject"]') || {}).value || '';
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

            var topicLabel = subjectLabels[subject] || subject || 'Not specified';

            var payload = {
                _subject: 'Spoken Devotion Contact: ' + topicLabel,
                _email: email,
                first_name: firstName,
                last_name: lastName,
                name: (firstName + ' ' + lastName).trim(),
                email: email,
                topic: topicLabel,
                message: message,
                phone: phone || 'Not provided',
                wants_response: wantsResponseValue,
                _gotcha: ''
            };

            if (turnstileToken) {
                payload['cf-turnstile-response'] = turnstileToken;
            }

            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function (response) {
                    if (!response.ok) {
                        return response.text().then(function (text) {
                            throw new Error(text || 'Submit failed');
                        });
                    }
                    return response;
                })
                .then(function () {
                    form.reset();
                    resetTurnstile();
                    showThankYouModal();
                })
                .catch(function (err) {
                    console.error('Contact form error:', err);
                    resetTurnstile();
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
        initTurnstile();
        initContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();