// Q.1- Give choice to the user to select theme color and set the selected theme color and console it.

let color = 'pink'
let theme = prompt("Select theme (pink , yellow , black)")

if (theme=='pink') {
    color = 'pink'
}
else if (theme == 'yellow') {
    color = 'yellow'
}
else if(theme == 'black'){
    color = 'black'
}
if (theme!== 'pink' && theme!=='yellow' && theme!== 'black') {
    console.log("Please select proper theme")
}else{
    console.log(`Your theme  is ${theme} and color is ${color}`);
    
}
