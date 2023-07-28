const storyElement = document.getElementById("story-text");
const firstChoice = document.getElementById("firstChoice");
const secondChoice = document.getElementById("secondChoice");


// Define the paths as an object
const paths = {
  crossroad: {
    story: "Welcome! You find yourself standing at a crossroad.",
    choices: [
      { text: "Go left", nextPath: "treasure" },
      { text: "Go right", nextPath: "dragon" }
    ]
  },
  treasure: {
    story: "You encountered a mysterious man! It's time to fight",
    choices: [{ text: "Run Away", nextPath: "crossroad" },{ text: "Start Fight", nextPath: "startFight" }]
  },
  dragon: {
    story: "You chose to go right. You encounter a fierce dragon!",
    choices: [{ text: "Restart", nextPath: "crossroad" }]
  }
};

let currentPath = "crossroad";

function displayStory(path) {
  storyElement.textContent = paths[path].story;

  firstChoice.textContent = paths[path].choices[0].text;
  secondChoice.textContent = paths[path].choices[1].text;
  firstChoice.parentElement.addEventListener("click", () => choosePath(paths[path].choices[0]));
  secondChoice.parentElement.addEventListener("click", () => choosePath(paths[path].choices[1]));
}

function choosePath(choice) {
  if (choice.nextPath) {
    if (choice.nextPath == "startFight") {
        window.location.href = "game.html";
    }
    currentPath = choice.nextPath;
    displayStory(currentPath);

  }
}

// Initialize the game with the first path
displayStory(currentPath);