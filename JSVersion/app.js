// Cache all html elements we need
let numberGames = document.getElementById("match"),
    winGames = document.getElementById("wins"),
    loseGames = document.getElementById("loses"),
    player  = document.getElementById("player"),
    comp = document.getElementById("comp"),
    result = document.getElementById("result");

let resetBtn = document.getElementById("resetGame"),
    rockBtn = document.getElementById("rockBtn"),
    paperBtn = document.getElementById("paperBtn"),
    scissorsBtn = document.getElementById("scissorsBtn");

// Initialize stats
let matches = 0,
    wins = 0,
    loses = 0;
let playerWeapon;

// Selection Functions
let playerSelection = choice => playerWeapon = choice;

let computerSelection = () => {
    let computerWeapon;
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            computerWeapon = "rock";
            comp.innerHTML = '<i class="fas fa-2x fa-hand-rock"></i>';
            break;
        case 2:
            computerWeapon = "paper";
            comp.innerHTML = '<i class="fas fa-2x fa-hand-paper"></i>';
            break;
        case 3:
            computerWeapon = "scissors";
            comp.innerHTML = '<i class="fas fa-2x fa-hand-scissors"></i>';
            break;
    }
    return computerWeapon;
};

let gameMatch = () => {
    matches++;
    numberGames.innerHTML = matches;
    let player = playerWeapon;
    let comp = computerSelection();
    if (player === comp) {
        result.innerHTML = "It's a draw, no one get points!";
    }
    else if (
        (player === "rock" && comp === "paper") ||
        (player === "paper" && comp === "scissors") ||
        (player === "scissors" && comp === "rock") ) {
            result.innerHTML = "You lose!";
            loses++;
            loseGames.innerHTML = loses;
    } else if (
        (player === "rock" && comp === "scissors") ||
        (player === "paper" && comp === "rock") ||
        (player === "scissors" && comp === "paper") ) {
            result.innerHTML = "You win!";
            wins++;
            winGames.innerHTML = wins;
    }
};

// Event Listeners
rockBtn.addEventListener("click", ()=> {
    playerSelection("rock");
    player.innerHTML = '<i class="fas fa-2x fa-hand-rock"></i>';
    gameMatch();
});

paperBtn.addEventListener("click", () => {
    playerSelection("paper");
    player.innerHTML = '<i class="fas fa-2x fa-hand-paper"></i>';
});

scissorsBtn.addEventListener("click", () => {
    playerSelection("scissors");
    player.innerHTML = '<i class="fas fa-2x fa-hand-scissors"></i>';
    gameMatch();
});
