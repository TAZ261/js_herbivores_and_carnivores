'use strict';

class Animal {
  // write your code here

  static alive = [];

  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(beast) {
    if (
      beast instanceof Herbivore &&
      beast.hidden === false &&
      beast.health > 0
    ) {
      beast.health -= 50;

      if (beast.health <= 0) {
        beast.health = 0;

        const index = Animal.alive.indexOf(beast);

        if (index !== -1) {
          Animal.alive.splice(index, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
