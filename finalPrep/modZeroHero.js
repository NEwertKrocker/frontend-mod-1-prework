// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "The Magician";
var specialAbility = "Incredible Magic";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Now you don't see me -- now you DO! It is I, " + heroName + "!";
var catchphrase = `Now, face the wrath of my ${specialAbility}`;

// Declare two variables - power AND energy - set to integers

var power = 100;
var energy = 100;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power*500;
var fullEnergy = (energy + 150);

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["The Logician", "Marvelous Edna", "The Scientist"];
var sidekicks = ["The Illusionist", "Marina", "The Kiwi"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Gruesome Gus");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift(); //RIP The Illusionist

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(saveTheDay);
  }
}

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
//assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

/* All of the above seem to work! */

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Goggalor",
  smell: "Lilac",
  weight: 2000,
  citiesDestroyed: ["Peoria", "Toledo", "Sticksville"],
  luckyNumbers: [23, 45, 51, 99],
  address: {
    number: 155,
    street: "Fairfield Ave.",
    state: "OH",
    zip: 44047
  }
}


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(morePower) {
    this.powerLevel = this.powerLevel + morePower;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

var coderman = new SuperHero("Coderman", "The Power to Code", 27);
var exampleMan = new SuperHero("Example Man", "Serving as a Good Example", 22);

// Reflection
// What parts were most difficult about this exercise?

// Knowing that I had an (admittedly informal) time limit increased my stress level a little
// bit and made it hard to be as careful and methodical as I usually like to be. (However,
// I think I did okay in the end? I finished in about 26 minutes.) I realized as I made reference
// to my notes that I wished I had written up proper syntax examples for all my definitions.
// I definitely had to quickly Google which was push and which was pop, for example. It's also a
// little hard to trust to your code without constantly printing everything to the console
// to double-check your work like most of the other Mod 1 pre-work exercises had us do. (And I
// wanted to figure out what I should write to check myself, but that time limit!)

// What parts felt most comfortable to you?

// When I did need to Google syntax, I always felt like I knew what I was searching for
// and how the data types operate. I feel comfortable with how everything we've studied so
// far fits together -- and, in the end, I did manage it under the time limit.

// What skills do you need to continue to practice before starting Mod 1?

// I think I just need rote practice to create muscle memory so that the syntax feels
// more natural to me and I don't feel the need to have referents always on hand.
