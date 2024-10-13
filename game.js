const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userPattern = [];

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").on("click", function() {
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