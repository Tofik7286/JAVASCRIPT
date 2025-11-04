// Q.5- Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.
let number1 = parseInt(prompt("Enter Number 1 "))
let number2 = parseInt(prompt("Enter Number 2 "))
let operand = prompt("Enter Operand +,-,*,/ ")

switch (operand) {
    case '+':
        alert(`Result is : ${number1 + number2}`)
        break;
    case '-':
        alert(`Result is : ${number1 - number2}`)
        break;
    case '*':
        alert(`Result is : ${number1 * number2}`)
        break;
    case '/':
        alert(`Result is : ${number1 / number2}`)
        break;

    default:
        alert("Enter Valid Operand")
        break;
}