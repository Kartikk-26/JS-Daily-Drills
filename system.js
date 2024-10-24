// Simple Admin System in JavaScript

// Array to store users
let users = [];

// Function to add a user
function addUser(username, role) {
    const user = { id: users.length + 1, username: username, role: role };
    users.push(user);
    console.log(`${username} has been added as ${role}.`);
}

// Function to view all users
function viewUsers() {
    if (users.length === 0) {
        console.log("No users found.");
    } else {
        console.log("User List:");
        users.forEach(user => {
            console.log(`ID: ${user.id}, Username: ${user.username}, Role: ${user.role}`);
        });
    }
}

// Function to delete a user by ID
function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        console.log(`${deletedUser[0].username} has been removed.`);
    } else {
        console.log(`User with ID ${id} not found.`);
    }
}

// Admin System Example Usage
addUser("Alice", "Admin");
addUser("Bob", "Editor");
addUser("Charlie", "Viewer");

viewUsers(); // Displays all users

deleteUser(2); // Deletes user with ID 2 (Bob)

viewUsers(); // Displays the updated user list
