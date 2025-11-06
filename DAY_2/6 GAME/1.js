alert("You wake up in a dark forest ... ")
let choice = prompt("Do you go 'left' or 'right'?")
let playAgain = true
while (playAgain) {
    if (choice === 'left'){
        alert("You walk into a swamp ...You see something shiny in the mud.")
        mud_choice = prompt("Do you pick it up? (yes or no)").toLowerCase()
        if(mud_choice == "yes"){
            alert("It's a magic stone! You are teleported to safety. You win!")
        }
        else if (mud_choice === 'no')
        {
            alert("You sink slowly into the mud. Game over.")
            playAgain_game = prompt("Do you want to play again? yes or no").toLowerCase()
            if (playAgain_game === 'no') 
            {
                playAgain = false 
                break
            }
            else
            {
                playAgain = true 
            }
        }
    }
    else if (choice === 'right'){
        alert("You find a cave")        
        cave_choice = prompt("Do you enter the cave? (yes or no)").toLowerCase()
        if(cave_choice == "yes"){
            alert("A dragon wakes up and chases you away. You barely escape!")
        }
        else if(cave_choice == 'no'){
            alert("You set up camp outside the cave. A peaceful night under the stars. You win!")
            playAgain = false
            break
        }
    }   
}
