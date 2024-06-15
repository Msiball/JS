var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;

$(document).on("keydown", function () {
  if (started === false) {
    $("#level-title").text("Level " + level);
    setTimeout(function () {
      nextSequence();
    }, 1000);
    started = true;
  }
});

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  $("." + userChosenColor)
    .fadeTo(50, 0)
    .fadeTo(50, 1);
  animatePress();
  console.log(userClickedPattern, gamePattern);
  setTimeout(function () {
    checkAnswer(level);
  }, 1000);
});
///////////////////////////////////////// click is adding event to array so delete that

function checkAnswer(level) {
  if (userClickedPattern[level] === gamePattern[level]) {
    console.log("Correct!");
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}

function nextSequence() {
  level++;
  var randomNumber = Math.floor(Math.random() * buttonColors.length);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("h1").text("Level " + level);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
  $("." + randomChosenColor)
    .fadeTo(50, 0)
    .fadeTo(50, 1);
}

/////////////////////////////
function animatePress() {
  $("." + userChosenColor).addClass("pressed");
  setTimeout(function () {
    $("." + userChosenColor).removeClass("pressed");
  }, 100);
}
function playSound() {
  var audi = new Audio("sounds/" + $(this).attr("id") + ".mp3");
  audi.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
