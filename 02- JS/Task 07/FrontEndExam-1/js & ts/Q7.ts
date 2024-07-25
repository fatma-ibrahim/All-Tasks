// Define the base class Animal
class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setValue(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Zebra extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  printInfo() {
    console.log(
      `I am a Zebra named ${this.name}, ${this.age} years old. \nI am from the African savanna.`
    );
  }
}

class Dolphin extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  printInfo() {
    console.log(
      `I am a Dolphin named ${this.name}, ${this.age} years old. \nI live in the ocean.`
    );
  }
}

const zebra = new Zebra("Stripes", 5);
zebra.printInfo();

const dolphin = new Dolphin("Flipper", 3);
dolphin.printInfo();
