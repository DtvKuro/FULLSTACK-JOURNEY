var drumBtn = document.querySelectorAll(".drum").length;

var sounds = {
  w: new Audio('./sounds/tom-1.mp3'),
  a: new Audio('./sounds/tom-2.mp3'),
  s: new Audio('./sounds/tom-3.mp3'),
  d: new Audio('./sounds/tom-4.mp3'),
  j: new Audio('./sounds/snare.mp3'),
  k: new Audio('./sounds/crash.mp3'),
  l: new Audio('./sounds/kick-bass.mp3')
};

function playSound(key){
  if (sounds[key]) {
    sounds[key].currentTime = 0;
    sounds[key].play();
  }
} 

for (var i = 0; i< drumBtn  ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {  
    playSound(this.innerHTML);
    var currentKey = this.innerHTML; 

    pressAnimation(currentKey);
  });
}
  document.addEventListener("keypress", function(event){
    playSound(event.key);
    var currentKey = event.key;

    pressAnimation(currentKey);
  }); 

  function pressAnimation(currentKey){
    var activatedDrum = document.querySelector("." + currentKey);
    activatedDrum.classList.add("pressed");
    setTimeout(function (){activatedDrum.classList.remove("pressed");}, 100);
  }

