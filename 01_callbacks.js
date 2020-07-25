// *******************************************
// Callbacks: Using a Functions as an Argument
// *******************************************

// *******************
// What is a callback?
// Callbacks are a kind of function.
// Callbacks are functions that are used as arguments within another function.
// As examples, the built-in methods in JavaScript like Array#forEach or Array#map both accept a function.
// Having a callback as a function parameter is no different in syntax than defining a regular parameter for other data types.

// EXAMPLES
// The highest-order function that accepts a callback function as an argument:
let foobar = function(callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

// A named function, which will be used as a callback by being *passed into* another function.
let sayHello = function() {
  console.log("hello");
};

// Calling the foobar function with the named function sayHello being passed in as an argument:
foobar(sayHello);

// Calling the foobar function with an anonymous function directly being written into foobar:
foobar(function() {
  console.log("hello");
});

// Named callbacks are suited for when the function needs to be reused. Anonymous callbacks are suited for when the function need only be used the once, then thrown away.


// **************************
// A more interesting example

// EXAMPLE Using named functions as callbacks:
// A function that accepts a callback:
let add = function(num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

// Two named callback functions:
let double = function(num) {
  return num * 2;
};
let negate = function(num) {
  return num * -1;
}

// Invoking the function using each callback we named:
console.log(add(2, 3, double)); // 10
console.log(add(4, 5, negate)); // -9


// EXAMPLE using a built-in JavaScript function as a callback:
//    Samples of the Math.sqrt function being used by itself:
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8

// Math.sqrt is now being passed into our add function as an argument:
console.log(add(60, 4, Math.sqrt)); // 8


// ************************************
// Refactoring for an optional callback

// EXAMPLE Requiring a callback when it may not be needed can make for an ugly function call:
add(2, 3, function(n) {
  return n;
});

// But, JS functions can still be called successfully even without filling all its parameters. Here, this greet function can accept both names or, if only one name is given, will just print 'undefined' for the missing parameter:
let greet = function(firstName, lastName) {
  console.log("Hey " + firstName + "! Your last name is " + lastName + ".");
};
greet("Ada", "Lovelace");
greet("Grace");

// EXAMPLE Using this behavior, functions using callbacks can be designed to work around the lack of a callback. Observe how the instance of 'defensive code' using the if-else statement allows the function to provide different results based on if a callback is given or not:
add = function(num1, num2, cb) {
  if (cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};
console.log(add(9, 40)); // 49
console.log(add(9, 40, Math.sqrt)); // 7
