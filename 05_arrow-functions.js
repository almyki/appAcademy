// ***************
// Arrow Functions
// ***************

// =>
// Called arrow functions or fat arrows. Counterpart to lambda in other languages.
// Main benefits of arrow functions:
//    * A concise way to declare functions.
//    * Handling the behavior of context and keyword this.


// ****************************************************
console.log("\n\n// Arrow functions solving problems");

console.log("// EXAMPLE normal function declaration");
let average = function(num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

console.log("// EXAMPLE arrow function version");
// NOTE the only difference is removing 'function' before the parameters, then adding '=>' after the parameters. It's a bit shorter, which is kind of convenient.
let averageArrow = (num1, num2) => {
  let av = (num1 + num2) / 2;
  return avg;
}


// *******************************************
console.log("\nAnatomy of an arrow function");


console.log("\n//SYNTAX multiple-statement arrow function syntax");
//    (parameters, go, here) => {
//      statement1,
//      statement2,
//      return <a value>;
//    }

console.log("EXAMPLE normal function vs. arrow function");
function fullNameFunc(fname, lname) {
  let str = "Hello " + fname + " " + lname;
  return str;
}
// vs.
let fullNameArrow = (fname, lname) => {
  let str = "Hello " + fname + " " + lname;
  return str;
}

// Note, they are functionally the same. Only the syntax is different:
console.log(fullNameFunc("Keiji", "Akaashi"));
console.log(fullNameArrow("Keiji", "Akaashi"));

// *
console.log("SYNTAX arrow + single parameter:");
// The ( parentheses ) can be omitted for single parameters in arrow functions.
//
//    param1 => {
//      statements;
//      return IDBCursorWithValue;
//    };


// Functional Example:
const sayName = name => {
  "Hello " + name;
}
console.log(sayName("Bokuto")); // Hello Bokuto


console.log("SYNTAX arrow + no parameters:");
// The () parentheses must be used if there are NO parameters!
//
//    () => {
//      statements;
//      return value;
//    };

console.log("\n// Functional Example:");
const sayYou = () => {
  return "Hello, you!";
}
console.log(sayYou());


// *********************************
// Single expression arrow functions

// In JS, an *expression* is a line of code that returns a value.
// A *statement* is, more generally, any line of code.

// Single-expression arrow functions allow *implicit returns*.
// They can omit BOTH the {curly braces} AND the keyword return (together).

console.log("\n// EXAMPLES of normal function,\n vs explicit-return arrow function,\n vs implicit-return arrow function:");

// Normal function
const multiply = function(num1, num2) {
  return num1 * num2;
};

// Arrow function, implicit return
const multiplyArrow = (num1, num2) => num1 * num2;

// Arrow function, explicit return
const multiplyArrowEx = (num1, num2) => { return num1 * num2; };


console.log("\n// EXAMPLE Multiple statements do not allow implicit returns:");
const halfMyAge = myAge => {
  const age = myAge; // first statement;
  age / 2; // second statement, no 'return';
};
console.log(halfMyAge(30)); // undefined


console.log("\n// BONUS EXAMPLE")
// The same (incorrect) function would look like this if it was also attempted in true single-line implicit-return fashion:
//
//    const halfMyAge = myAge => const age = myAge; age / 2;


console.log("\n// EXAMPLE Arrow + multiple statements + return:");
const halfMyAgeExplicit = myAge => {
  const age = myAge; // statement 1
  return age / 2; // statement 2, with 'return'
};
console.log(halfMyAgeExplicit(30)); // 15


// ****************************************
// Syntactic ambiquity with arrow functions
// In JS, {} can signify:
//    * an empty block
//    * an empty object

// EXAMPLE Is this {} an empty block or empty object?
const ambiguousFunction = () => {};
console.log(ambiguousFunction()); // undefined

// ANSWER JS standards state {curly braces} after a fat arrow => evaluate to an *empty block*.
// Empty blocks have the default value of undefined. QUESTION So do empty objects, right?

// NOTE the special edge-case syntax for when you wish for a single-expression => function to return an *empty object*, and not an empty block:
// Us curly braces within PARENTHESES. The () now act as the block.
const clearFunction = () => ({});
console.log(clearFunction()); // returns object: {}


// *****************************
// Arrow functions are anonymous, like lambdas.

// To name an arrow function, assign it to a variable.

console.log("\nEXAMPLES (Trying to) make an arrow function with a name,\n vs as an anonymous function,\n vs a variable-assigned arrow function:");

// Named Arrow Function
// sayHello(name) = > console.log("Hi, " + name); // SyntaxError

// Anonymous Arrow Function
(name) => console.log("Hi, " + name); // no error!

// Variable-assigned Arrow Function
const sayHello = name => console.log("Hi, " + name);
sayHello("Kotaro"); // Hi, Kotaro


// ****************************
// Arrow functions with context
// ****************************
// Normal functions, when created, also create their own personal 'this' that will change by the context of when they're called.
// Arrow functions are *special* because:
//    1. They don't make their own context/this; they *inherit* the same context/this as the function created them, which can be handy.
//    2. In the case that no function created them, they inherit the context of 'the global object', which is not terribly useful.
//    3. Their context/this is *bound* to them the moment they are created, and thus will *never change*.
//

const testObj = {
  name: "The original object!",

  changeName: function(newName) {
    this.name = newName;
  },

  createFunc: function() {
    // the function created and returned below creates its own scope and context
    return function() {
      return this.name; // The object that 'this' represents can change based on what object is calling it.
    };
  },

  createArrowFunc: function() {
    // the arrow function created and returned below will *copy* the context of the function that creates it, which is createArrowFunc.
    return () => {
      return this.name; // Once assigned, the value of 'this' will never change.
    };
  }

};

console.log("\n// EXAMPLES Creating a normal function and an arrow function:");


// noNameFunc creates a new context/this for itself, and the context/this *changes to be the object that calls it, whenever it's called*.
const noNameFunc = testObj.createFunc();

// arrowNameFunc copies the context of the function that created it. Here, the function that is creating it is 'createArrowFunc', and what object is calling on 'createArrowFunc' right now? 'testObj', so arrowNameFunc inherits 'testObj' as its 'context' aka it's 'this' value!
const arrowNameFunc = testObj.createArrowFunc();

// DETAILED ARROW-FUNCTION WALKTHROUGH ON THE ABOVE LINE OF CODE:
//    1. The object 'testObj' calls on the function 'createArrowFunc()'.
//    2. The 'createArrowFunc()' function was *called* by testObj, so it's *current context* is testObj.
//    3. createArrowFunc() creates the arrowNameFunc() arrow function right now, at the same time that it's been called by testObj.
//    4. createArrowFunc() *copies the current context/this* of the function that created it, 'createArrowFunc()', and THAT function's *current context/this* === testObj.
//    5. createArrowFunc() immediately binds that 'context/this' (testObj) to itself permanently, so its personal 'context/this' will not actually change, even if an object other than testObj calls it later.
//    6. Jazz hands

console.log("\n//EXAMPLES Call on the new functions, which both return 'this.name'");
// Normal Function, currently being called on by the 'global object', thus attempting to call on the global object's 'name', which doesn't exist:
console.log(noNameFunc()); // undefined

// Arrow function, also called on by the global object, but still returning 'this.name' as though it is 'testObj.name':
console.log(arrowNameFunc()); // "The original object!"


// See below, how changing the 'name' of the testObj also changes arrowNameFunc's 'this.name' result?
// Because the 'this' in the 'this.name' that it returns is still the original 'testObj':
testObj.changeName("Hinata");
console.log(testObj.name);
console.log(arrowNameFunc());


// *****************************
console.log("\n// No binding in arrow functions");

// Since an arrow function already has a *bound context*, its 'this' cannot be reassigned.
// An arrow function's 'this' will ALWAYS be what it was at the time that the arrow function was *declared*, not *called*.
// A normal function, in contrast, can reassign its 'this', and checks to do so every time it's *called*.

console.log("\n// EXAMPLE Attempting and failing to bind an arrow function to an object");
// This arrow function was created in the global scope, so it's context now is 'the global object'.
const returnName = () => this.name;

// Calling the arrow function, when it returns 'this.name' it is searching for the global object's 'name', but finds nothing.
console.log(returnName()); // undefined

// The arrow function can't be 'rebound' to a new object:
let tryToBind = returnName.bind({name: "Party Wolf" }); // undefined
tryToBind(); // still undefined




// Dunked it