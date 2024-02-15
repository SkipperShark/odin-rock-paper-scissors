let choices = ["rock", "paper", "scissors"]
let numPointsToWin = 5;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}


function playRound(playerSelection, computerSelection) {

    console.log("----------");
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    console.log(`playerSelection : ${playerSelection}, computerSelection : ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("tie");
        return
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors") && computerSelection === "paper") {
        console.log("player wins");
        playerScore += 1;
    }

    else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors") && computerSelection === "rock") {
        console.log("computer wins");
        computerScore += 1;
    }
    console.log(`-----------`)

    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
}

let buttonContainer = document.querySelector("#buttonContainer");
buttonContainer.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
        default:
    }
})


function checkForWinner(playerScore, computerScore) {
    if (playerScore >= numPointsToWin) {
        alert("Congratulations, you have won")
        resetGame();
    }
    else if (computerScore >= numPointsToWin) {
        alert("sadlife, the robot has won")
        resetGame();
    }
}


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore(0, 0);
}

function updateScore(playerScore, computerScore) {
    let score = document.querySelector("#score");
    score.textContent = `Player : ${playerScore}, Computer : ${computerScore}`;
}


// function game() {
//     let numRoundsToPlay = 5;
//     let numRoundsPlayed = 0;
//     let playerScore = 0;
//     let computerScore = 0;
//     let numPointsToWin = Math.floor(numRoundsToPlay / 2) + 1;

//     while (numRoundsPlayed <= numRoundsToPlay) {
//         console.log(`\n\n`)
//         console.log(`LOOP START - rounds played : ${numRoundsPlayed}`)
//         console.log(`LOOP START - playerScore : ${playerScore}`)
//         console.log(`LOOP START - computerScore : ${computerScore}`)

//         let playerSelection = prompt("Take your pick, rock paper or scissors?").toLowerCase()

//         if (!choices.includes(playerSelection)) {
//             alert("That's not a valid choice, try again!")
//             continue
//         }

//         let computerChoice = getComputerChoice()

//         console.log(`player choice : ${playerSelection}`)
//         console.log(`computer choice : ${computerChoice}`)
//         let result = playRound(playerSelection, computerChoice)
//         console.log(result)

//         if (result.includes("Win")) {
//             playerScore += 1
//         }

//         else if (result.includes("Lose")) {
//             computerScore += 1
//         }

//         else if (result.includes("Tie")) {
//             continue
//         }

//         numRoundsPlayed += 1

//         if (playerScore >= numPointsToWin) {
//             alert("Congratulations, you have won")
//             break
//         }
//         else if (computerScore >= numPointsToWin) {
//             alert("sadlife, the robot has won")
//             break
//         }
//     }
//     return
// }

// game()
