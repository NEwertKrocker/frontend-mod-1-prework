/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {
}
var labrador = new Dog();
var mutt = new Dog();

console.log(labrador, mutt);

// Prompt 2: Snack

class Snack {
}
var doritos = new Snack();
var pringles = new Snack();

console.log(doritos, pringles);

// Prompt 3: Shirt

class Shirt {}

var tShirt = new Shirt();
var buttonUp = new Shirt();

console.log(tShirt, buttonUp);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Pup {
  constructor() {
    this.size = "large";
    this.disposition = "friendly";
    this.wetNose = true;
  }
}

var labrador = new Pup();
console.log(labrador);

// Prompt 2: Snack

class Snax {
  constructor() {
    this.type = "chips";
    this.calories = 450;
    this.price = "$1.49";
  }
}

var lays = new Snax();
console.log(lays);

// Prompt 3: Shirt

class UpperWear {
  constructor() {
    this.collared = true;
    this.buttons = 9;
    this.pattern = "paisley";
  }
}

var greenPaisley = new UpperWear();
console.log(greenPaisley);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Doggo {
  constructor(size, disposition, breed) {
    this.size = size;
    this.disposition = disposition;
    this.breed = breed;
  }
}
var labrador = new Doggo("large", "friendly", "Labrador");
var mutt = new Doggo("medium", "friendly", "indeterminate");

console.log(labrador, mutt);

// Prompt 2: Snack

class Bites {
  constructor(texture, flavor, haunted) {
    this.texture = texture;
    this.flavor = flavor;
    this.haunted = haunted;
  }
}
var doritos = new Bites("crunchy", "Cool Ranch", false);
var pringles = new Bites("crispy", "Pizza", "absolutely");

console.log(doritos, pringles);

// Prompt 3: Shirt

class Camisa {
  constructor(collared, numButtons, pattern) {
    this.collared = collared;
    this.buttons = numButtons;
    this.pattern = pattern;
  }
}

var tShirt = new Camisa(false, 0, "Clever pop culture reference");
var buttonUp = new Camisa(true, 9, "Aloha");

console.log(tShirt, buttonUp);
