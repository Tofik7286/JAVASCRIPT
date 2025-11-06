// 2.Take a string and a character from the user and:


// a) count how many times that character appears in the string.
let str = prompt("Enter String ")
let ch = prompt("Enter Character ")
let count = 0;
// for(let i of str){
//     if (i === ch) {
//         count++
//     }
// }
// console.log(`The occurrence of ${ch} in ${str} = ${count}`)

// b) Case-Insensitive Version
// count = 0;
// for(let i of str){
//     if (i.toLowerCase() === ch.toLowerCase()) {
//         count++
//     }
// }
// console.log(`The occurrence of ${ch} in ${str} = ${count}`)

// c) Find All Occurrence Positions

for(let i in str){
    if (str[i] === ch) {
        console.log(i)
    }
}