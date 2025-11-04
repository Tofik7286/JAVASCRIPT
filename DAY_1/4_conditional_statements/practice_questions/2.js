// Q.2- Find the smallest of three numbers. Numbers are given by the user.
let num1 = parseInt(prompt("Enter value for num 1 "))
let num2 = parseInt(prompt("Enter value for num 2 "))
let num3 = parseInt(prompt("Enter value for num 3 "))

if (num1 < num2 && num1 < num3) {
    console.log(`Smallest is  ${num1}`)    
}

else if (num2 < num1 && num2 < num3) {
    console.log(`Smallest is  ${num2}`)    
}
else{
    console.log(`Smallest is  ${num3}`)    
}
