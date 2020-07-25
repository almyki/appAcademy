// ***************
// Rest and Spread
// ***************

// ***************************************************
// Using the Spread Operator and Rest Parameter Syntax
// JavaScript functions have certain flexibility that other programming languages don't allow. Ex. Can take fewer or more arguments than specified and 'work around' the lack or excess.
// Rest and spread takes advantage of this flexibility to provide us some convenience.
// They appear very similar, so watch out not to confuse them.

// Rest Parameter Syntax - accepts an arbitrary number of arguments in a function.
//    function coolFunctionName(item1, item2, ...otherItems) { /** code here **/ }
// Spread Operator Syntax - can be used with both Objects and Arrays.
//    prettyFunctionName(...listOfItems)
//    newMergedList = (...listOfItems, thing1, thing2, ...evenMoreThings, thing3);

// *******************
// Accepting arguments

// Functions with fewer arguments than specified
// EXAMPLE of a function with a parameter, when the function is used with and without the parameter filled:
function tester(arg) {
  return arg;
}
console.log(tester(5)); // 5
console.log(tester()); // undefined

// More arguments than specified
// EXAMPLE of using more arguments than a function has parameters for:
function adder(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(adder(2, 3, 4)); // 5
console.log(adder(1, 5, 19, 100, 13)); // 6


// *************************
// Utilizing Rest Parameters
// Rest parameter syntax - allows a function to capture all the incoming arguments into an array.
//    ...nameOfArray (MUST be function's last parameter)

//    function restTester(...restOfArgs) {
//      /** ...code here... **/
//    }

// EXAMPLE 1
function logArguments(...allArguments) {
  console.log(allArguments);
}
logArguments("apple", 15, 3); // [ 'apple', 15, 3 ]

// EXAMPLE 2
function restAdder(num1, ...otherNums) {
  console.log("The first number is: " + num1);
  let sum = num1;

  otherNums.forEach(function(num) {
    sum += num;
  });

  console.log("The sum is: " + sum);
}

restAdder(2, 3, 4,);


// ***********************
// Utilizing Spread Syntax
// Spread Operator - break down a data type into its individual elements.
//    Two basic behaviors:
//    1. Take a data type (array, object) and *spread* the values of that type where *elements* are expected.
//    2. Take an iterable data type (array, string) and *spread* the elements of that type where *arguments* are expected.


// ******************
// Spreading elements
// We learned before to use the .concat method to achieve this same purpose, but the spread operator is more convenient.
// EXAMPLE
let numArray = [1, 2, 3];
let concatNums = numArray.concat(["concat-ing", "isn't", "convenient"]); // [ 1, 2, 3, "concat-ing", "isn't", "convenient" ]
console.log(concatNums);
let moreNums = [...numArray, 4, 5, 6];
console.log(moreNums); // [1, 2, 3, 4, 5, 6]

// EXAMPLE 2: Note how for spread, the order *doesn't* matter, and you can have more than one object spread at a time.
let makeup = ["lipstick", "mascara", "foundation"]
let beauty = [...moreNums, ["toner", "skin cleanser"], ...numArray, "hair tonic", ...makeup]
console.log(beauty);

// Spreading Objects
// EXAMPLE of spreading an object into a new variable without change.
let colors = { red: "scarlet", blue: "aquamarine" };
let newColors = { ...colors };
console.log(newColors);

// EXAMPLE of merging objects together
let colors2 = { green: "forest", yellow: "sunflower" };
let colors3 = { orange: "tangerine", purple: "lavender" };

let moreColors = { ...colors, ...colors2, ...colors3 };
console.log(moreColors);


// *******************
// Spreading Arguments
// Spread can 'spread' iterable data types in as arguments of a function.
// Iterable data types means arrays and strings, *not Objects*.

// EXAMPLE
function speak(verb, noun) {
  return "I like to go " + verb + " with " + noun + ".";
}
console.log(speak("running", "Jet"));

// Note that the extra element is ignored, since there lacks a parameter to fill with it.
const words = ["running", "Jet", "tabby cats"];
console.log(speak(...words));

// MY EXAMPLE
function perfumes(favorite, secondFavorite, leastFavorite) {
  return "My favorite aroma is " + favorite + ", but I also like " + secondFavorite + ". But I absolutely can't stand the scent of " + leastFavorite.toUpperCase() + "!";
}

let smells = ["rose", "cinnamon apple", "chocolate"];
console.log(perfumes(...smells));
console.log(perfumes("buttercup", ...smells));

// Dunked it, y'all.