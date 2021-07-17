/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

// Found the following as a way to get a timestamp, but can't figure out how to format it
// in such a way that a normal human would want to read it.
// var timestamp = Math.round(Date.now()/1000);
// console.log(Date.now());
// console.log(timestamp);

class Tweet {
  constructor(author, content, timeStamp) {
    this.author = author,
    this.content = content,
    this.timeStamp = timeStamp,
    this.numberOfLikes = 0,
    this.numberOfComments = 0,
    this.comments = []
  }
  addLike() {
    this.numberOfLikes++
  }
  addComment(newComment) {
    this.numberOfComments++;
    if (this.numberOfComments === 1) {
    this.comments = (this.comments + newComment)
    } else {
    this.comments = (this.comments + `
      ` + newComment);
      // I'm having a devil of a time trying to find a way to put a line break in here, but I don't want
      // multiple comments to run together in a single line. Any advice would be appreciated!
  }
  }
};

var tweet1 = new Tweet("Nate E-K", "Hey, did you hear about Woolly Mammoths? huge if true, lol", "1:58PM 7/17/2021");
console.log(tweet1);

var tweet2 = new Tweet("Nate E-K", "any mammoths on here", "1:59PM 7/17/2021");
console.log(tweet2);

var tweet3 = new Tweet("Pleistocene Steve", "@Nate E-K yo what up", "2:00PM 7/17/2021");
console.log(tweet3);

var tweet4 = new Tweet("Nate E-K", "@Pleistocene Steve hey bro, how was the ice age", "2:01PM 7/17/2021");
console.log(tweet4)

// A note, here: I'm positive that there's a way to dynamically generate an appropriate timestamp
// in JavaScript, but I did a fair bit of Googling and feel like it might still be a bit over my head.

tweet2.addLike();
tweet2.addComment("lovin' this inter-era communication");

tweet2.addComment("yeah man what's up in the anthropocene");

console.log(tweet2);
