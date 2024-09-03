const enterBtn = document.getElementById('Enter')
const homePage = document.getElementById('homePage')
const gamePage = document.getElementById('gamePage')
const showBtn = document.getElementById("showBtn")

let start = false;

gamePage.style.display = 'none'

enterBtn.onclick = function(){
    console.log(start)
 if(start){
    homePage.style.display = 'none'
    gamePage.style.display = 'block'
 } else {
    showBtn.textContent = 'Start whenever ready!'
 }
}

