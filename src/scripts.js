
const document=document.getElementsByClassName('som')[0];
document.addEventListener('mouseover', () => {

})
function initializeAdminUser() {
    const storedUsers = localStorage.getItem("users");
    let users;

    if (storedUsers) {
        users = JSON.parse(storedUsers);
        const adminExists = users.some(user => user.role === "admin");

        if (!adminExists) {
            users.push({
                name: "AdminUser",
                email: "admin@example.com",
                course: "N/A",
                role: "admin"
            });
            console.log("Admin user added to users array."); // Debugging
        } else {
            console.log("Admin user already exists in users array."); // Debugging
        }
    } else {
        users = [{
            name: "AdminUser",
            email: "admin@example.com",
            course: "N/A",
            role: "admin"
        }];
        console.log("Admin user initialized as first user in localStorage."); // Debugging
    }

    localStorage.setItem("users", JSON.stringify(users));
}

initializeAdminUser();


function signup(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;


    // Retrieve users from local storage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    localStorage.setItem("users", JSON.stringify(users));

    // Check if user with the same email already exists
    if (users.some(user => user.email === email)) {
        alert("A user with this email already exists.");
        return;
    }

    // Add new user object
    const user = { name, email, course, role: "user" };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");

    // Redirect to login page
    window.location.href = "Login.html";
}

// Function to handle login
function handleAdminLogin() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];


    // Check if user exists and determine role
    const user = users.find(u => u.email === email && u.name === name);

    if (user) {
        if (user.role === "admin") {
            window.location.href = "admin.html"; // Redirect to admin panel
        } else {
            window.location.href = "home.html"; // Redirect for regular users
        }
    } else {
        alert("Invalid login details");
    }
    return false;
}



// Function to delete a user
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1); // Remove user at index
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers(); // Reload table
}


let editIndex = -1;




function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userTableBody = document.getElementById('userTableBody');

    userTableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.course}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

function handleUserFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const role = document.getElementById('role').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (editIndex !== -1) {
        users[editIndex] = { name, email, course, role };
        editIndex = -1;
    } else {
        users.push({ name, email, course, role });
    }

    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
    closeUserForm();
}

function editUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];

    editIndex = index;

    document.getElementById('username').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('course').value = user.course;
    document.getElementById('role').value = user.role;

    document.getElementById('userFormModal').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Edit User';
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAdminUser();
    loadUsers();
});



const line=document.createElement('div')
line.offsetHeight = 20;
line.offsetWidth = 20;
line.color='red'
document.body.footer.appendChild(line);



// Function to toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


