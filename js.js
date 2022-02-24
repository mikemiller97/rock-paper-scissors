//Variables for keeping track of wins and losses
let wins = 0;
let losses = 0;
let ties = 0;
let victory = false;

//Selects choice in game for the computer
function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play == 0) {
        return "rock"
    }
    else if (play == 1) {
        return "paper"
    }
    else if (play == 2) {
        return "scissors"
    }
}


//Logic for rock paper scissors game
function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase()
    if (player != "rock" && player != "scissors" && player !== "paper") {
        return "Please pick a valid option."
    }
    else if (player == computerSelection) {
        return `Tie! You both picked ${player}.`;
    }
    else if (player == "rock" && computerSelection == "paper") {
        return `You lose! Paper beats rock`;
    }
    else if (player == "rock" && computerSelection == "scissors") {
        return `You win! Rock beat scissors`;
    }
    else if (player == "paper" && computerSelection =="scissors") {
        return `You lose! Scissors beats paper`;
    }
    else if (player == "paper" && computerSelection =="rock") {
        return `You win! Paper beats rock`;
    }
    else if (player == "scissors" && computerSelection =="rock") {
        return `You lose! Rock beats scissors`;
    }
    else if (player == "scissors" && computerSelection =="paper") {
        return `You win! Scissors beats paper!`;
    }
}


//Display for score

const body = document.body;


const div = document.createElement("div");
body.appendChild(div);

const results = document.createElement("div");
body.appendChild(results);

const record = document.createElement("p");
body.appendChild(record);
record.innerText = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;

const winOrLose = document.createElement("p");
body.appendChild(winOrLose);

function checkVictory() {
    if (wins == 5) {
        winOrLose.innerText = "You win! You got to 5 points first"
        victory=true;
    }
    else if (losses == 5) {
        winOrLose.innerText = "You lose! The computer got to 5 points first"
        victory=true;
    }
}

function resultAdd(string) {
    const splitResult = string.split(" ")
    //console.log(splitResult);
    if (splitResult[0] == "Tie!") {
        ties++;
        record.innerText = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;
    }
    switch(splitResult[1]) {
        case "win!":
        wins++;
        record.innerText = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;
        checkVictory();
        break;

        case "lose!":
        losses++;
        record.innerText = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;
        checkVictory();
        break;
    }
}


const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function e() {
    if (victory == true) {
        return;
    }
    div.innerText = playRound("rock", computerPlay())
    resultAdd(div.innerText.toString())
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function e() {
    if (victory == true) {
        return;
    }
    div.innerText = playRound("paper", computerPlay())
    resultAdd(div.innerText.toString())
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function e() {
    if (victory == true) {
        return;
    }
    div.innerText = playRound("scissors", computerPlay())
    resultAdd(div.innerText.toString())
})