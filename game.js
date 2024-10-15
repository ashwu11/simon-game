const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let started = false;
let level = 0;

$(document).keypress(function () {
    if (!started) {
        startGame();
    }
})

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    userPattern = [];

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function () {
    if (!started) {
        startGame();
    } else {
        userPattern.push(this.id);
        animatePress(this.id);
        playSound(this.id);
        checkAnswer();
    }
});

function playSound(colour, volume = 1) {
    var audio = new Audio("./sounds/" + colour + ".mp3");
    audio.volume = volume;
    audio.play();
}

function animatePress(currentColour) {
    const currentButton = $("#" + currentColour);
    currentButton.addClass("pressed");
    setTimeout(() => {
        currentButton.removeClass("pressed");
    }, 100)
}

function startGame() {
    $("#level-title").text("Level 0");
    nextSequence();
    started = true;
}

function reset() {
    $("#level-title").text("Game Over!\nPress any key to restart :]");
    gamePattern = [];
    userPattern = [];
    started = false;
    level = 0;
}

function checkAnswer() {
    const index = userPattern.length - 1;
    if (gamePattern[index] == userPattern[index]) {
        console.log("yayyy :]");

        // check if user finished their sequence
        if (gamePattern.length == userPattern.length) {
            setTimeout(nextSequence, 1000);
        }

    } else {
        console.log("nooo :(");
        playSound("wrong", volume = 0.1);
        reset();

        // animation
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
    }
}