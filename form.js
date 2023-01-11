const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Select form fields
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Select error message elements
    const firstNameErr = document.querySelector('.first-name-err');
    const lastNameErr = document.querySelector('.last-name-err');
    const emailErr = document.querySelector('.email-err');
    const phoneErr = document.querySelector('.phone-err');
    const pwErr = document.querySelector('.pw-err');
    const cpwErr = document.querySelector('.cpw-err');

    // Check first name field
    if (!firstName.value) {
        firstNameErr.textContent = "Please enter a first name.";
    } else {
        firstNameErr.textContent = "";
    }

    // Check last name field
    if (!lastName.value) {
        lastNameErr.textContent = "Please enter a last name.";
    } else {
        lastNameErr.textContent = "";
    }

    // Check email field
    if (!email.value) {
        emailErr.textContent = "Please enter a valid email address.";
    } else {
        emailErr.textContent = "";
    }

    // Check phone field
    phone.value = phone.value.replace(/\D/g, '');
    if (!phone.value) {
        phoneErr.textContent = "Please enter a phone number.";
    } else {
        phoneErr.textContent = "";
    }

    // Check password field
    if (password.value != confirmPassword.value) {
        passwordErr.textContent = "Passwords do not match.";
        confirmPasswordErr.textContent = "Passwords do not match.";
    } else {
        passwordErr.textContent = "";
        confirmPasswordErr.textContent = "";
    }
});

const phone = document.getElementById('phone');
phone.addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});