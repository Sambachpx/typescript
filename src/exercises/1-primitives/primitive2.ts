/*
Exercise: Email Validator
Create a function that checks if a string is a valid email.
Rules: 
- Must contain @
- Must contain at least 3 chars before @
- Must contain at least 2 chars after the last dot
Return boolean
*/

// Write your solution here

function ValidEmail(email: string) {
  if (!email.includes("@")) {
    return false;
  }

  //TODO: voir pour verifier avant/après @

  const coupe = email.split("@");
  console.log(coupe);

  if (coupe[0].length < 3) {
    return false;
  }

  if (!coupe[1].includes(".")) {
    return false;
  }

  return true;
}

ValidEmail("to@test.com");

console.log(ValidEmail("testsss@email.com"));
console.log(ValidEmail("ab@email.com"));
console.log(ValidEmail("test@email"));
console.log(ValidEmail("test@email.c"));
