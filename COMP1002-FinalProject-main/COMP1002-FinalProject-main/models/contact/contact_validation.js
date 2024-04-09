const username = document.getElementById('Username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (username.value === '' || username.value == null) {
        messages.push("Please Enter your name");
    }
    if (email.value === '' || email.value == null) {
        messages.push("Please Enter your email");
    }
    if (phone.value === '' || phone.value == null) {
        messages.push("Please Enter your phone number");
    }
    if (message.value === '' || message.value == null) {
        messages.push("Please Enter your message");
    }
    if (messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ');
    }
});

// Adding listeners for other fields
username.addEventListener('blur', () => {
    if (username.value.trim() === '') {
        error.innerText = "Please Enter your name";
    } else {
        error.innerText = '';
    }
});

email.addEventListener('blur', () => {
    if (email.value.trim() === '') {
        error.innerText = "Please Enter your email";
    } else {
        error.innerText = '';
    }
});

phone.addEventListener('blur', () => {
    if (phone.value.trim() === '') {
        error.innerText = "Please Enter your phone number";
    } else {
        error.innerText = '';
    }
});

message.addEventListener('blur', () => {
    if (message.value.trim() === '') {
        error.innerText = "Please Enter your message";
    } else {
        error.innerText = '';
    }
});
