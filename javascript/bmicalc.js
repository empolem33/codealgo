//params take in weigh
//return bmi status
//example if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
//psusdo swhic case
function bmi(weight, height) {
  const mass = weight / height ** 2;
  return mass <= 18.5
    ? "Underweight"
    : mass <= 25
    ? "Normal"
    : mass <= 30
    ? "Overweight"
    : "Obeses";
}

console.log(bmi(80, 1.8));
