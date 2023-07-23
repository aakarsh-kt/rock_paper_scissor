function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}




function playRound(player, computerChoice) {
    if ((player == "Rock" || player == "rock") && (computerChoice == "Paper"))
        return "You lose! Paper beats rock";
    else if ((player == "Paper" || player == "paper") && (computerChoice == "Rock"))
        return "You win! Paper beats Rock";
    else if ((player == "rock" || player == "Rock") && (computerChoice == "Scissor"))
        return "You win! Rock beats scissor";
    else if ((player == "rock" || player == "Rock") && (computerChoice == "Rock"))
        return "Tie";
    else if ((player == "paper" || player == "Paper") && (computerChoice == "Scissor"))
        return "You lose! Scissor beat paper";
    else if ((player == "paper" || player == "Paper") && (computerChoice == "Paper"))
        return "Tie";
    else if ((player == "Scissor" || player == "scissor") && (computerChoice == "Scissor"))
        return "Tie";
    else if ((player == "Scissor" || player == "scissor") && (computerChoice == "Paper"))
        return "You win! Scissor beats paper";
    else if ((player == "Scissor" || player == "scissor") && (computerChoice == "Rock"))
        return "You Lose! Rock beats Scissor";
}
for (let i = 0; i < 5; i++) {
    const player = prompt("enter your choice");
    const computerChoice = getComputerChoice();
    alert(playRound(player, computerChoice));
}