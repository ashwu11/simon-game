const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userPattern = [];
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