//prams take in text  and char
//return text replaced by char
//example text before = "abc"
// character   = "z"
// text after  = "zzz"
//psudo map text

function contamination(text, char) {
  // Code here ;)
  return text
    .split("")
    .map((f) => char)
    .join("");
}

console.log(contamination("abc", " "));
