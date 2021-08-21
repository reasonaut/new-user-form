import './style.css';

const registrationForm = document.getElementById('registration-form');
const emailInput = document.getElementById('email-input');
const countryInput = document.getElementById('country-input');
const zipInput = document.getElementById('zip-input');
const pswInput = document.getElementById('psw-input');
const pswRepeatInput = document.getElementById('psw-repeat-input');
const submitButton = document.getElementById('submit-button');

const appendError = (element, errorMsg) => {
    if (element.nextSibling.tagName.toLowerCase() !== 'span') {
        const notification = document.createElement('span');
        notification.innerText = errorMsg;
        // insert notification span after input
        element.parentNode.insertBefore(notification, element.nextSibling);
    }
};
const validateEmail = () => {
    if (!emailInput.checkValidity()) {
        appendError(emailInput, 'Email is malformed');
        return false;
    }
    return true;
};
const validateCountry = () => {
    if (!countryInput.checkValidity()) {
        appendError(countryInput, 'Country must be at least 3 characters');
        return false;
    }
    return true;
};

const validateZip = () => {
    if (!zipInput.checkValidity()) {
        appendError(zipInput, 'Zip must be at least 4 characters');
        return false;
    }
    return true;
};

const validatePassword = () => {
    if (
        !pswInput.checkValidity() ||
        !pswRepeatInput.checkValidity() ||
        pswInput.value !== pswRepeatInput.value
    ) {
        appendError(
            pswInput,
            'Password must be matching and at least 7 characters'
        );
        return false;
    }
    return true;
};

const clearErrorMsg = (element) => {
    if (element.nextSibling.tagName.toLowerCase() === 'span')
        element.nextSibling.remove();
};

const validateForm = (e) => {
    e.preventDefault();
    if (validateEmail() && validateCountry() && validateZip() && validatePassword())
        // eslint-disable-next-line no-alert
        alert('All fields validated - highfive!')
};
const validateInput = (element) => {
    const name = element.getAttribute('name');
    if (name === 'email') validateEmail();
    if (name === 'country') validateCountry();
    if (name === 'zip') validateZip();
    if (name === 'psw' || name === 'psw-repeat') validatePassword();
};
// add listeners for input focusin event
registrationForm.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focusin', (e) => {
        clearErrorMsg(e.target);
    });
});
// add listeners for input focusout event
registrationForm.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focusout', (e) => {
        validateInput(e.target);
    });
});

submitButton.addEventListener('click', validateForm);
