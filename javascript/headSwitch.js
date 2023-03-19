//prametors take an array in
//return sorted array
function fixTheMeerkat(arr) {
  //your code here
  const x = arr.shift();
  const y = arr.pop();
  return [y, ...arr, x];
}

console.log(fixTheMeerkat(["tail", "body", "head"]));
