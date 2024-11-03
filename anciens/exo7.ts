// Exercise: Create a function that accepts a union type parameter
// Write your code here

function unionType(samba: string | number | boolean): void {
  console.log(samba);
}

unionType("slt");
unionType(42);
unionType(true);
