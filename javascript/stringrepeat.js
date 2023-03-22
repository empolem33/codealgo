//*parametors Write a function that accepts an integer n and a string s as parameters,
//return a string of s repeated exactly n times.
//*example 6, "I"     -> "IIIIII" 5, "Hello" -> "HelloHelloHelloHelloHello"
//pseudo loop n times and add string return total

function repeatStr(n, s) {
  let text = "";
  for (let i = 0; i < n; i++) {
    text += s;
  }
  return text;
}

console.log(repeatStr(5, "Hello"));
