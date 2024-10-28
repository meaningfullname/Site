// Initialize userDatabase from localStorage or use default data
let userDatabase = JSON.parse(localStorage.getItem("userDatabaseJSON")) || [
    { name: "admin", email: "admin@gmail.com", course: null }
];


export function addUser(name, email, course) {
    userDatabase.push({ name, email, course });
    // Save the updated user database to localStorage
    localStorage.setItem("userDatabaseJSON", JSON.stringify(userDatabase));
    console.log("User added:", { name, email, course });
}

// Export a function to check if a user exists
export function findUser(name, email) {
    return userDatabase.find(user => user.name === name && user.email === email);
}

// Export a function to get the entire user database (if needed for debugging)
export function getUserDatabase() {
    return userDatabase;
}

console.log(userDatabase);

