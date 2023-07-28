const GameManager = {
  init() {
    const p1 = document.querySelector("#player1");
    const p2 = document.querySelector("#player2");
    
    this.gameEnded = false;

    const winMenu = document.querySelector("#win-menu");
    winMenu.style.display = "none";

    // Get references to all ability buttons
    this.buttons = document.querySelectorAll(".ability-btn");
    
    // Initialize the ability buttons with their respective names, descriptions, and click event handlers
    this.initButtons();
    this.toggleButtons(true);
    
    // Create player instances and bind them to their respective DOM elements
    this.player1 = new Player(p1);
    this.player2 = new AIPlayer(p2);
    
    // Set player/enemy relationships and specify whether each player is the main player (true) or enemy (false)
    this.player1.enemy = this.player2;
    this.player1.isPlayer = true;
    this.player2.enemy = this.player1;
    this.player2.isPlayer = false;
  },

  // Function to initialize the ability buttons with names, descriptions, and click event handlers
  initButtons() {
    this.buttons.forEach((e, i) => {
      const ability = abilities[i];
      e.innerText = ability.name;  // Set button text to the ability's name
      e.title = ability.desc;     // Set button title (tooltip) to the ability's description
      e.addEventListener('click', () => {
        this.playerMove(i);        // Add click event listener to each button to call playerMove with the ability index
      });
    });
  },

  // Function to handle a player's move when they click on an ability button
  playerMove(idx) {
    if (this.gameEnded) return;

    this.player1.move(idx);         // Execute the selected ability for player 1
    this.setCooldown();             // Set a cooldown period to disable the buttons temporarily   
    setTimeout(() => { this.player2.move(); }, 1500);  
  },

  showDamageText(target, damage) {
    const damageText = document.createElement('div');
    damageText.innerText = `-${damage.toFixed(2)}`;
    damageText.classList.add('damage-text');

    // Add the damage text element to the player's portrait
    target.appendChild(damageText);

    // Remove the damage text element after a short delay
    setTimeout(() => {
      target.removeChild(damageText);
    }, 1500);
  },

  showHealText(target, amount) {
    const healText = document.createElement('div');
    healText.innerText = `+${amount.toFixed(2)}`;
    healText.classList.add('heal-text');

    // Add the damage text element to the player's portrait
    target.appendChild(healText);

    // Remove the damage text element after a short delay
    setTimeout(() => {
      target.removeChild(healText);
    }, 750);
  },

  checkDeathStatus() {
    if (this.player1.health <= 0) {
      this.endGame("AI");
    } else if (this.player2.health <= 0) {
      this.endGame("Player");
    }
  },

  endGame(winnerName) {
    this.toggleButtons(false);
    this.gameEnded = true;

    const winMenu = document.querySelector("#win-menu");
    const winnerNameElement = document.querySelector("#winner-name");
    winnerNameElement.innerText = `${winnerName} Wins!`;
    winMenu.style.display = "block";
  },

  // Function to toggle the ability buttons on/off (used during cooldown period)
  toggleButtons(on) {
    if(this.gameEnded) return;
    this.buttons.forEach(e => {
      e.disabled = !on;        
    });
  },

  // Function to set a cooldown period during which ability buttons are disabled
  setCooldown() {
    this.toggleButtons(false);    
    setTimeout(() => this.toggleButtons(true), 2000);  
  }
};
