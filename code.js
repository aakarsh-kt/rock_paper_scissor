function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
const con2t = document.querySelector('body');
const div = document.createElement('div');
// div.classList.add("container");
div.setAttribute("style", "background:blue;display:flex;height:90vh;");
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
button1.textContent = "Rock";
button2.textContent = "Paper";
button3.textContent = "Scissor";
button1.setAttribute("style", "font-size:40px;background:grey;flex:1;");
button2.setAttribute("style", "font-size:40px;background:green;flex:1;");
button3.setAttribute("style", "font-size:40px;background:silver;flex:1;");
const divsub = document.createElement('div');
const divsub1 = document.createElement('div');
const divsub2 = document.createElement('div');
divsub1.textContent = "Player - ";
divsub1.classList.add("divsub1");
divsub2.textContent = "Bot - ";
divsub2.classList.add("divsub2");
const p1 = document.createElement('p');
p1.classList.add("playerScore");
const p2 = document.createElement('p');
p2.classList.add("botScore");

con2t.appendChild(div);
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
con2t.appendChild(divsub);
divsub.appendChild(divsub1);
divsub.appendChild(divsub2);
divsub1.appendChild(p1);
divsub2.appendChild(p2);
divsub.setAttribute("style", "display:flex;justify-content:space-around;")
let player;
let round = 0;
let res;


let compPoints = 0, playerPoints = 0;
function playRound(player, computerChoice) {
    round++;
    if ((player === "Rock" || player === "rock") && (computerChoice === "Paper")) {

        return 1;
    }
    else if ((player === "Paper" || player === "paper") && (computerChoice === "Rock")) {

        return 0;
    }
    else if ((player === "rock" || player === "Rock") && (computerChoice === "Scissor")) {

        return 0;
    }
    else if ((player === "rock" || player === "Rock") && (computerChoice === "Rock"))
        return 2;
    else if ((player === "paper" || player === "Paper") && (computerChoice === "Scissor")) {

        return 1;
    }
    else if ((player === "paper" || player === "Paper") && (computerChoice === "Paper"))
        return 2;
    else if ((player === "Scissor" || player === "scissor") && (computerChoice === "Scissor"))
        return 2;
    else if ((player === "Scissor" || player === "scissor") && (computerChoice === "Paper")) {

        return 0;
    }
    else if ((player === "Scissor" || player === "scissor") && (computerChoice === "Rock")) {

        return 1;
    }
}
function check(playerPoints, compPoints) {
    if (playerPoints === 5) {
        playerPoints = 0;
        compPoints = 0;
        alert("You Win");

    }
    else if (compPoints === 5) {
        playerPoints = 0;
        compPoints = 0;
        alert("YOu lost");
    }
}
// for (let i = 0; i < 5; i++) {
const para1 = document.querySelector(".playerScore");
const para2 = document.querySelector(".botScore");

button1.addEventListener('click', function () {
    check(playerPoints, compPoints);
    player = "Rock";
    const computerChoice = getComputerChoice();
    res = playRound(player, computerChoice);
    if (res === 1)
        compPoints++;
    else if (res === 0)
        playerPoints++;
    para1.innerHTML = playerPoints;
    para2.innerHTML = compPoints;
    // para1.innerHTML = playerPoints;
    console.log(compPoints);
    console.log(playerPoints);

});
button2.addEventListener('click', function () {
    check(playerPoints, compPoints);
    player = "Paper";
    const computerChoice = getComputerChoice();
    res = playRound(player, computerChoice);
    if (res === 1)
        compPoints++;
    else if (res === 0)
        playerPoints++;
    para1.innerHTML = playerPoints;
    para2.innerHTML = compPoints;
    console.log(compPoints);
    console.log(playerPoints);
}
);
button3.addEventListener('click', function () {
    check(playerPoints, compPoints);
    player = "Scissor";
    const computerChoice = getComputerChoice();
    res = playRound(player, computerChoice);
    if (res === 1)
        compPoints++;
    else if (res === 0)
        playerPoints++;
    para1.innerHTML = playerPoints;
    para2.innerHTML = compPoints;
    console.log(compPoints);
    console.log(playerPoints);
});

if (round >= 5) {
    if (playerPoints > compPoints)
        alert("You won");
    else if (compPoints > playerPoints) {
        alert("You fucking lost");
    }
    else
        alert("Draw");
}

console.log(compPoints);
console.log(playerPoints);
// // }
// function naming(name) {
//     player = name;
//     const computerChoice = getComputerChoice();
//     alert(playRound(player, computerChoice));
//     player = "";
// }