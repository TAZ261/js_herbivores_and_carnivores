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
    if (beast instanceof Herbivore && !beast.hidden && beast.health > 0) {
      beast.health -= 50;

      Animal.alive = Animal.alive.filter((a) => a.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
