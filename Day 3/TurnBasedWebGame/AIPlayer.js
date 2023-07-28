class AIPlayer extends Player {
  constructor(dom) {
    super(dom);
  }

  // Override move method to implement the AI's decision-making logic
  move() {
    const strikeIdx = 0;
    const healIdx = 1;
    const focusIdx = 2;

    //Scenario 1: If the enemy is full and the AI is full, gain focus
    if (this.enemy.health >= 1 && this.health >= 1 && this.focus < 1) {
      super.move(focusIdx);
      return;
    }

    // Scenario 2: If the enemy is low and AI has enough focus, strike to finish the enemy
    if (this.enemy.health - 0.5 * this.focus <= 0) {
      super.move(strikeIdx);
      return;
    }

    // Scenario 3: If AI is critically low on health and has enough focus, heal
    if (this.health <= 0.4 && this.focus > 0) {
      super.move(healIdx);
      return;
    }

    // Scenario 4: If AI has low focus, prioritize gaining focus
    if (this.focus <= 0.6) {
      super.move(focusIdx);
      return;
    }

    // Scenario 5: If AI has moderate health, prioritize gaining focus
    if (this.health >= 0.6 && this.focus < 0.8) {
      super.move(focusIdx);
      return;
    }

    // Scenario 6: If AI has good focus and moderate health, use strike or heal randomly
    if (this.health >= 0.5 && this.focus >= 0.8) {
      const random = rnd(2);
      if (random === 0) {
        super.move(strikeIdx);
      } else {
        if(this.health <= 0.8) {
          super.move(healIdx);
        } else {
          super.move(strikeIdx);
        }
      }
      return;
    }

    // Scenario 7: If none of the above conditions are met, use random decision-making
    this.randomMove();
  }

  randomMove() {

    const strikeIdx = 0;
    const healIdx = 1;
    const focusIdx = 2;

    const random = rnd(3);
    if (random === 0) {
      super.move(strikeIdx);
    } else if (random === 1) {
      if(this.health < 1) {
        super.move(healIdx);
      } else {
        super.move(strikeIdx);
      }

    } else {
      if(this.focus < 1) {
        super.move(focusIdx);
      } else {
        super.move(strikeIdx);
      }
    }
  }
}
