// Select the elements for the game
let stone = document.querySelector('#stone');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

// Select the elements to display scores and total plays
let humanWin = document.querySelector('.human_win');
let ComputerWin = document.querySelector('.comp_win');
let total_play = document.querySelector('.total_play');

// Initialize scores and total play count
let humanWinScore = 0; // Score for the human player
let computerWinScore = 0; // Score for the computer
let totalPlay = 0; // Total number of plays

// Event listener for the 'stone' button
stone.addEventListener('click', () => {
    // Generate a random choice for the computer
    let computerChoice = Math.floor(Math.random() * 3 + 1);


    if (Number(stone.getAttribute('value')) === computerChoice) {
        // Human wins
        humanWinScore += 1; 
        humanWin.innerHTML = humanWinScore; 
    } else {
        // Computer wins
        computerWinScore += 1; 
        ComputerWin.innerHTML = computerWinScore; 
    }

    // Increment total play count
    totalPlay += 1;
    total_play.innerHTML = totalPlay; 
});

// Event listener for the 'paper' button
paper.addEventListener('click', () => {
    // Generate a random choice for the computer
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (Number(paper.getAttribute('value')) === computerChoice) {
        // Human wins
        humanWinScore += 1; 
        humanWin.innerHTML = humanWinScore; 
    } else {
        // Computer wins
        computerWinScore += 1; 
        ComputerWin.innerHTML = computerWinScore; 
    }

    // Increment total play count
    totalPlay += 1;
    total_play.innerHTML = totalPlay; 
});

// Event listener for the 'scissor' button
scissor.addEventListener('click', () => {
    // Generate a random choice for the computer
    let computerChoice = Math.floor(Math.random() * 3 + 1);

    if (Number(scissor.getAttribute('value')) === computerChoice) {
        // Human wins
        humanWinScore += 1;
        humanWin.innerHTML = humanWinScore;
    } else {
        // Computer wins
        computerWinScore += 1;
        ComputerWin.innerHTML = computerWinScore;
    }

    // Increment total play count
    totalPlay += 1;
    total_play.innerHTML = totalPlay;
});