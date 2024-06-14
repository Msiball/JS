var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColor = buttonColors[randomNumber];
  $("." + randomChosenColor)
    .fadeTo(50, 0)
    .fadeTo(50, 1);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

function playSound(name) {
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}
