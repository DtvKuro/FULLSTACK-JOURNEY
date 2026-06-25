var color = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var level = 1;
var gameover;

// Preloaded sounds (no delay)
var sounds = {
  green : new Audio('./sounds/green.mp3'),
  red : new Audio('./sounds/red.mp3'),
  yellow : new Audio('./sounds/yellow.mp3'),
  blue : new Audio('./sounds/blue.mp3'),
  wrong : new Audio('./sounds/wrong.mp3')
}

// Generate random color and add to game pattern
function myGenerate(){
  var randomNum = Math.floor(Math.random() * 4);
  var id = color[randomNum];
  myClick(id);
  playSound(id);
  gamePattern.push(id);
}

// Play a sound
function playSound(color){
  if (sounds[color]){
    sounds[color].currentTime = 0;
    sounds[color].play();
  }
}

// Flash a button (opacity effect)
function myClick(id){
  $("#" + id).css("opacity", 0.4);
  setTimeout(function(){
    $("#" + id).css("opacity", 1);
  }, 100);
}
 
// Double flash all buttons (round complete)
function flashAll(){
  setTimeout(function(){
    $(".btn").css("opacity", 0.4);
    setTimeout(function(){
      $(".btn").css("opacity", 1);
      setTimeout(function(){
        $(".btn").css("opacity", 0.4);
        setTimeout(function(){
          $(".btn").css("opacity", 1);
        }, 150);
      }, 150);
    }, 150);
  }, 500);
}

// Space = start/next round
$(document).on('keydown', function(event){
  if(event.key === " " && gameover){
    gamePattern = [];
    userPattern = [];
    level = 1;
    gameover = false;
    $("h1").css("color", "");
    myGenerate();
    $("h1").html("Level " + level);

  }
  else if(event.key === " "){
    myGenerate();
    $("h1").html("Level " + level);
  }
});

// Player clicks a button
$(".btn").click(function(){
  var id = $(this).attr("id");
  playSound(id);
  myClick(id);
  userPattern.push(id);

  // Wrong click → game over
  if (id !== gamePattern[userPattern.length - 1]){
    playSound("wrong");
    $("h1").html("Game Over! Press Space to Start Again").css("color", "red");
    gameover = true;
  }
  // Right click + round complete → next level
  else if (userPattern.length === gamePattern.length){
    flashAll();
    userPattern = [];
    level++;
    $("h1").css("color", "green");
    setTimeout(function(){
      myGenerate();
      $("h1").html("Level " + level);
      $("h1").css("color", "white");
    }, 1500);  
  }
});

