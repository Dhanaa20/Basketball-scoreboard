
let score = 0
let scoreBoard1= document.querySelector(".home")

function add1(){
    score += 1
    scoreBoard1.textContent = score
}
function add2(){
    score += 2
    scoreBoard1.textContent = score
}
function add3(){
    score += 3
    scoreBoard1.textContent = score
}


let scoreBoard2 = document.querySelector(".guest")
function guestAddOnePoints(){
    score += 1
    scoreBoard2.textContent = score
}
function guestAddTwoPoints(){
    score += 2
    scoreBoard2.textContent = score
}
function guestAddThreePoints(){
    score += 3
    scoreBoard2.textContent = score
}