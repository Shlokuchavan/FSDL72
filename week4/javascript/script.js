let timer;
let countdown;
let timeLeft = 30;
let score = 0;
let gameStarted = false;
let buttonPositions = [];

function startGame(startTime) {
    // Set the timer to the selected starting time (30 or 60 seconds)
    timeLeft = startTime;
    score = 0;
    
    // Display the score and timer
    document.getElementById('score').innerText = score;
    document.getElementById('timer').innerText = timeLeft;

    // Hide the start buttons and show the game area
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('startBtn60').style.display = 'none';
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

        // Get game area dimensions
        const gameArea = document.getElementById('gameArea');
        const maxX = gameArea.clientWidth - 100; // Button width (set to 100px max)
        const maxY = gameArea.clientHeight - 100; // Button height (set to 50px max)

        // Ensure the button doesn't overlap previous buttons
        let randomX, randomY;
        do {
            randomX = Math.floor(Math.random() * maxX);
            randomY = Math.floor(Math.random() * maxY);
        } while (isOverlapping(randomX, randomY));

        // Add the new position to the buttonPositions array
        buttonPositions.push({ x: randomX, y: randomY });

        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';

        // Add the button to the game area
        gameArea.appendChild(button);

        // Add click event listener to the button
        button.onclick = () => {
            // Increase score when button is clicked
            score++;
            document.getElementById('score').innerText = score;

            // Remove the clicked button
            gameArea.removeChild(button);

            // Spawn a new button after clicking the current one
            spawnButton();
        };
    }
}

function isOverlapping(x, y) {
    // Check if the new button position overlaps with any previous positions
    for (let i = 0; i < buttonPositions.length; i++) {
        const pos = buttonPositions[i];
        const dist = Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));
        if (dist < 100) { // If the distance is too close, treat it as overlapping
            return true;
        }
    }
    return false;
}

function gameOver() {
    alert('Game Over! Your score: ' + score);
    resetGame();
}

function resetGame() {
    // Reset the game state
    timeLeft = 30;
    score = 0;
    buttonPositions = []; // Clear button positions
    document.getElementById('timer').innerText = timeLeft;
    document.getElementById('score').innerText = score;
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('startBtn60').style.display = 'block';
    gameStarted = false;
    clearInterval(countdown);
}
