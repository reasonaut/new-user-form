import './style.css';




const validateEmail = (e) => {
    e.preventDefault();
    const addressToCheck = document.getElementById('email-input');
    if (!addressToCheck.checkValidity()) {
        const notification = document.createElement('span');
        notification.innerText = 'Email is malformed';
        // insert notification span after input
        addressToCheck.parentNode.insertBefore(notification, addressToCheck.nextSibling);
    };
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', validateEmail);
