// 4- Check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5,
//  "FizzBuzz" for both.
let number = 15

if (number % 3 == 0 && number % 5 == 0){
    console.log("Fizz Buzz");
}
else if (number % 5 == 0) {
    console.log("Buzz");
}
else if (number % 3 == 0) {
    console.log("Fizz");
}