// *************************
// Iterating Through Objects
// *************************

// **********************
// A new Kind of for Loop
// Objects cannot be iterated through with indices since they are unordered.
// Special syntax can be used to iterate through an object's keys, which can be used to loop through both keys and values.

// EXAMPLE of the syntax:
//    for (let variable in object) {
//      statement;
//    }
let obj = {
  name: "Rose",
  cats: 2
};

for (let currentKey in obj) {
let value = obj[currentKey];
  console.log(currentKey);
  console.log(value);
}

// Note that dot notation can't be used in these for loops to refer to values, because the value is assigned to a variable through the action of iterating. Dot notation can't use variables. Backet notation can.

// EXAMPLES
let employees = {
  manager: "Angela",
  sales: "Gracie",
  service: "Paul",
};

for (let title in employees) {
  let person = employees[title];
  console.log(person);
}

// GENERAL NOTE: If you declare the i variable without 'let' in a thing, it will become a global variable instead of local.

// BONUS: Arrays and for...in/of loops
// The for...in loop also works for arrays! However, the 'key variable' instead becomes the array index.
// The for...of loop can be used to loop through the values instead! Think 'OPPOSITE OF PYTHON'.

// EXAMPLE of for...in array loop
let books = ["fantasy", "pirates", "romance"];
for (let i in books) {
  console.log(books[i]);
}
// EXAMPLE of for...of array loop
for (let book of books) {
  console.log(book);
}

// ********************
// Methods vs Functions
// Method - a function that belongs to an object.
// These are both notating the method myFunc that belongs to the object myObject.
//    myObject.myFunc
//    myObject["myFunc"]
// Essentially, a method is a key-value pair where the key is the function name and the value is the function definition!

let dog = {
  name: "Bingsoo",
};

dog.bark = function() {
  console.log("bark bark!");
};

dog["speak"] = function(string) {
  console.log("WOOF " + string + " WOOF!!!");
};

// Calling the method-functions of the object 'dog' using dot and bracket notation:
dog.bark();
dog.speak("I only drink filtered water!");

// Objects can be given methods when initializing the object itself.
// Remember the comma after the function to add more key:value pairs!
let dog2 = {
  name: "Simba",
  bark: function() {
  console.log("raurgh, raurgh...");
  },
  speak: function(string) {
  console.log("ruff... " + string + " ...ruff...");
  },
};

dog2.bark();
dog2.speak("I've always been a good boy...");


// *********************
// Useful Object Methods

// Iterating through keys using Object.keys
//    Object.keys(theObjectHere)
//    The Object.keys method accepts an object as the argument and returns an array of the keys within that Object.
// EXAMPLE
console.log(Object.keys(dog));
console.log(Object.keys(dog2));

let cup = { color: "Red", contents: "coffee", weight: 5, };
console.log(Object.keys(cup));


// Iterating through keys using Object.values
//    Object.values(theObjectHere)
//    This method accepts an object argument and returns and array of the object's values.
// EXAMPLE
console.log(Object.values(dog));
console.log(Object.values(dog2));
console.log(Object.values(cup));

// Iterating through an Object's keys & values
//    Object.entries(thObjectHere)
//    Returns a 2D array of the [key, value] pairs in the object.
// EXAMPLE
console.log(Object.entries(dog));
console.log(Object.entries(dog2));
console.log(Object.entries(cup));
