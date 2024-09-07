const enterBtn = document.getElementById('Enter')
const homePage = document.getElementById('homePage')
const gamePage = document.getElementById('gamePage')
const showBtn = document.getElementById("showBtn")
const lifeDisplay = document.getElementById('gameLives')
const playerChoice = document.getElementById('playerChoice')
const answerBtn = document.getElementById('numberSelection')
const displayGameLogic = document.getElementById('answerDisplay')
let start = false;

let lives = 3;

let maxNum = 50
let minNum = 1
let mysterioNum = Math.floor(Math.random(maxNum * minNum) * maxNum);

lifeDisplay.textContent = `Lives: ${lives}`
console.log(mysterioNum);


gamePage.style.display = 'none'

enterBtn.onclick = function(){
    start = true;
 if(start){
    homePage.style.display = 'none'
    gamePage.style.display = 'block'
 } else {
    showBtn.textContent = 'Start whenever ready!'
 }
}

answerBtn.onclick = function(){
    console.log(playerChoice.value)
    if(playerChoice.value < minNum || playerChoice.value > maxNum){
        displayGameLogic.textContent = 'The Doors of the Building are between 1 and 50. Your choice exceeds those plausible choices. Retry!'
    } else if(playerChoice.value < mysterioNum){
        displayGameLogic.textContent = 'Ha! Close, but you are below the correct door!'
        lives--;
        lifeDisplay.textContent = `Total lives remaining: ${lives}`;
       
    } else if(playerChoice.value > mysterioNum){
        displayGameLogic.textContent = "Ha! Close, but you are above the correct door's number!"
        lives--;
        lifeDisplay.textContent = `Total lives remaining: ${lives}`;
    } else {
        (playerChoice.value == mysterioNum)
        displayGameLogic.textContent = 'Congrats! You managed to bypass my illusions! You win!'
        answerBtn.disabled = true;
    }
    if(lives == 0){
        displayGameLogic.textContent = `You lose! The correct door was ${mysterioNum}.`
        answerBtn.disabled = true;
    }

}



