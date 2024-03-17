document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var car = document.getElementById('car').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var dateError = document.getElementById('dateError');
    var carError = document.getElementById('carError');
    
    nameError.textContent = '';
    emailError.textContent = '';
    dateError.textContent = '';
    carError.textContent = '';

    if (name === '') {
        nameError.textContent = 'Пожалуйста, введите имя.';
    }

    if (email === '') {
        emailError.textContent = 'Пожалуйста, введите email.';
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Пожалуйста, введите корректный email.';
    }

    if(date === ''){
        dateError.textContent = 'Пожалуйста, выберите время.';
    }

    if(car === ''){
        carError.textContent = 'Пожалуйста, выберите автомобиль.';
    }

    if (name !== '' && email !== '' && validateEmail(email) && date !== '' && car !== '') {
        alert('Трек и авто забронированы!');
    }
});



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}