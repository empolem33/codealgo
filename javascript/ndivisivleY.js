//params take a num and divide by x ,y
//return check if divisibl
//example n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
//psudo divide and return

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
