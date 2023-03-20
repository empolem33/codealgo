//parametors take  a year in
// return the century it is in.
//example 1705 --> 18
//1900 --> 19
//1601 --> 17
//2000 --> 20
//pesudo divide by 100

function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

console.log(century(1601));
console.log(century(1900));
