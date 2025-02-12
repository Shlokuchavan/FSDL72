let timer;
let countdown;
let timeLeft = 30;
let gameStarted = false;

function startGame() {
    // Hide the start button
    document.getElementById('startBtn').style.display = 'none';
    
    // Show the game area and start the timer
    document.getElementById('gameArea').style.display = 'block';
    gameStarted = true;

    // Start the countdown timer
    countdown = setInterval(updateTimer, 1000);
    
    // Start spawning the button
    spawnButton();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
    } else {
        clearInterval(countdown); // Stop the timer
        gameOver(); // End the game
    }
}

function spawnButton() {
    if (gameStarted && timeLeft > 0) {
        // Create a new "Click Me" button
        const button = document.createElement('button');
        button.innerText = 'Click Me';
        button.id = 'clickMeBtn';

        // Randomly position the button within the game area
        const gameArea = document.getElementById('gameArea');
        const maxX = gameArea.clientWidth - button.clientWidth;
        const maxY = gameArea.clientHeight - button.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';

        // Add the button to the game area
        gameArea.appendChild(button);

        // Add click event listener to the button
        button.onclick = () => {
            // If the button is clicked, spawn a new button
            gameArea.removeChild(button);
            spawnButton();
        };

        // Spawn a new button every 1-3 seconds
        setTimeout(spawnButton, Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000);
    }
}

function gameOver() {
    alert('Game Over! Time is up.');
    resetGame();
}

function resetGame() {
    // Reset the game state
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('startBtn').style.display = 'block';
    gameStarted = false;
    clearInterval(countdown);
}
