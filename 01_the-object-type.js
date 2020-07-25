// Objects are one of the most diverse and widely used data types of all in JS.
// An object is a data structure that stores other data.
// An array stores elements.
// Objects are essentially dictionaries, maps, or associative arrays.
// They have 'keys' and 'values', and the keys are typically string labels.
// Objects don't have indexes or an order. Values are accessed through keys instead.
// Objects have the nickname POJO: Plain Old JavaScript Objects.

// Object Syntax uses Curly Braces:
let car = {};

console.log(typeof car);
console.log(car);

// ***********************
// Setting keys and values
car["color"] = "Blue";
car["seats"] = 2;

console.log(car["color"]);
console.log(car["seats"]);
console.log(car);

// *******************
// Keys without values
// Trying to access a key that isn't in an object returns 'undefined'.
console.log(car["weight"]) //undefined

// The 'undefined' type is the default for:
//    * unassigned variables
//    * functions without a return
//    * out-of-array elements
//    * non-existent object values

// Example 1 of checking if a key exists:
car["color"] === undefined; // false
car["weight"] === undefined; // true

// Example 2, the modern preferred JS method:
"color" in car; // true
"model" in car; // false


// ***********************
// Using variables as keys
// TODO: This part was worded confusingly, so take it with a grain of salt.
let newVariable = "color"; // undefined
console.log(newVariable); // "color"
console.log(car[newVariable]); // "Blue"
console.log(car["color"]); // "Blue"

// Since variables can be used as keys, this has the benefit of being able to change the keys of objects by changing the variable.

newVariable = "weight";
console.log(newVariable);
console.log(car[newVariable]); // undefined

// car doesn't change because we didn't *assign* the new variable key in our object.
console.log(car);

car[newVariable] = 1000;
console.log(car); // {color: "Blue", seats: 2, weight: 1000}
newVariable = "weightLbs";
console.log(car);
car["age"] = 15;
console.log(car);

// *************************
// Using different notations
//    Bracket notation vs Dot notation

// There are two ways to access values within an object:
//    1. object[key] <= 'Bracket Notation'
//    2. object.key <= 'Dot Notation'
// Dot Notation:
//    + Does not require "string quotes"
//    + easier to read
//    + easier to write
//    - cannot use variables as keys
//    - first character cannot be a number (ex. object.1key)

// Bracket Notation:
//    - Must use "string quotes" for keys
//    + can use variables (string type) as keys
//    + can use a number for the first character (ex. object["1key"])


// Example 1: Bracket Notation
let cat = {};
cat["name"] = "foot foot";
cat["meow"] = "Meeeow";
console.log(cat["meow"]);

// Example 2: Dot Notation
let dog = {};
dog.name = "Bingsoo";
dog.bark = "Bowow";
console.log(dog.bark);

// Example 3: Both notations with a variable
let myKey = "name";
console.log(cat[myKey]); // foot foot
console.log(dog.myKey); // undefined

// Assigning a new key:value pair with both notations:
console.log(dog.myKey); // undefined
dog.myKey = "Bentley";
console.log(dog); // {name: "Bingsoo", bark: "bowow", myKey: "Bentley"}
console.log(dog.myKey); // Bentley

console.log(cat.myKey); // foot foot
cat.myKey = "Yoink";
console.log(cat); // {name: "Yoink", meow: "Meeow"}
console.log(cat.myKey); // Yoink


// ***********************
// Putting it all together

// Example of creating an entire object in one statement:
let myRat = {
  name: "Carolina",
  type: "rodent",
  age: 2,
  favoriteToys: ["spinner wheel", "hammock"],
};

console.log(myRat);
console.log(myRat.age); // 2
console.log(myRat["favoriteToys"]); // [ 'spinner wheel', 'hammock' ]

// *****************************
// Operator precedence revisited
// Operator precedence pertains to objects. Associativity determines the order of operation, along with precedence.
// Right-associativity - when code is evaluated righ-to-left.

a = b = 1;
let list1 = ["fruit", "apple", "orange"];
let list2 = list1;

//   1. Variable b is assigned as 1.
//   2. Variable a is assigned as b = 1.
//   3. b = 1 returns the value 1, so variable a is now assigned as 1.
// The assignment of variables takes lowest precedence, thus we evaluate the return value of b=1 before completing the assignment of variable a.

//Left-associativity - when code is evaluated left-to-right. This example below evaluates the document.getElementById method before accessing value.
// TODO Note: This may not work because this is just their fake example. We didn't actually make this stuff, so it'll just break.
let id = "header";
let element = document.getElementById(id).value;

//    1. We resolve the document variable to be the 'document object'.
//    2. Use dot notation to retrieve the getElementById function, which is a property of the document object.
//    3. Attempt to call it, but before the call can go, the function's arguments must be evaluated.
//    4. The id variable is the string "header".
//    5. The getElementById function returns an HTMLElement object, then uses dot notation to access 'value'.
//    6. Finally, assignment is done as the LOWEST precedence. Its associativity is right to left, so the value on the right is now assigned to the left.

// EXAMPLE
add(number1, number2) + number3;
//    1. number3 is resolved to its value.
//    2. The function is invoked, but the variables must be resolved.
//    3. number1 and number2 are resolved to their values.
//    4. The function is now invoked so number1, number2, and number3 are added together!









// **********************************
// LECTURE Primitive Types Vs Reference types
// Primitive data types are immutable. Reference types are mutable.
// Primitive data types are pointing at data that already exists within the computer's memory. This is why primitives cannot be changed. Instead, variables are simply pointing different primitive data.
// Reference types are mutable, so a variable is not pointing directly at the computer memory; they are pointing to the data object itself. Thus, when two variables are assigned to the same object, they do not change where they are pointing to in the data when the variable is changed; the data itself changes, so both variables will change when the data is changed.

// JavaScript's Primitive Types:
//    Boolean
//    Null
//    Undefined
//    Number
//    String

// One reference type
//   Object

// EXAMPLES:
// If you assign a variable to another variable, if the value type of the original variable is primitive, then the two variables will always have their own unique value. Changing variable b doesn't effect variable a.

// Example: Assigning a primitive value, then assigning a variable to that variable.
b = 5;
a = b;
console.log(a + " " + b);
b = 10;
console.log(a + " " + b);

// However, if the value type of the original variable is not primitive, then changing one variable will effect the other--unless the variable was 'copied', not assigned.

// Example: Changing the array in one variable effects the other variable's array value as well.
console.log(list1);
console.log(list2);
list1.pop();
console.log(list1);
console.log(list2);

// Example: It works the other way around too.
list2.push("mango");
console.log(list1);
console.log(list2);

// Example: Using Array#slice thus creates a copy for us instead, so changing one doesn't effect the other anymore:
list2 = list1.slice();
let last = list1.pop();
console.log(list1);
console.log(list2);

// ******************************
// ******************************
// Lecture Practice
console.log("\n\nLECTURE PRACTICE");

// This creates an empty object.
let testObject = {};

// These both add a key-value pair to the object.
testObject["num"] = 10;
testObject.num2 = 20;
console.log(testObject);
console.log(testObject["num"]);
console.log(testObject.num2);


// Primitive Types Vs Reference types
// Primitive data types are immutable. Reference types are mutable.
// Primitive data types are pointing at data that already exists within the computer's memory.
// This is why primitives cannot be changed. Instead, variables are simply pointing different primitive data.
// Reference types are mutable, so a variable is not pointing directly at the computer memory; they are pointing to the data object itself. Thus, when two variables are assigned to the same object, they do not change where they are pointing to in the data when the variable is changed; the data itself changes, so both variables will change when the data is changed.

// JavaScript's Primitive Types:
//    Boolean
//    Null
//    Undefined
//    Number
//    String

// One reference type
//   Object


// ****************************
// LECTURE Object Destructuring
console.log("\n\nObject Destructuring");

// Array Destructuring
// Array destructuring must be done sequentially; it is positional. To skip items you don't want to assign, it is convention to use underscore _ .
// However, you can only use it once. Perhaps chaining more underscores would be better, or adding a number. _1, _2 _3, or letters.
let array = ["blue", "red", "yellow", "green", "pink"];

// EXAMPLE The original way to assign array values to invidual variables:
let firstColor = array[1];
let secondColor = array[2];
console.log(firstColor);
console.log(secondColor);

// EXAMPLE The destructuring way to assign array values:
let [first, second, third] = array;
console.log(third);

// Object Destructuring
// Objects have no index, so destructuring must be done via referencing keys.
// By default, the destructuring will assign the new variable to the keyword. To change the variable name in the destructure, it must be specified via 'aliased destructuring'.
let obj = { name: "Sandy", instruments: ["guitar", "uke"] };

// EXAMPLE while using the default key names to destructure:
let { name,  instruments } = obj;
console.log(name);
console.log(instruments);

// EXAMPLE Aliased destructuring
let { name: musicianName, instruments: proficiency } = obj;
console.log(musicianName);
console.log(proficiency);




// TODO Make sense of this shit.
console.log("\n\nDOES THIS MAKE SENSE");
obj["name"] = "Danny";
console.log(obj.name);
console.log(name);
console.log(musicianName);
let sameName = obj.name;
console.log(sameName);
obj["name"] = "Rizzo";
console.log(obj.name);
console.log(sameName);

console.log(obj.instruments);
console.log(proficiency);

obj["instruments"].push("piano"),
console.log(obj.instruments);
console.log(proficiency);

proficiency.push("zither");
console.log(obj.instruments);
console.log(proficiency);

// So array within arrays, okay, they are the same assignment.
// QUESTION Array or object within an object, no dice. Key-value pair, if you assign a variable to a value even if the value is array/object, it's creating a copy.

let nestedArrays = [[['third level', 'A', 'B', 'C'], 'fruit', 'vegetables'], [1, 2, 3]];
console.log('hello');
let fruits = nestedArrays[0];
console.log(fruits);
console.log(nestedArrays[0]);
fruits.pop();
console.log(fruits);
console.log(nestedArrays[0]);

console.log("level three");
let levelThree = nestedArrays[0][0];
console.log(levelThree);
console.log(nestedArrays[0][0]);
levelThree.pop();
console.log(levelThree);
console.log(nestedArrays[0][0]);



// Programmers will often find use out of destructuring nested objects.

// EXAMPLE Destructuring nested objects.
let zooAnimals = {
  animalId: 12,
  species: "hippo",
  favoriteFoods: ["watermelon", "lemons", "dragonfruit"],
  fullName: {
    fname: "Fiona",
    lname: "theCuteHippo"
  },
  history: {
    birth: "in the wild",
    "age 2": "put in captivity",
    "age 4": "moved to this zoo",
    "present": "six years old, healthy",
  }
};

let { fullName: {fname, lname} } = zooAnimals;
console.log(fname);
console.log(lname);
console.log(fname + " " + lname);

// Array nested within an object.
let { favoriteFoods: [ food1, food2 ] } = zooAnimals;
console.log(food1);
console.log(food2);

// Object nested within another object.
let { history: { birth, present } } = zooAnimals;
console.log(birth);
console.log(present);
console.log(zooAnimals["history"]["age 2"]);

// ************************************
// LECTURE Destructuring in function Parameters

let parrot = { name: "Layla", likes: "pets", toys: 1000 };

// EXAMPLE of the original way to rename it.
function sayHelloName(name) {
  let parrotName = name.name;
  console.log("Hello to " + parrotName);
}
sayHelloName(parrot);

// EXAMPLE with destructuring.
function sayByeName( { name } ) {
  console.log("Goodbye to " + name);
}
sayByeName(parrot);


// ***********************
// LECTURE Spread and Rest
// Rest -
function colorPicker(color) {
  let string = "I picked these colors: " + color;
  return string;
}
// This will ignore the "blue" argument and treat it like referencing a non-existing parameter.
console.log(colorPicker("red", "blue"));

function tradColorPicker(firstColor, secondColor) {
  let string = "Now, I picked these colors: " + firstColor + ","  + secondColor;
  return string;
}
console.log(tradColorPicker("red", "blue"));

function restColorPicker(color, ...otherColors) {
  let string = "Finally, I picked these colors: " + color;
  console.log(otherColors);
  return string;
}
console.log(restColorPicker("red", "blue", "yellow"));

function argColorPicker(color, ...otherColors) {
  let string = "Take ALL the colors: " + color;

  otherColors.forEach(function (argument) {
    string = string + ", " + argument;
  });
  return string;
}
console.log(argColorPicker("red", "blue", "yellow", "green", "indigo"));

// Spread
let animals1 = ["zebra", "bird", "parrot"];
let animals2 = ["lion", "bison", "panther"];

let animals3 = animals1.concat(animals2);
console.log(animals3);

// Spread allows using triple dots to combine elements, then spread out all the values within both into one larger data structure.
// Spread allows 'spreading' iterable data types within function arguments.
let animals4 = [...animals1, ...animals2];
console.log(animals4);

let obj1 = { car: "Nissan", color: "white" };
let obj2 = { wheels: 4, radio: "loud" };

let whiteCar = { ...obj1, ...obj2 };
console.log(whiteCar);

function spreadColorPicker(colorOne, colorTwo) {
  return "I picked out " + colorOne + " and " + colorTwo + ".";
}
let colorArray = ["indigo", "goldenrod"]
console.log(spreadColorPicker()); // Empty
console.log(spreadColorPicker("indigo", "goldenrod")); // Normal way
console.log(spreadColorPicker(colorArray)); // Attempting the array without spread
console.log(spreadColorPicker(...colorArray)); // Spread way


// ****************
// Pair Programming
