// Exercise: Create an interface for a vehicule and implement it
// Write your code here

interface vehicule {
  model: string;
  année: number;
  marque: string;

  start(): void;
}

class Car implements vehicule {
  marque: string;
  année: number;
  model: string;

  constructor(marque: string, model: string, année: number) {
    this.model = model;
    this.année = année;
    this.marque = marque;
  }

  start(): void {
    console.log(`${this.marque} ${this.model} démarre`);
  }
}

let moi = new Car("marque", "modèle", 2004);
moi.start();
