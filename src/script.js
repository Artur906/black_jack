let cards = []
let sum = 0 
let message = ""


let player = {
   userName: "Jhon",
   chips: 0
}
let hasBlackJack = false
let itsAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")


// another way of get some element its using querySelector, this makes the things more flexible, once that you can grab more than elements by id   
// let sumEl = document.querySelector("#sum-el")

function getRandomCard() {
   
   let randomNumber =  Math.floor(Math.random() * 13) + 1 
   
   if (randomNumber > 10){
      return 10
   } else if (randomNumber === 1) {
      return 11
   } else {
      return randomNumber
   }
}

function startGame(){
   cards = []
   itsAlive = true
   hasBlackJack = false
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   sum = firstCard + secondCard
   cards.push(firstCard, secondCard)
   
   renderGame()
}
function renderGame() {
   
   if (sum <= 20){
      message = "Do you want do draw a new card?"
   } 
   else if (sum === 21){
      message = "You've got BlackJack"
      hasBlackJack = true
      player.chips += 50
   }
   else {
      message = "Sorry, you losed!"
      itsAlive = false
      player.chips -= 25
   }
   
   messageEl.textContent = message
   cardsEl.textContent = "Cards: "
   for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
   }
   sumEl.textContent = "Sum: " + sum
   playerEl.textContent = player.userName + ": $" + player.chips
   
}

function newCard() {
   if (itsAlive && !hasBlackJack) {
      let newCard = getRandomCard()
      cards.push(newCard)
      sum += newCard
      renderGame()   
   }
}
