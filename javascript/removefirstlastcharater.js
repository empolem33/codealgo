// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
//?parametors take string
//*return take string and remove first and last char
//example london => ondo
//!Pseudo: take string and return slice remove first,last

function removeChar(str) {
  //You got this!
  return str.split("").slice(1, str.length - 1);
}

console.log(removeChar("eloquent"));
