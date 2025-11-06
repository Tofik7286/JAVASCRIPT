let str = "Hello World"
// for(let i of str){
//     console.log(i)
// }
// for(i=0; i<= str.length-1; i++){
//     console.log(str[i])
// }

for(let i in str){
    console.log(  `${i} = ${str[i]}`)
}