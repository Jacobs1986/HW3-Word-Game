/*
This is going to be a word game where the user can guess a random word from an array list.

I need to create a list and a number generator that would randomly pick a word from the list.
*/

/*
//Test word
let word = "Programming";

// let's use .length to find the length of the string.
console.log(`The word is ${word} and the length is ${word.length}.`);
*/

//Let's create the array that I will need for this game.
let wordChoice = [
    "Programmer",
    "Bootcamp",
    "Cookie",
    "Canine"
];

//I am going to need a random number generator for this game for numbers between 0 - 4.
let wordNumber = Math.floor(Math.random() * 4);

// So far the code is working. Now I need to capture the key events when the player uses the keyboard.
//I'm going to try adding the loop into the onkeyup function
document.onkeyup = function(event) {
    letter = event.key;
    console.log(`You pressed the letter: ${letter}`);
    test = "canine"
    for (let i = 0; i < test.length; i++) {
        let letterSearch = test.indexOf(letter, i);
        if (letterSearch == -1) {
            return console.log("The letter was not found.")
            ;
        } else {
            console.log(`The letter was found at ${letterSearch}.`);
        }
    }
}

/*
test = "Canine".toLowerCase();
for (let i = 0; i < test.length; i++) {
    let letterSearch = test.indexOf("c", i);
    console.log(letterSearch);
}
*/