const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Validate form fields
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        alert('Please fill out all fields');
        return;
    }

    // Submit form
    const formData = { firstName, lastName, email, phone, password };
    console.log(formData);
});