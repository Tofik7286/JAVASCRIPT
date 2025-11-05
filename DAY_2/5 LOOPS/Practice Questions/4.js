// 4. Create a “Number Knock” game. (ask the user to keep guessing the number
// until the user enters correct guess) .

let correct_number = 10
let guess_number = Number(prompt("Guess the number : "))

do{
    guess_number = Number(prompt("Guess the number : "))
    
    
}while (guess_number!=correct_number);
if (guess_number == correct_number) {
    console.log("Hurray ! .. You guessed it correct")
    }