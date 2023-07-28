const abilities = [
  {
    name: "Strike",
    desc: "Damage the enemy",
    cost: 0.2,
    effect(enemy, self) {
      const damageAmount = rnd(4,7)/10 * self.focus;
      enemy.health = Math.max(0, enemy.health - damageAmount);
      self.focus = Math.max(0, self.focus - damageAmount);

      GameManager.showDamageText(enemy.wrapper, damageAmount);
      playSound(attackSound);
      
      self.update();
      enemy.update();
      animateElement(enemy.wrapper)
    }
  },
  {
    name: "Regenerate",
    desc: "Regenerate health",
    cost: 0.2,
    effect(enemy, self) {
      const beforeHeal = self.health;
      self.health = Math.min(1, self.health + self.focus);

      const healedAmount = self.health - beforeHeal;
      self.focus = Math.max(0, self.focus - healedAmount);

      GameManager.showHealText(self.wrapper, healedAmount);
      playSound(healSound);

      self.update();
      animateElement(self.wrapper, "shine");
    }
  },
  {
    name: "Focus",
    desc: "Increase strike damage and heal amount",
    cost: 0.2,  
    effect(enemy, self) {
      self.focus += Math.min(1, rnd(3, 7) / 10)

      playSound(focusSound);

      self.update();
      animateElement(self.wrapper, "shine");
    }
  }
]