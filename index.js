
const rock = {
    value: 1,
    src: "./images/icon-rock.svg",
    id: document.getElementById('rock')
}

const paper = {
    value: 2,
    src: "./images/icon-paper.svg",
    id: document.getElementById('paper')
}

const scissors = {
    value: 3,
    src: "./images/icon-scissors.svg",
    id: document.getElementById('scissors')
}

const lizard = {
    value: 4,
    src: "./images/icon-lizard.svg",

}

let playBtn = document.getElementById('play-again')
let resultTxt = document.getElementById('game-result')

let computerIcon = document.getElementById('computer-icon')
let userIcon = document.getElementById('user-icon')



// Initial Classes 

computerIcon.classList.add("unselected");
userIcon.classList.add("unselected");


playBtn.classList.add("result-btn-initial")
resultTxt.classList.add("result-text-inital")





// User class


class User {
    constructor(rock, paper, scissors) {
        this.rock = rock,
        this.paper = paper,
        this.scissors = scissors
    }


    select() {
        if(rock) {

        }
    }


    playAgain() {
        computerIcon.classList.add("unselected");
        userIcon.classList.add("unselected");

        playBtn.classList.add("result-btn-initial")
    }
}




function generateResponse() {

}