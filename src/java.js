// java.js
import { addUser, findUser } from './scripts.js';

// Signup function to handle user registration
function signup() {
    const name = document.querySelector(".names").value;
    const email = document.querySelector(".something").value;
    const course = document.querySelector(".course").value;

    let currentUser = findUser(name, email);

    if (currentUser) {
        alert("User already exists!");
    } else {
        // Add the new user and save to localStorage
        addUser(name, email, course);
        alert("User registered successfully!");
        window.location.href = "home.html"; // Redirect to home page
    }
}

// Login function to handle user login
function login() {
    const name = document.querySelector(".names").value;
    const email = document.querySelector(".something").value;

    let currentUser = findUser(name, email);

    if (currentUser) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("User not found or invalid credentials");
    }
}

// Event listeners for signup and login form submissions
document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    signup();
});

document.querySelector(".format").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    login();
});
