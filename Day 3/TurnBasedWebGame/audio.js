const gameMusic = new Audio("assets/Music.mp3");
const attackSound = new Audio("assets/Attack.mp3");
const healSound = new Audio("assets/Heal.mp3");
const focusSound = new Audio("assets/Focus.mp3");

gameMusic.loop = true;
gameMusic.volume = 0.5;
setTimeout(() => gameMusic.play(), 1000);  

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}