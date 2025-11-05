// 5. Simple Password Checker (Fixed Attempts)
let correct_password = "hello"
let password;
let attempt = 3;
while (attempt!=0) {
    password = prompt("Enter Password ")
    if (password === correct_password) {
        console.log(`Hurray your password is correct `)
        break
    }
    else{
        attempt = attempt - 1
        console.log(`Sorry ! Incorrect Password you left ${attempt}`)
    }
}