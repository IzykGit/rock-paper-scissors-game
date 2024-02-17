
const rock = {
    value: 1,
    id: document.getElementById('rock')
}

const paper = {
    value: 2,
    id: document.getElementById('paper')
}

const scissors = {
    value: 3,
    id: document.getElementById('scissors')
}

const lizard = {
    value: 4,
}

const outcomes = {
    winning: {
        paper: "paperrock",
        scissors: "scissorspaper",
        rock: "rockscissors"
    },
    losing: {
        paper: "paperscissors",
        rock: "rockpaper",
        scissors: "scissorsrock"
    },
    tie: {
        paper: "paperpaper",
        scissors: "scissorsscissors",
        rock: "rockrock"
    }
}



let playBtn = document.getElementById('play-again')
let gameResult = document.getElementById('game-result')

let computerIcon = document.getElementById('computer-icon')
let userIcon = document.getElementById('user-icon')

let score = document.getElementById('score')






// Initial Classes 

computerIcon.classList.add("unselected");
userIcon.classList.add("unselected");


playBtn.classList.add("result-btn-initial");
gameResult.classList.add("result-text-inital");

let computerState = 0;
let playerState = 0;
let isActive = false;
let winState = 0;
let gameScore = 0;



// Game



function computerSelect() {
    computerState = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    switch(computerState) {
        case computerState = 1:
            computerIcon.classList.add("rock-selected")
            computerState = "rock"
            break;
        case computerState = 2:
            computerIcon.classList.add("paper-selected")
            computerState = "paper"
            break;
        case computerState = 3:
            computerIcon.classList.add("scissors-selected")
            computerState = "scissors"
            break;
    }

    startGame()
}



function playerSelect(value) {

    
    switch(value) {

        case value = scissors.value:
            userIcon.classList.add('scissors-selected')
            playerState = "scissors";
            break;
        case value = paper.value:
            userIcon.classList.add('paper-selected')
            playerState = "paper";
            break;
        case value = rock.value:
            userIcon.classList.add('rock-selected')
            playerState = "rock";
            break;
    }
    
    computerSelect()
    return isActive = true
}



function startGame() {
    const gameValues = `${playerState}${computerState}`
    console.log(gameValues)
    if(gameValues.includes(outcomes.winning.paper) || gameValues.includes(outcomes.winning.rock) || gameValues.includes(outcomes.winning.scissors)) {
        console.log("Winner")
        winState = 1
        gameEnd()
        return
    }
    else if (gameValues.includes(outcomes.losing.paper) || gameValues.includes(outcomes.losing.rock) || gameValues.includes(outcomes.losing.scissors)) {
        console.log("Loser")
        winState = -1
        gameEnd()
        console.log(winState)
        return
    }
    else if (gameValues.includes(outcomes.tie.paper) || gameValues.includes(outcomes.tie.rock) || gameValues.includes(outcomes.tie.scissors)) {
        console.log("Tie")
        winState = 0
        gameEnd()
        return
    }
    
    
    console.log("loser")
}


function gameEnd() {
    
    switch(winState) {
        case winState = 1:
            console.log("yes")
            gameResult.innerText = "Winner"
            gameResult.classList.add('active-result-text')
            playBtn.innerText = "Play Again"
            playBtn.classList.add('active-play-btn')


            gameScore = gameScore + 10;
            console.log(gameScore)
            score.innerText = gameScore
            break;



        case winState = -1:
            console.log("No")
            gameResult.innerText = "Loser"
            gameResult.classList.add('active-result-text')
            playBtn.innerText = "Play Again"
            playBtn.classList.add('active-play-btn')

            

            gameScore = gameScore - 10;
            console.log(gameScore)
            score.innerText = gameScore
            break;



        case winState = 0:
            console.log("Eh")
            gameResult.innerText = "Tie"
            gameResult.classList.add('active-result-text')
            playBtn.innerText = "Play Again"
            playBtn.classList.add('active-play-btn')
            break;
    }
}



function resetGame() {
    computerIcon.classList.remove("rock-selected")
    computerIcon.classList.remove("paper-selected")
    computerIcon.classList.remove("scissors-selected")
    userIcon.classList.remove('scissors-selected')
    userIcon.classList.remove('paper-selected')
    userIcon.classList.remove('rock-selected')
    gameResult.classList.remove('active-result-text')
    playBtn.classList.remove('active-play-btn')
    computerIcon.classList.add("unselected");
    userIcon.classList.add("unselected");
    playBtn.classList.add("result-btn-initial")
    gameResult.classList.add("result-text-inital")

    computerState = 0
    playerState = 0
    isActive = false
    winState = 0

    console.log('reset')
}



playBtn.addEventListener("click", () => resetGame())

scissors.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(scissors.value))

paper.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(paper.value))

rock.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(rock.value));