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

  /* if (.length < 3) {
    return false;
  }

  /* if (!.includes(".")) {
    return false;
  }
  */

  return true;
}

//console.log(isValidEmail("testsss@email.com"));
//console.log(isValidEmail("ab@email.com"));
//console.log(isValidEmail("test@email"));
//console.log(isValidEmail("test@email.c"));
