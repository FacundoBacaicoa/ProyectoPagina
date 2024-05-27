const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const submitStatus = document.getElementById("submitStatus");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearErrors();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, ingresa tu nombre';
        isValid = false;
    } else if (nameInput.value.trim().length > 20) {
        nameError.textContent = 'El nombre no puede tener más de 20 caracteres';
        isValid = false;
    }

    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Por favor, ingresa tu número de teléfono';
        isValid = false;
    }else if (phoneInput.value.trim().length > 10) {
        phoneError.textContent = 'El número no puede tener más de 10 caracteres';
        isValid = false;
    }
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Por favor, ingresa tu correo electrónico';
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Por favor, ingresa un correo electrónico válido';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Por favor, ingresa un mensaje';
        isValid = false;
    }else if (messageInput.value.trim().length > 100) {
        messageError.textContent = 'El mensaje no puede tener más de 100 caracteres';
        isValid = false;
    }

    if (isValid) {
        submitStatus.innerHTML = '<p class="success">¡Gracias por contactarnos, en breve revise su mail!</p>';
        form.reset();
    } else {
        submitStatus.innerHTML = '<p class="error">Error al enviar el formulario. Por favor, corrige los errores.</p>';
    }
});

function clearErrors() {
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    submitStatus.innerHTML = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}