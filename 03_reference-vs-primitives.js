
// *****************************
// Reference vs. Primitive Types
// *****************************

// **********************
// Primitives vs. Objects
// Primitive types are immutable. Reference types are immutable.

// Five Primitive Types:
//    Boolean - true, false
//    Null - intentional absence of value
//    Undefined - typical default return value
//    Number - integers and floats
//    String - characters

// One Reference Type:
//    Object (=> includes: )
//      Arrays
//      Functions


// ************
// Immutability

// EXAMPLE Assigning primitive types, then variables to other variables:
let num1 =5;
let num2 = num1;
num1 = num1 + 3;
console.log(num1) // 8
console.log(num2) // 5

//    1. num1 is assigned the primitive number value 5. JavaScript recognizes that already all by itself. So when assigning num1 to this primitive value, the assignment is actually just pointing to that value that's already existing as a part of the computer's memory.
//    2. num2 is assigned the *value* of num1. This is essentially *copying* the value , then pointing to that copy. The 5 itself cannot be changed in the computer memory. A 5 is a 5, it cannot be 'changed' so that 5 in the computer and JavaScript actually means 6 now. Instead, the variables are just reassigned to point to where the desired primitive value is.
//    3. Thus, num2's value is unaffected despite the num1, which num2 copied from, being changed with the addition of += 3.

// EXAMPLE 2 with booleans
let first = true;
let second = first;
first = false;
console.log(first); // false
console.log(second); // true


// **********
// Mutability
// Reference values are mutable, that is, changeable. Thus, rather than reassigning to a completely new value, the original value can be 'changed' itself. Due to this difference in nature, if two variables are both assigned to the same mutable value, when the value is changed, the variables both change as well. Thus, a copy must be made if you wish to have two separate versions of something that will be different from each other with changes.

// EXAMPLE
let cat1 = { name: "Luna", breed: "siamese", };
// I didn't make a copy; I copied the 'reference' to the same value.
let cat2 = cat1;

// They're the same.
console.log(cat1);
console.log(cat2);

cat1.name = "Starlight";

// They both changed after I changed one of them:
console.log(cat1);
console.log(cat2);

// This is why you need to make a copy of arrays with .slice() to change only one.
// TODO But how to copy objects? Hm.
let cat3 = {name: "Ray", color: "yellow", };
// let cat4 = ???