// 7. Print the following pattern. (build it for nth numbers)
// 1
// 12
// 123
// 1234
// 12345

for(i=1; i <=5; i++){
    let row=''
    for(j=1; j <=i; j++){
        row+=j
    }
    console.log(`${row}`)
}