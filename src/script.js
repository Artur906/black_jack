
let cards = [9, 10]
let sum = cards[0] + cards[1] 
let message = ""

let hasBlackJack = false
let itsAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

// another way of get some element its using querySelector, this makes the things more flexible, once that you can grab more than elements by id   
// let sumEl = document.querySelector("#sum-el")

function startGame(){
   renderGame()
}
function renderGame() {

   if (sum <= 20){
      message = "Do you want do draw a new card?"
   } 
   else if (sum === 21){
      message = "You've got BlackJack"
      hasBlackJack = true
   }
   else {
      message = "Sorry, you losed!"
      itsAlive = false
   }
   
   messageEl.textContent = message
   cardsEl.textContent = "Cards: " + cards
   sumEl.textContent = "Sum: " + sum
   
}

function newCard() {
   let newCard = 5
   cards.push(newCard)
   sum += newCard
   renderGame()
}
