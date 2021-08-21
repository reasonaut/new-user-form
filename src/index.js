import './style.css';

const emailInput = document.getElementById('email-input');

const validateEmail = (e) => {
    e.preventDefault();
    const addressToCheck = document.getElementById('email-input');
    if (!addressToCheck.checkValidity()) {
        if (emailInput.nextSibling.tagName.toLowerCase() !== 'span') {
            const notification = document.createElement('span');
            notification.innerText = 'Email is malformed';
            // insert notification span after input
            addressToCheck.parentNode.insertBefore(
                notification,
                addressToCheck.nextSibling
            );
        }
    }
};

const submitButton = document.getElementById('submit-button');

emailInput.addEventListener('focusin', () => {
    if (emailInput.nextSibling.tagName.toLowerCase() === 'span')
        emailInput.nextSibling.remove();
});
submitButton.addEventListener('click', validateEmail);
