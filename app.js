let choices = ["rock", "paper", "scissors"]


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        return "Tie!, try again!"
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors") && computerSelection === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors") && computerSelection === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let numRoundsToPlay = 5;
    let numRoundsPlayed = 0;
    let playerScore = 0;
    let computerScore = 0
    let numPointsToWin = Math.floor(numRoundsToPlay / 2) + 1

    //todo, to refactor this into a while loop, a for loop is unclean when we have to repeat the iteration in the event of invalid input / tie

    while (numRoundsPlayed <= numRoundsToPlay) {
        console.log(`\n\n`)
        console.log(`LOOP START - rounds played : ${numRoundsPlayed}`)
        console.log(`LOOP START - playerScore : ${playerScore}`)
        console.log(`LOOP START - computerScore : ${computerScore}`)

        let playerSelection = prompt("Take your pick, rock paper or scissors?").toLowerCase()

        if (!choices.includes(playerSelection)) {
            alert("That's not a valid choice, try again!")
            continue
        }

        let computerChoice = getComputerChoice()

        console.log(`player choice : ${playerSelection}`)
        console.log(`computer choice : ${computerChoice}`)
        let result = playRound(playerSelection, computerChoice)
        console.log(result)

        if (result.includes("Win")) {
            playerScore += 1
        }

        else if (result.includes("Lose")) {
            computerScore += 1
        }

        else if (result.includes("Tie")) {
            continue
        }

        numRoundsPlayed += 1

        if (playerScore >= numPointsToWin) {
            alert("Congratulations, you have won")
            break
        }
        else if (computerScore >= numPointsToWin) {
            alert("sadlife, the robot has won")
            break
        }
    }

    // for (let i = 0; i < numRoundsToPlay; i++) {

    //     // diagnostic`
    //     console.log(`\n\n`)
    //     console.log(`LOOP START - rounds played : ${numRoundsPlayed}`)
    //     console.log(`LOOP START - playerScore : ${playerScore}`)
    //     console.log(`LOOP START - computerScore : ${computerScore}`)

    //     let playerSelection = prompt("Take your pick, rock paper or scissors?").toLowerCase()

    //     if (!choices.includes(playerSelection)) {
    //         alert("That's not a valid choice, try again!")
    //         i -= 1
    //         continue
    //     }

    //     let computerChoice = getComputerChoice()

    //     console.log(`player choice : ${playerSelection}`)
    //     console.log(`computer choice : ${computerChoice}`)
    //     let result = playRound(playerSelection, computerChoice)
    //     console.log(result)

    //     if (result.includes("Win")) {
    //         playerScore += 1
    //     }

    //     else if (result.includes("Lose")) {
    //         computerScore += 1
    //     }

    //     else if (result.includes("Tie")) {
    //         i -= 1
    //         continue
    //     }


    //     numRoundsPlayed += 1

    //     if (playerScore >= numPointsToWin) {
    //         alert("Congratulations, you have won")
    //         break
    //     }
    //     else if (computerScore >= numPointsToWin) {
    //         alert("sadlife, the robot has won")
    //         break
    //     }
    // }
    return
}

game()
