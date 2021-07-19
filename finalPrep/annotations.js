// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { //declares the function and sets its expected inputs
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`; // declares a variable to serve as the greeting, including the bear's name
  var demographics = [name, age]; // declares a variable array including name and age
  var powerSaying = "Did you know that I can " + specialPower + " ?"; // declares a variable announcing the bear's special power
  var builtBear = { //declares a variable, an object, that carries data about the completed bear
    basicInfo: demographics, // a key-value pair containing the array with demographic info
    clothes: clothes, // a key-value pair holding the clothes
    exterior: fur, // a key-value pair denoting the type of exterior (a variable, so can perhaps expand from fur to chitin, scales, etc.)
    cost: 49.99, // a key-value pair holding the cost as an integer
    sayings: [greeting, powerSaying, "Goodnight my friend!"], // an array containing potential sayings the bear has
    isCuddly: true, // probably true for most bears, but good to future-proof in case of "Annihilation" tie-in model
  };

  return builtBear // details for us the bear we have built, along with all of its properties
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares'); // builds a bear named "Fluffy" meant to give a child nightmares
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); // builds a bear, "Sleepy," who is in his pajamas



//FizzBuzz
function fizzBuzz(num1, num2, range) { // declares a function which allows you to input two numbers and a range and finds their multiples and common multiples
  for (var i = 0; i <= range; i++) { // for loops through the range
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz'); // logs "fizzbuzz" if i = a common multiple of num1 and num2 (or 0)
    } else if (i % num1 === 0) {
      console.log('fizz'); // logs 'fizz' if i = a multiple of num1
    } else if (i % num2 === 0) {
      console.log('buzz'); // logs 'buzz' if i = a multiple of num2
    } else {
      console.log(i); // otherwise just logs the number
    }
  }
}

fizzBuzz(3, 5, 100); // this returns the multiples of 3 and 5 (and their common multiples) up through 100
fizzbuzz(5, 8, 400); // note this line won't run, because though we've declared 'fizzBuzz', we haven't declared 'fizzbuzz'

/* I realize that this example is probably much over-annotated from what one might expect to do in practical work, but
whoever's evaluating this is more interested in me demonstrating proficiency than in concision. */
