// Q.6- Create a simple ATM program.
// User can choose:
// 1. Check Balance
// 2. Deposit
// 3. Withdraw
// 4. Exit
// Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show
// the message with a new balance. And in case of “Withdraw” if withdraw amount is greater than balance then or less
// than 1Rs then produce error otherwise withdraw amount and show remaining balance.

let totalBalance = 100000

let usersChoice = Number(prompt("Enter your choice [1. Check Balance 2. Deposit 3. Withdraw 4. Exit]: "));

if(usersChoice === 1){
    console.log("your current balance is : ", totalBalance)
}else if(usersChoice === 2){
    let depositAmount = Number(prompt("Enter Amount to deposit: "));
    if(depositAmount > 0){
        totalBalance += depositAmount;
        console.log("Deposit successful!")
        console.log("Your current balance is : ", totalBalance)
    }else{
        console.log("Please enter a valid deposit amount");
    }
}else if(usersChoice == 3){
    let withdrawAmount = Number(prompt("Enter Amount to deposit: "));
    if(withdrawAmount > 0 && withdrawAmount <= totalBalance){
        totalBalance -= withdrawAmount;
        console.log("Withdraw successful!")
        console.log("Your current balance is : ", totalBalance)
    }else{
        console.log("Please enter a valid withdraw amount.")
    }
}else{
    console.log("Thanks for coming!");
}