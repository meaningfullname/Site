
let userDatabase = [
    { name: "admin", email: "admin@gmail.com", course: null }
];

// Function to add a user
function addUser(name, email, course) {
    userDatabase.push({ name: name, email: email, course: course });
}


function findUser(name, email) {
    return userDatabase.find(user => user.name === name && user.email === email);
}

function login() {
    const users = document.getElementsByClassName('names').value;
    const email = document.getElementsByClassName('something').value;
    const course = document.getElementsByClassName("course").value;

    addUser(users, email, course);

    console.log("User registered:", { name, email });
    showMainContent();


}

function signup() {
    const name = document.getElementsByClassName("names").value;
    const email = document.getElementsByClassName("something").value;

    let currentUser = findUser(name, email);

    if (currentUser) {
        console.log("User found:", currentUser);
        showMainContent();
    } else {
        alert("User not found or invalid credentials");
    }

}

function showMainContent() {
    // Hide login and register sections
    document.querySelector(".navbar-nav nav-item").style.display = "none";
    document.getElementById("registerSection").style.display = "none";

    // Show the main content
    document.getElementById("mainContent").style.display = "block";
}






// let currentUser = findUser(users, email);
//
// if (currentUser) {
//     console.log("User found:", currentUser);
// } else {
//     console.log("User not found or invalid credentials");
// }


function renderAdminPanel() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = `
    <h2>Admin Panel</h2>
    <button onclick="handleLogout()">Logout</button>
    <table id="userTable">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${userDatabase.map(user => `
          <tr>
            <td><input value="${user.name}" /></td>
            <td><input value="${user.email || ''}" /></td>
            <td><input value="${user.course || ''}" /></td>
            <td>
              <button onclick="updateUser('${user.name}')">Edit</button>
              <button onclick="deleteUser('${user.name}')">Delete</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <p id="adminFeedback"></p>
  `;
}


function handleLogout() {
    currentUser = null;
    renderLogin();
}


function updateUser(username) {
    // Find user row and update fields
    const userRow = [...document.querySelectorAll('#userTable tbody tr')].find(
        row => row.children[0].children[0].value === username
    );
    const updatedUser = {
        name: userRow.children[0].children[0].value,
        email: userRow.children[1].children[0].value,
        course: userRow.children[2].children[0].value,
    };
    const index = userDatabase.findIndex(u => u.name === username);
    userDatabase[index] = updatedUser;
    document.getElementById("adminFeedback").innerText = "User updated successfully!";
}


function deleteUser(username) {
    if (confirm("Are you sure you want to delete this user?")) {
        const index = userDatabase.findIndex(u => u.name === username);
        userDatabase.splice(index, 1);
        renderAdminPanel();
    }
}



