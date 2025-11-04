// Challenge 1:
// Scenario: A website gives discounts based on the total shopping cart amount.

// Question:
// Write a program where:

// If the cart value is less than $50, no discount is applied.
// If the cart value is between $50 and $100, apply a 10% discount.
// If the cart value is more than $100, apply a 20% discount.
// Display the final cart total after the discount.

cart_value = 200
if (cart_value < 50) {
    final_amount = cart_value
    console.log(`No discount is applied, your total cart is ${final_amount}`)
}
else if(cart_value >=50 && cart_value<=100){
    final_amount =cart_value- cart_value*0.10
    console.log(`10% discount your total cart is ${final_amount}`)
}
else if(cart_value > 100){
    final_amount = cart_value - cart_value*0.20
    console.log(`20% discount applied your total cart is ${final_amount}`)
}