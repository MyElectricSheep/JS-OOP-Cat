const randomizer = (max) => Math.floor(Math.random() * max);

class Cat {
  constructor(name) {
    this._name = name;
    this._tiredness = randomizer(100);
    this._hunger = randomizer(100);
    this._loneliness = randomizer(100);
    this._happiness = randomizer(100);
  }

  get tiredness() {
    return this._tiredness;
  }

  get hunger() {
    return this._hunger;
  }

  get loneliness() {
    return this._loneliness;
  }

  get happiness() {
    return this._happiness;
  }

  set tiredness(value) {
    this._tiredness = value;
  }

  set hunger(value) {
    this._hunger = value;
  }

  set loneliness(value) {
    this._loneliness = value;
  }

  set happiness(value) {
    this._happiness = value;
  }

  play() {
    let playBehaviour;
    if (this._tiredness < 33)
      playBehaviour = `${this._name} gets crazy running around the ball you move around with a thread`;
    if (this._tiredness >= 33 && this._tiredness < 66)
      playBehaviour = `You watch ${this._name} running around its tail until it gets exhausted`;
    if (this._tiredness >= 66)
      playBehaviour = `${this._name} looks at you with a blank stare from the couch, but does not move`;
    this._hunger += randomizer(15);
    this._tiredness += randomizer(10);
    return playBehaviour;
  }

  feed() {
    let feedBehaviour;
    if (this._hunger < 33)
      feedBehaviour = `You clap your hands, you make noise with the can of food, but ${this._name} is nowhere to be seen`;
    if (this._hunger >= 33 && this._hunger < 66)
      feedBehaviour = `${this._name} starts by snobbing you, then where you're not looking, sneaks back in and eats everything you left for it`;
    if (this._hunger >= 66)
      feedBehaviour = `${this._name} literally grabs the bowl of food from your hands, and eats everything inside in 5 seconds`;
    this._hunger -= randomizer(15);
    this._happiness += randomizer(5);
    return feedBehaviour;
  }

  pet() {
    let petBehaviour;
    if (this._happiness < 33)
      petBehaviour = `${this._name} growls steadily and bites you as soon as you approach your unsuspecting hands`;
    if (this._happiness >= 33 && this._happiness < 66)
      petBehaviour = `${this._name} lets itself be petted, then suddenly scratches you`;
    if (this._happiness >= 66)
      petBehaviour = `${this._name} purrs into your arms, happy`;
    this._happiness += randomizer(15);
    this._hunger += randomizer(5);
    return petBehaviour;
  }

  holdOntoArms() {
    return {
      tiredness: this._tiredness,
      hunger: this._hunger,
      loneliness: this._loneliness,
      happiness: this._happiness
    };
  }
}

const rambo = new Cat("Rambo");

console.log(rambo.holdOntoArms());
console.log(rambo.play());
console.log(rambo.feed());
console.log(rambo.pet());
console.log(rambo.holdOntoArms());
rambo.happiness = 100;
console.log(rambo.holdOntoArms());
