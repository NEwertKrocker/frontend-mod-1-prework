/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
If the player (or reader, I guess) chooses door number 1, the value doorChoice is set to 1.
These lines of code check to see whether the value of doorChoice is exactly equal to 1
(it is by default), and assigns the value "hat" to the variable "bearClothing", previously
defined as an empty string. If the player/reader/coder chooses door #2, the code in lines 14-18
would give the bear a jaunty scarf instead (by setting the value of bearClothing to "scarf".)
Interestingly, the variable "doorChoice" is a number, not a Boolean, so the player can select
any door number they like. Behind door #1 is a bear in a hat, behind an infinite number of other doors
(and negative doors) there are an unending supply of scarved bears.

2. What variable has a new value assigned to it after the first if statement executes?
The variable "bearClothing" gets reassigned.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Because the player has been offered three separate options, the if/elseif/else statement evaluates
the value of the variable bearChoice to see if it matches any of several expected inputs (1, 2, or 3).
If the player has set bearChoice to be any of those values, the conditional statement outputs the
correct ending. There is a fourth ending, as well, in which the variable bearChoice has been
set to a value neither 1, 2, nor 3, in which you befriend the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You will end up covered in snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The bear will cry because you insulted its hat. For shame.

7. What is your favorite ending?
Although the "secret" ending is delightful, I think I prefer the "snakes" ending,
because it reminds me of one of my all-time favorite videogames, a long-defunct
browser game called "Room of 1000 Snakes". You can't play it anymore, because Unity
decided to scrap their web player, but I highly recommend you devote 2 minutes to
watching this complete playthrough on YouTube: https://www.youtube.com/watch?v=bp5dRdhpkSI

If that doesn't make you cackle, well then, I'm not sure what I can do for you. 
*/
