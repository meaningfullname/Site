// // java.js
// import { addUser, findUser } from './scripts.js';
//
// // Signup function to handle user registration
// function signup() {
//     const name = document.querySelector(".names").value;
//     const email = document.querySelector(".something").value;
//     const course = document.querySelector(".course").value;
//
//     let currentUser = findUser(name, email);
//
//     if (currentUser) {
//         alert("User already exists!");
//     } else {
//         // Add the new user and save to localStorage
//         addUser(name, email, course);
//         alert("User registered successfully!");
//         window.location.href = "home.html"; // Redirect to home page
//     }
// }
//
// // Login function to handle user login
// function login() {
//     const name = document.querySelector(".names").value;
//     const email = document.querySelector(".something").value;
//
//     let currentUser = findUser(name, email);
//
//     if (currentUser) {
//         alert("Login successful!");
//         window.location.href = "home.html"; // Redirect to home page
//     } else {
//         alert("User not found or invalid credentials");
//     }
// }
//
// // Event listeners for signup and login form submissions
// document.querySelector(".form").addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent default form submission
//     signup();
// });
//
// document.querySelector(".format").addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent default form submission
//     login();
// });

// Define the admin credentials (these would be securely stored and verified server-side in a real application)
// Define the admin credentials (these would be securely stored and verified server-side in a real application)
const adminCredentials = {
    username: "adminUser",
    email: "admin@example.com"
};

// Handle the admin login function
function handleAdminLogin() {
    // Get the values from the form fields
    const usernameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;

    // Check if the entered credentials match the admin's credentials
    if (usernameInput === adminCredentials.username && emailInput === adminCredentials.email) {
        alert("Welcome, Admin!");
        // Redirect to the admin dashboard page
        window.location.href = "admin.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid credentials. Please try again.");
        return false; // Prevent form submission
    }
}


