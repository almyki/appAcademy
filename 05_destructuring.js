// *************
// Destructuring
// *************
// Destructuring arrays or objects makes accessing their individual elements easier.

// *********************************
// Destructuring data into variables
//    Destructuring assignment syntax - extracts parts of an array or object into distinct variables.
// EXAMPLE
let numArray = [10, 20];
// Destructuring in the line below:
let [firstEl, secondEl] = numArray;
console.log(firstEl);
console.log(secondEl);

// ALT EXAMPLE declaring the variables before destructuring:
let animalArray = ["tiger", "hippo"];
let animal1, animal2;
// Now 'unpack' the array values into the variables.
[animal1, animal2] = animalArray;
console.log(animal1); // tiger
console.log(animal2); // hippo


// ASIDE EXAMPLE: Playing with immutability of assigning variables with array elements.
let firsties = numArray[0];
let seconds = numArray[1];
console.log(firsties);
console.log(seconds);

firstEl = 100;
firsties = 27;
console.log(firstEl);
console.log(firsties);


// **************************************
// Swapping variables using destructuring

// EXAMPLE
let num1 = 17;
let num2 = 3;
console.log(num1 + " " + num2); // 17 3
[num1, num2] = [num2, num1];
console.log(num1 + " " + num2); // 3 17

let barterGoods1 = "rice";
let barterGoods2 = "fish";
console.log("Solochav: " + barterGoods1);
console.log("rito pikat: " + barterGoods2);

// Let's trade these two using destructuring!
[barterGoods1, barterGoods2] = [barterGoods2, barterGoods1];
console.log("Solochav: " + barterGoods1);
console.log("rito pikat: " + barterGoods2);
// Trade successful, war averted, crops watered, townsfolk happy.


// ************************************
// Destructuring objects into variables
// One important way that destructuring is useful is it can take apart and assign small slices of large objects into variables.

// EXAMPLE
let obj = { name: "Apples", breed: ["tabby", "short hair"] };

// Traditional way of calling the variables below:
console.log(obj["name"]); // Apples
console.log(obj.breed); // [ 'tabby', 'short hair' ]

// Destructuring, then calling by the newly assigned variables below:
let { name, breed } = obj;
console.log(name); // Apples
console.log(breed); // [ 'tabby', 'short hair' ]

// This syntax works by matching object properties, not positionality, so individual elements can be selectively assigned:
let { a, c } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(c); // 3


// ****************************
// Aliased object destructuring
// This is when the destructuring process also creates a new variable name, rather than copy the same variable name as the key in the key-value pair.
let fruit = { apple: "red", banana: "yellow" };
let { apple: newApple, banana: newBanana } = fruit;
console.log(newApple);
console.log(newBanana);
// These won't work, because we changed the variable name to newApple/newBanana before assigning.
// console.log(apple);
// console.log(banana);

// Object destructuring is often most useful when used with larger and nested objects.
// EXAMPLE
let object = { animal: { name: "Fiona", species: "Hippo" } };
let {
  animal: { species }
} = object;
console.log(species);

let user = {
  userId: 1,
  favoriteAnimal: "hippo",
  fullName: {
    fname: "Rose",
    mname: "DeWitt",
    lname: "Bukater",
  }
};

// EXAMPLE Destructuring like this below can assign multiple variables to multiple values within a single object with just one line of code.
let {
  userId,
  fullName: { fname, mname, lname }
} = user;
console.log(userId, fname, mname, lname);

// EXAMPLE of doing the assignment for each individual variable on their own:
let passengerId = user["userId"];
let firstName = user["fullName"]["fname"];
let middleName = user.fullName.mname;
let lastName = user.fullName.lname;
console.log(passengerId, firstName, middleName, lastName);


// TIP: The purpose of destructuring is to make writing code easier to write and read. However, avoid destructuring values from objects more than two levels deep. Destructuring can actually become harder to read when used with super-nest objects.
// EXAMPLE
let bootcamp = {
  name: "App Academy",
  color: "red",
  instructor: {
    fullName: {
      aafname: "Victoria",
      aalname: "Campbell",
    },
    location: "San Francisco",
  }
}

// Hard to follow:
let {
  instructor: {
    fullName: { aafname: vname, aalname: cname }
  }
} = bootcamp;
console.log(vname, cname);

// Easier to read:
let { aafname, aalname } = bootcamp.instructor.fullName;
console.log(aafname, aalname);


// **********************************
// Destructuring and the rest pattern
// In the last subject, the rest parameter syntax could prefix a function's last parameter with ... to capture all the "rest" of the arguments into an array.
// EXAMPLE
function logArgument(firstArgument, ...restOfArguments) {
  console.log(firstArgument);
  console.log(restOfArguments);
}
logArgument("apple", 15, 3, "pear", "lychee");
//    apple
//    [15, 3, "pear", "lychee"]


// The same pattern of "give me the rest of-" can be used when destructuring an array by using ... syntax.
// EXAMPLE
let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];

let [firstFood, secondFood, ...otherFoods] = foods;
console.log(firstFood); // pizza
console.log(secondFood); // ramen
console.log(otherFoods); // [ 'sushi', 'kale', 'tacos' ]

// NOTE: Even if the argument for ...otherFoods ends up being just one item, that item will still be put into an array.

// Destructuring with the rest pattern and objects
// NOTE: The rest pattern is only officially supported by JavaScript when destructuring array, though an ECMAScript proposal adds support when destructuring objects. Recent version of Chrome and Firefox support this proposed addition to JavaScript.
// EXAMPLE
let { d, f, ...restObj } = { d: 4, e: 5, f: 6, g: 7 };
console.log(d); // 4
console.log(f); // 6
console.log(restObj); // { e: 5, g: 7 };


// ************************
// Destructuring parameters
// The first main use of destructuring is to destructure things into variables.
// The other main use for destructuring is to destructure incoming parameters into a function.
// Very useful when passing objects around to different function.
// Each function can then be responsible for pulling the parameters it needs from an incoming object.

// EXAMPLE of destructuring an object in a function's parameters
let cat = { name: "Jiji", owner: "Kiki", weight: 10 };
function ownerName({ owner }) {
  console.log("This cat is owned by " + owner + "."); // This cat is owned by Kiki.
}
ownerName(cat);
// Incoming arguments to the ownerName function were deconstructured to assign the value at the key 'owner' to the parameter name of 'owner'. This syntax becomes much more valuable with nested objects.

// FINAL EXAMPLE
let bigCat = {
  name: "Byakuen",
  owner: "Ryo Sanada",
  toys: ["helmet"],
  siblings: { name: "Seiji", color: "green", toys: ["nodachi", "broadsword"] },
};

function toyFinder({ toys, siblings: {toys: siblingToys } }) {
  let allToys = toys.concat(siblingToys);
  return allToys;
}
// Observe how calling this function below is very easy with the use of the above destructured parameters.
console.log(toyFinder(bigCat)); // [ 'helmet', 'nodachi', 'broadsword' ]


// NOTE: Since the same variable cannot be declared twice, a conflictg occurs since the top-level and nested-level objects both have keys called 'toys'. This is solved by using aliased object destructuring.