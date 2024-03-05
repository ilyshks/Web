document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    nameError.textContent = '';
    emailError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Пожалуйста, введите имя.';
    }

    if (email === '') {
        emailError.textContent = 'Пожалуйста, введите email.';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Пожалуйста, введите корректный email.';
    }

    if (name !== '' && email !== '' && validateEmail(email)) {
        alert('Трек и авто забронированы!');
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}