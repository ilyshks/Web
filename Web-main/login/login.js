document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Здесь должна быть логика отправки данных на сервер для авторизации
        console.log(`Username: ${username}, Password: ${password}`);

        // Очищаем поля формы
        loginForm.reset();
    });
});


function openNewPage() {
  window.open("https://vk.com", "_blank");
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (username === '') {
        usernameError.textContent = 'Имя пользователя не может быть пустым';
    }

    if (email === '') {
        emailError.textContent = 'Email не может быть пустым';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Некорректный email';
    }

    if (password === '') {
        passwordError.textContent = 'Пароль не может быть пустым';
    } else if (!validatePassword(password)) {
        passwordError.textContent = 'Пароль должен содержать не менее 8 символов, буквы и цифры';
    }

    if (username !== '' && validateEmail(email) && validatePassword(password)) {
        window.open("../Profile/profile.html","_self");
    }

});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
}