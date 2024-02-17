
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

let playBtn = document.getElementById('play-again')
let resultTxt = document.getElementById('game-result')

let computerIcon = document.getElementById('computer-icon')
let userIcon = document.getElementById('user-icon')



// Initial Classes 

computerIcon.classList.add("unselected");
userIcon.classList.add("unselected");


playBtn.classList.add("result-btn-initial")
resultTxt.classList.add("result-text-inital")


let isActive = false

function setState(value) {

    scissors.id.removeEventListener("click", setState)
    paper.id.removeEventListener("click", setState)
    rock.id.removeEventListener("click", setState)

    
    switch(value) {

        case value = scissors:
            userIcon.classList.add('scissors-selected')
            break;
        case value = paper:
            userIcon.classList.add('paper-selected')
            console.log('test')
            break;
        case value = rock:
            userIcon.classList.add('rock-selected')
            break;
    }



    return isActive = true
}







function computerSelect() {
    
}


scissors.id.addEventListener("click", () => isActive ? console.log("Already selected") : setState(scissors))

paper.id.addEventListener("click", () => isActive ? console.log("Already selected") : setState(paper))

rock.id.addEventListener("click", () => isActive ? console.log("Already selected") : setState(rock));