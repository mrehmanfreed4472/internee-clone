// Add this to js/chat.js
document.addEventListener("DOMContentLoaded", () => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', () => {
        console.log('Connected to WebSocket server');
    });

    socket.addEventListener('message', event => {
        const messages = document.getElementById('messages');
        const message = document.createElement('div');
        message.textContent = event.data;
        messages.appendChild(message);
    });

    const chatForm = document.getElementById('chatForm');
    chatForm.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.getElementById('messageInput');
        const message = input.value;
        socket.send(message);
        input.value = '';
    });
});
