
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

const options = {
    rock,
    paper,
    scissors
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

let computerState = 0
let playerState = 0
let isActive = false





// Game


function computerSelect() {
    computerState = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    console.log(computerState)
    switch(computerState) {
        case computerState = 1:
            computerIcon.classList.add("rock-selected")
            computerState = rock.value
            break;
        case computerState = 2:
            computerIcon.classList.add("paper-selected")
            computerState = paper.value
            break;
        case computerState = 3:
            computerIcon.classList.add("scissors-selected")
            computerState = scissors.value
            break;
    }

    startGame()
}



function playerSelect(value) {

    
    switch(value) {

        case value = scissors:
            userIcon.classList.add('scissors-selected')
            playerState = scissors.value;
            break;
        case value = paper:
            userIcon.classList.add('paper-selected')
            playerState = paper.value;
            break;
        case value = rock:
            playerState = rock.value;
            userIcon.classList.add('rock-selected')
            break;
    }
    computerSelect()
    return isActive = true
}


function startGame() {

    if(playerState = scissors.value && computerState === paper.value) {
        console.log("Winner")
    }
    
    else if(playerState = scissors.value && computerState === rock.value) {
        console.log("Loser")
    }

    else if(playerState = paper.value && computerState === rock.value) {
        console.log("Winner")
    }

    else if(playerState = paper.value && computerState === scissors.value) {
        console.log("Winner")
    }

    else if (playerState = rock.value && computerState === scissors.value) {
        console.log("Winner")
    }

    else if(playerState = computerState) {
        console.log("Tie")
    }


}










scissors.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(scissors))

paper.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(paper))

rock.id.addEventListener("click", () => isActive ? console.log("Already selected") : playerSelect(rock));