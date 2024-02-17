
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
    id: document.getElementById('lizard')
}

const spock = {
    value: 5,
    id: document.getElementById('spock')
}

const outcomes = {
    winning: {
        // winning variable is placed first in string

        paperRock: "paperrock",
        paperSpock: "paperspock",

        scissorsPaper: "scissorspaper",
        scissorsLizard: "scissorslizard",


        rockScissors: "rockscissors",
        rockLizard: "rocklizard",


        lizardSpock: "lizardspock",
        lizardPaper: "lizardpaper",


        spockRock: "spockrock",
        spockScissors: "spockscissors",
    },
    losing: {
        // losing variable is placed first in string

        paperScissors: "paperscissors",
        paperLizard: "paperlizard",
        
        rockPaper: "rockpaper",
        rockSpock: "rockspock",

        scissorsRock: "scissorsrock",
        scissorsSpock: "scissorsspock",

        lizardRock: "lizardrock",
        lizardScissors: "lizardscissors",

        spockLizard: "spocklizard",
        spockPaper: "spockpaper",

    },
    tie: {
        paper: "paperpaper",
        scissors: "scissorsscissors",
        rock: "rockrock",
        lizard: "lizardlizard",
        spock: "spock"
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
    computerState = Math.floor(Math.random() * (5 - 1 + 1) + 1)
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
        case value = 4:
            computerIcon.classList.add('lizard-selected')
            computerState = "lizard";
            break;
        case value = 5:
            computerIcon.classList.add('spock-selected')
            computerState = "spock";
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
        case value = lizard.value:
            userIcon.classList.add('lizard-selected')
            playerState = "lizard";
            break;
        case value = spock.value:
            userIcon.classList.add('spock-selected')
            playerState = "spock";
            break;
    }
    
    console.log(playerState)
    computerSelect()
    return isActive = true
}




function startGame() {
    const gameValues = `${playerState}${computerState}`
    console.log(gameValues)
    if(gameValues.includes(outcomes.winning.paperRock) || gameValues.includes(outcomes.winning.rockScissors) || gameValues.includes(outcomes.winning.scissorsPaper) 
    || gameValues.includes(outcomes.winning.lizardSpock) || gameValues.includes(outcomes.winning.lizardPaper) || gameValues.includes(outcomes.winning.spockScissors)
    || gameValues.includes(outcomes.winning.spockRock) || gameValues.includes(outcomes.winning.scissorsLizard) || gameValues.includes(outcomes.winning.rockLizard)
    || gameValues.includes(outcomes.winning.paperSpock)){


        console.log("Winner")
        winState = 1
        gameEnd()
        return


    }
    else if (gameValues.includes(outcomes.losing.paperScissors) || gameValues.includes(outcomes.losing.paperLizard) || gameValues.includes(outcomes.losing.rockPaper)
    || gameValues.includes(outcomes.losing.rockSpock) || gameValues.includes(outcomes.losing.scissorsRock) || gameValues.includes(outcomes.losing.scissorsSpock)
    || gameValues.includes(outcomes.losing.lizardRock) || gameValues.includes(outcomes.losing.lizardScissors) || gameValues.includes(outcomes.losing.spockLizard)
    || gameValues.includes(outcomes.losing.spockPaper)) {
        console.log("Loser")
        winState = -1
        gameEnd()
        console.log(winState)
        return
    }
    else if (gameValues.includes(outcomes.tie.paper) || gameValues.includes(outcomes.tie.rock) || gameValues.includes(outcomes.tie.scissors)
    || gameValues.includes(outcomes.tie.lizard) || gameValues.includes(outcomes.tie.spock)) {
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


            gameScore = gameScore + 1;
            score.innerText = gameScore
            break;



        case winState = -1:
            console.log("No")
            gameResult.innerText = "Loser"
            gameResult.classList.add('active-result-text')
            playBtn.innerText = "Play Again"
            playBtn.classList.add('active-play-btn')



            gameScore = gameScore - 1;
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
    computerIcon.classList.remove("lizard-selected")
    computerIcon.classList.remove("spock-selected")


    userIcon.classList.remove('scissors-selected')
    userIcon.classList.remove('paper-selected')
    userIcon.classList.remove('rock-selected')
    userIcon.classList.remove('lizard-selected')
    userIcon.classList.remove('spock-selected')


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

lizard.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(lizard.value))

spock.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(spock.value))