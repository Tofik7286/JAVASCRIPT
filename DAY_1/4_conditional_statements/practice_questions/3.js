// Q.3- Write a program to manage Role-Based Access Control
// Given a user role ("admin", "editor", "viewer"):
// Admin: full access
// Editor: edit access
// Viewer: read-only
// Any other: no access
// Use switch.
let role = "viewer"
switch (role) {
    case "editor":
        console.log("Edit Access")
        break;
    case "admin":
        console.log("Full Access");
        break;
    case "viewer" :
        console.log("read only");
        break;
    default:
        console.log("No Access");
        break;
}