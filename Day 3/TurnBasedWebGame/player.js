class Player {

  /**
   * @param {HTMLDivElement} dom
   */
  constructor(dom) {
    // Extracting and storing references to the health, speed, and xp bars from the DOM
    const [focusBar, healthBar, xpBar] = dom.querySelectorAll(".bar");
    this.wrapper = dom;
    this.healthBar = healthBar;
    this.focusBar = focusBar;
    this.xpBar = xpBar;
    
    // Setting initial player stats
    this.health = 1;
    this.focus = 0.5;
    this.xp = 0;
    
    this.update();
  }

  update() {
    this.xpBar.value = this.xp;      
    this.healthBar.value = this.health;
    this.focusBar.value = this.focus   
  }

  /**
   * @param {number} idx 
   */
  move(idx) {
    if (GameManager.gameEnded) return;

    const ability = abilities[idx];
    ability.effect(this.enemy, this);
    GameManager.checkDeathStatus();
  }
}
