document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var input = document.getElementById('message-input');
    var message = input.value.trim();
    if (message !== '') {
        var messages = document.getElementById('chat-messages');
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message');
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
        input.value = '';
    }
}