// Welcome to Decode, your mission is to decode the full message. Good luck

// EX 01 -  Use a loop to remove the 'X' and use console.log to reveal the message 
const hiddenMessage = ["X", "X", "X", "X", "W", "X", "E",  "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", " ","X", "X", "X", "X", "X", "X", "X", "X", "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ",", "X", " ", "X"]

// Init value to get messageCode
let messageCode = '';

// Your code goes here
hiddenMessage.forEach(code => {
  // Condition to get value different to 'X'
  code !== "X" ? messageCode += code : null
});

console.log('Exercice 1 decoded : ', messageCode);
messageCode = '';

// EX 02 - Remove the 'X' and the even numbers
// Hint: As this is a string you should find a way to convert into an array.

const hiddenCode = "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX"

// Your code goes here
// Convert string to array and remove X
const convertHiddenCode = hiddenCode.split("X")
convertHiddenCode.forEach(code => {
    // Condition to get value different to ''
  code !== '' ? code %2 ? messageCode += code : null : null
});
console.log('Exercice 2 decoded : ',messageCode);
