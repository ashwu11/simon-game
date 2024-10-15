const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
let userPattern = [];
let started = false;
let level = 0;

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level 0");
        nextSequence();
        started = true;
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

$(".btn").click(function() {
    userPattern.push(this.id);
    animatePress(this.id);
    playSound(this.id);
    checkAnswer();
});

function playSound(colour) {
    var audio = new Audio("./sounds/" + colour + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    const currentButton = $("#" + currentColour);
    currentButton.addClass("pressed");
    setTimeout(() => {
        currentButton.removeClass("pressed");
    }, 100)
}

function checkAnswer() {
    const index = userPattern.length - 1;
    if (gamePattern[index] == userPattern[index]) {
        console.log("success");
    } else {
        console.log("fail");
    }

    if (gamePattern.length == userPattern.length) {
        setTimeout(nextSequence, 1000);
    }
}