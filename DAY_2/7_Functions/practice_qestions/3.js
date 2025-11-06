// 3. Make an arrow function that takes a price and a discount, and returns the price after
// discount
let price = 100
let discount = 10

let price_after_discount = (price,discount)=>{
    discount_price = price - price * (discount / 100)
    return discount_price
}

let result = price_after_discount(price,discount)
console.log(result);
