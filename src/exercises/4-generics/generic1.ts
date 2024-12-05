/*
Exercise: Generic Stack
Implement a generic Stack class with:
- push
- pop
- peek
- isEmpty methods
*/

// Write your solution here

class Stack<T> {
  i: T[] = [];

  push(item: T): void {
      this.i.push(item);
  }

  pop(): T | undefined {
      return this.i.pop();
  }
}