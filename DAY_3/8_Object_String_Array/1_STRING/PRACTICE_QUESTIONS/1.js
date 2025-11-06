// 1.Create a program to take full name from user and generate a username start
// with @, followed by their full name and ends with underscore followed by the
// length of full name.

let full_name = prompt("Enter your full name").trim().toLowerCase().replace(" ","") 
let username = '@' + full_name + '_' + full_name.length
console.log(username)