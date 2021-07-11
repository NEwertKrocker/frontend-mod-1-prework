/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function sayHello() {
  console.log("Oh, hello!");
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log(name);
}

greetMe("Taran");
greetMe("Eilonwy");
greetMe("Gurgi");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function addUp(num1, num2) {
  console.log(num1 + num2);
}

addUp(3, 4);
addUp(42, 15);
addUp(2308434, 2349083);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function killMrBoddy(killer, location, weapon) {
  console.log("It was " + killer + " in the " + location + " with the " + weapon + "!");
}

killMrBoddy("Professor Plum", "Billiard Room", "Lead Pipe");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

Well, I wanted to give the function a name that was rather short, and yet still specific.
Since I was going for a "Clue" reference, the name "killMrBoddy" seemed pithy and to-the-point.
Also, specific enough that probably it wouldn't step on the toes of any other variables or
functions that my Clue code might need. (Ideally, Mr. Boddy is only going to be killed once
per Clue game.) As for the parameters, well... those seem pretty self-explanatory.


*/
