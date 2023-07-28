


// Define the paths as an object
const paths = {
  crossroad: {
    story: "Select you're gameplay type",
    choices: [
      { text: "Arcade Mode", nextPath: "aracadeMode" }, // Sends to Char Select 
      { text: "Adventure Mode", nextPath: "adventureMode" }
    ]
  },

  adventureMode: {
    story: "You find yourself standing with the cast of Open Season. Mr Weenie, Boog and All.",
    choices: [
      { text: "Talk to Boog", nextPath: "boog" },
      { text: "Talk to Mr. Weenie", nextPath: "mrWeenie" }
    ]
  },
  boog: {
    story: "Boog doesn't seem very interested, but Mr. Weenie is wagging his tail! Go talk to him. ",
    choices: [{ text: "Ask boog more", nextPath: "moreBoog" },{ text: "Start Fight", nextPath: "mrWeenie" }]
  },
  mrWeenie: {
    story: "What do you want to say to him?",
    choices: [{ text: "Do you like getting pet?", nextPath: "moreMrWeenie" },{ text: "How's the weather down their?", nextPath: "madMrWeenie" }]
  },
  moreMrWeenie: {
    story: "Hmm, no response. That has to mean yes right?",
    choices: [{ text: "Explore the Open Season world", nextPath: "explore" },{ text: "Pet Mr. Weenie", nextPath: "mrWeeniePet" }]
  },
  madMrWeenie: {
    story: "Mr. Weenie's face says it all: Not Happy",
    choices: [{ text: "Fight Mr. Weenie", nextPath: "startFight" },{ text: "Pet Mr. Weenie", nextPath: "mrWeeniePet" }]
  },
  moreBoog: {
    story: "Boog is getting really annoyed, and look at Mr. Weenie maybe he just wanted to be pet",
    choices: [{ text: "Explore the Open Season world", nextPath: "explore" },{ text: "Pet Mr. Weenie", nextPath: "mrWeeniePet" }]
  },
  explore: {
    story: "Wow it's beautiful, and oh look! Mr. Weenie is coming along, you should really pet him!",
    choices: [{ text: "Keep Exploring", nextPath: "exploreMore" },{ text: "Pet Mr. Weenie", nextPath: "mrWeeniePet" }]
  },
  exploreMore: {
    story: "Mr Weenie suddenely jumps in front of you.",
    choices: [{ text: "Fight Mr. Weenie", nextPath: "startFight" },{ text: "Pet Mr. Weenie", nextPath: "mrWeeniePet" }]
  },
  mrWeeniePet: {
    story: "Mr. Weenie leeps at you, biting off you're face. It seems you can't do anything elsee",
    choices: [{ text: "Punch Mr. Weenie", nextPath: "startFight" },{ text: "Kick Mr. Weenie", nextPath: "startFight" }]
  },
  startFight: { // Goes to game
    story: "",
    choices: []
  },
  aracadeMode: {// Goes to charSelect
    story: "",
    choices: []
  }
};


// Function to add buttons dynamically based on choices
function addButtons(choices) {

    const choicesContainer = document.getElementById("choices");

    choicesContainer.innerHTML = ""; // Clear any existing buttons
    
    choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.classList.add("choice-button")
      button.addEventListener("click", () => {
        // Handle the button click event, e.g., go to the next path
        goToNextPath(choice.nextPath);
      });
      choicesContainer.appendChild(button);
    });
  }
  
  // Function to handle the button click and move to the next path
  function goToNextPath(nextPath) {
    check_switch(nextPath)

    const storyElement = document.getElementById("story-text");
    storyElement.textContent = paths[nextPath].story;
  
  
    const nextChoices = paths[nextPath].choices;
    addButtons(nextChoices);
  }
  function check_switch(currentPath) {
    if (currentPath == "aracadeMode") {
        window.location.href = "char_select.html";
    }
    if (currentPath == "startFight") {
        window.location.href = "game.html";
    }
  }

let currentPath = "crossroad";

// Initialize the game with the first path
goToNextPath(currentPath);