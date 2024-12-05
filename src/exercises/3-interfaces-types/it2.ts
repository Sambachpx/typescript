/*
Exercise: Vehicle Fleet
Create a type system for:
- Vehicle (interface)
- Car, Truck, Motorcycle (types extending Vehicle)
Include common and specific properties
Implement type guards
*/

// Write your solution here

interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  type: 'car';
  test1: number;
}

interface Truck extends Vehicle {
  type: 'truck';
  test2: number;
}
