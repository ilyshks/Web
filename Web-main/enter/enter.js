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
    var password = document.getElementById('password').value;

    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');

    usernameError.textContent = '';
    passwordError.textContent = '';

    if (username === '') {
        usernameError.textContent = 'Имя пользователя не может быть пустым';
    }

    if (password === '') {
        passwordError.textContent = 'Пароль не может быть пустым';
    } else if (!validatePassword(password)) {
        passwordError.textContent = 'Пароль должен содержать не менее 8 символов, буквы и цифры';
    }

    if (username !== '' && validatePassword(password)) {
        window.open("../Profile/profile.html","_self");
    }
});

function validatePassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
}
