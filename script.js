// Basic JavaScript functionality (can be expanded)

//Example of adding a new message (does not persist)

const sendButton = document.querySelector('.chat-footer button');
const messageInput = document.querySelector('.chat-footer input');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = messageText;
        chatMessages.appendChild(messageElement);
        messageInput.value = ''; // Clear input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendButton.click(); // Trigger send button click on Enter key
        event.preventDefault(); // Prevent default form submission behavior
    }
});