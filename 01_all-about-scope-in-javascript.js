console.log("\n// ***************");
console.log("\n// All About Scope");
console.log("\n// ***************");

// Scope in a JS program refers to the variables available for use within the program. If a variable/expression *isn't in scope*, it's not available for use. Declared variables are only valid in the scope they were declared.
// NOTE Nested scopes can still count the scopes of the higher levels they are in as a part of their own scope as well!

// Local scope
// Block scope
// Lexical scope
// Scope chaining


// *****************************
// Advantages of utilizing scope
// *****************************
// Two main advantages that scope gives us is:
//    1. Security - scope ensures that variables can only be accessed by 'pre-defined parts' of the program.
//    2. Reduced Variable Name Collisions - self-explanatory



// ************************
console.log("\n// Different kinds of scope");
// ************************
//  JavaScript has 3 types of scope:
//    1. global scope
//    2. local scope
//    3. block scope


// ************
// Global scope
//    The widest, largest, outermost scope. Represented by 'window' object in browser and 'global' object in Node.js. Objects in global scope are available to the entire -program-. (Not the entire file, folder, computer, but -program-).
// Avoid global scopes, since they easily cause name collision errors.

console.log("\n// EXAMPLE Global variable")
let myGlobalName = "Apples";
console.log(myGlobalName);


// ***********
// Local scope
// A function's scope is called local scope. Var-declared variables are local-scoped. Includes:
//    function arguments
//    locally declared variables
//    *IMPORTANT* variables *already declared* when the *function was defined*

console.log("\n// EXAMPLE Global and local variables together");
let myName = "global";

function functionOne() {
  // functionOne's scope
  let myName = "func1";
  console.log("functionOne myName: " + myName);
}

function functionTwo() {
  // functionTwo's scope
  let myName = 'func2';
  console.log("functionTwo myName: " + myName);
}

functionOne();
functionTwo();


// ***********
console.log("\n// Block Scope");
// ***********
// A JS block is denoted by { curly braces } . Examples: if, for, while, etc. statements.
// let/const-declared variables are block-scoped.

console.log("\n// EXAMPLE Of global, local, and block scopes each having their own, different and unique, 'dog' variable");
// global scope
let dog = "woof";

// local scope
function localScoped() {
  let dog = "ruff";

  // block scope
  if (true) {
    let dog = "bowwow";
    console.log("Block: " + dog); // bowwow
  }

  console.log("Local: " + dog); // ruff
}

console.log("Global: " + dog); // woof
localScoped()


// ******************************************************
// BONUS EXAMPLES SECTION, ties into scope chaining below

function functionThree() {
  // functionThree's scope also includes the *already declared* global variable myName.
  // Since functionThree does not declare its own myName, it uses that one instead:
  console.log("functionThree using the global myName: " + myName);
}

function functionFour() {
  // functionFour uses and reassigns the global variable myName. Changing it with functionFour effects the global 'myName' variable itself.
  console.log("It's global first: " + myName);
  myName = "it's local";

  // Note, one cannot use the outer variable and then try to declare their own version. It must be only one or the other.
  // Commented code below causes a reference error when combined with above global myName that was already used.
  // let myName = "it's local";

  console.log("Now: " + myName);

}

functionThree();
console.log("BEFORE calling Four: \n" + myName);
functionFour();

// See how the global variable itself was changed after being used by functionFour:
console.log("AFTER calling Four: \n" + myName);
functionThree();




// ********************************
console.log("\n// Scope chaining");
// ********************************
// Scope chaining - when inner scopes have access to variables in outer scopes.
//    NOTE I already did some scope-chain examples above too, so this may look familiar.
// A *closure* is a function that *CAPTURES* (uses) a variable that was previously declared.
// More on that in next reading.
// *IMPORTANT* Inner scopes can *reference* outer variables, but outer scopes cannot reference inner variables.

console.log("\n// EXAMPLE Scope chaining, allowing an inner scope to use variables from an outer scope");
// global scope
let person = "Rae";

// sayHello function's local scope
function sayHello() {
  let person = "Jeff"; // TIP Try commenting this out; greet() will then search higher and use the global "Rae".

  // greet function's local scope
  // NOTE Greet does not have its own 'person' variable declared, so what 'person' will it use?
  function greet() {
    console.log("Hi, " + person + "!");
  }
  // Calling greet, which prints 'Hi, [name]!'
  greet();
}

sayHello(); // 'Hi, Jeff!'


// *******************************
console.log("\n// Lexical Scope");
// JS code is first 'parsed' before it is actually 'run'. This is known as *lexing time*.
// In lexing time, the parser resolves variable names to their values when functions are nested.
// *MAIN POINT* *Lexical scope* is determined at *lexing time*. The value of variables can thus be determined without having to run code.
// The JavaScript language *does not have dynamic scoping*.

// EXAMPLE of lexical scoping
function outer() {
  let x = 5;

  function inner() {
    // here, we know the value of x because scope chaining will use the x variable in the scope above us. The code need not be run to determine x's value; you can see it right here!
    console.log(x);
  }
  inner();
}

// TODO NOTE TBH This part is still fuzzy to me. I feel like it's either so simple and obvious that what I 'get' about it already, is really all that's to it, or these fancy words and phrases are hiding some much deeper, complex shit to unravel.