// Initialize an empty array to store users
let users = [];

// Admin credentials
const adminCredentials = {
    username: "adminUser",
    email: "admin@example.com"
};

// Handle user signup and save details
function signup(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Create a user object and add it to the users array
    const newUser = { name, email, course, role: "User" };
    users.push(newUser);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";

    alert("User registered successfully!");

    // Update admin panel (if admin panel is loaded)
    if (document.getElementById("userTableBody")) {
        updateAdminPanel();
    }

    // Redirect the user to the homepage
    window.location.href = "home.html";
}

// Function to update the admin panel table
function updateAdminPanel() {
    const userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = ""; // Clear previous entries

    // Populate table with current users
    users.forEach((user, index) => {
        const row = userTableBody.insertRow();

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.course}</td>
            <td>${user.role}</td>
            <td>
                <button class="edit-btn" onclick="editUser(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
    });
}

// Example edit and delete functions
function editUser(index) {
    alert("Edit functionality for user: " + users[index].name);
}

function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1);
        updateAdminPanel();
    }
}
