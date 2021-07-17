## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

Not too terribly different, as I naturally tend to work in ~30 minute blocks. There were several times in which I needed just three more minutes -- or finished a few minutes early -- and it felt a little silly to be trying to force myself into ~25 minute blocks. The two ways in which it was very helpful were in setting my intention ("It's only 25 minutes," I can tell myself, "I need to focus if I'm going to be productive in that time") and in bringing me back to my work after a break. (5 minutes is a little short for me, but 7 or 10 works well enough, and it prevents me from slacking off for 20 or 30 more minutes before I do my next chunk of work.)

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

A lot of the assignments felt like they fell pretty naturally into 30-minute time-slots. I'd sit down, read about the new terms and syntax, and then work my way through the exercise. It also helped me remember to set aside time for going over my vocabulary, making sure I answered these reflection questions, and uploaded and saved my work.

1. What is an Object, and how is it different from an Array in Javascript?

An Array is a list of data points, but there's no way to attach further data to each entry in the list. An Object, on the other hand, can be assigned key-value pairs, allowing you to store lots of information about each object (or instance of an object), letting you track a much more complex set of data!

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    If all you need is the names, an Array will sort you fine. However, if you want to include any other data, or even break the names down into `givenName` and `surName`, for instance, you'd want an Object.
  * List of states and their capitals
    An Object, because you need to link pairs of data points to each other.
  * List of things to pack for vacation
    An Array would probably do you fine here.
  * Names of all the Instagram accounts I follow
    An Array would suffice, unless you wanted to link data like `accountName` and `displayName`.
  * List of student names and their cohort
    You would definitely need an Object in order to tie these data points together.
  * Ingredients and amount of each ingredient to bake a cake
    Again, you need an Object here, so that the data points can link with key-value pairs.
  * All my favorite restaurants
    Probably all you need is an Array.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

In the Washington Post app, it's possible that they store my User ID as an object, with key values detailing my ID, the associated email, my subscription status, what types of stories I tend to click on, which crossword puzzles I've solved, etc.

1. What questions do you still have about classes and/or Objects?

I presume that Classes can't be "reassigned" like variables can? I ran into a situation while working through classProperties.js in which I needed to use different names for each of my Dog classes, because the console kept throwing up errors. Not that I can think of an instance where you'd want to do that outside of an exercise like this one -- I'm just curious. 
