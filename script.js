document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    


    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвратить стандартную отправку формы

        let isValid = true;

        // Валидация имени
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Пожалуйста, введите ваше имя.';
            nameInput.classList.add('error'); // Добавить класс для стилизации ошибки
            isValid = false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('error');
        }

        // Валидация email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Пожалуйста, введите ваш email.';
            emailInput.classList.add('error');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Пожалуйста, введите корректный email.';
            emailInput.classList.add('error');
            isValid = false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
        }

        // Валидация сообщения
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Пожалуйста, введите текст сообщения.';
            messageInput.classList.add('error');
            isValid = false;
        } else {
            messageError.textContent = '';
            messageInput.classList.remove('error');
        }

        if (isValid) {
            // Форма валидна, выводим данные
            let message = `
                Имя: ${nameInput.value}
                Телефон: ${phoneInput.value}
                Email: ${emailInput.value}
                Сообщение: ${messageInput.value}
            `;
            alert(message);

            // Очистка формы (по желанию)
            form.reset();
        }
    });

    function isValidEmail(email) {
        // Простая проверка email (можно использовать более сложную)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

