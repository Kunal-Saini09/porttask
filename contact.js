const contactForm = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');

if (contactForm && statusMessage) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const subject = String(formData.get('subject') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!name || !email || !subject || !message) {
            statusMessage.textContent = 'Please complete all fields before sending your message.';
            statusMessage.style.color = '#b91c1c';
            return;
        }

        statusMessage.textContent = `Thanks, ${name}. Your message was sent successfully.`;
        statusMessage.style.color = '#0f766e';
        contactForm.reset();
    });
}