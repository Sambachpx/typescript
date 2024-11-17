/*
Exercise: Tree Data Structure
Implement a generic Tree class that:
1. Can store any type of data
2. Supports insertion, deletion, search
3. Includes traversal methods
4. Maintains parent-child relationships
*/

// Write your solution here
class personne<T> {
  nom: T;
  papa?: personne<T>;
  bebes: personne<T>[];

  constructor(nom: T) {
    this.nom = nom;
    this.bebes = [];
  }

  ajoutBebe(bebe: personne<T>) {
    this.bebes.push(bebe);
    bebe.papa = this;
  }
}
let papy = new personne("test");
let papa = new personne("1");
papy.ajoutBebe(papa);
