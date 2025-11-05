// 2. Calculate the sum of numbers from ‘m’ to ‘n’.

let num1 = Number(prompt("Enter value for number 1 : "))
let num2 = Number(prompt("Enter value for number 2 : "))
let sum = 0
for(i=num1; i<=num2; i++){
    sum = sum + i
}
console.log(`Sum from ${num1} to ${num2} is : ${sum}`)