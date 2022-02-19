
let firstCard = 4
let secondCard = 12
let sum = firstCard + secondCard 
let message = ""

let hasBlackJack = false
let itsAlive = true
let messageEl = document.getElementById("message-el")
function startGame() {

   if (sum <= 20){
      message = "Do you want do draw a new card?"
   } 
   else if (sum === 21){
      message = "Hohoooo, you've got BlackJack"
      hasBlackJack = true
   }
   else {
      message = "Sorry, you losed!"
      itsAlive = false
   }
   
   messageEl.textContent = message
   
}

