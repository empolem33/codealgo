//params take string state
//return next state
//example green => yellow=> red
//sudo ternary switch

function updateLight(current) {
  //your code here!
  //   switch (current) {
  //     case "green":
  //       return "yellow";
  //     case "yellow":
  //       return "red";
  //     case "red":
  //       return "green";
  //   }
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

console.log(updateLight("blue"));
