/*
Comparisons
Conditions

TRUE VALUES
1-infinite, strings, true

FALSE VALUES
0, false, null, undefined

  &&
  ||
  !
  ===
  !==
  >
  >=
  <
  <=

  if(TRUTH){
    //execute code
  }

Check prelude_notes.pdf

Below is a function that lets us ask for an input from the user
---------------------------------------------------------
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
*/