//params takein water load clothes to be washed
//return howMuchWater is used 'Too much clothes','''Not enough clothes','');
//example 'Too much clothes','');  howMuchWater(10,10,2), 'Not enough clothes','');   howMuchWater(10,11,20), 23.58,'');

function howMuchWater(water, load, clothes) {
  // Insert your brilliant code here
  const f = load * 2;
  if (clothes > load * 2) {
    return "Too much clothes";
  } else if (clothes < load) {
    return "Not enough clothes";
  }
  return Number.parseFloat((water * 1.1 ** (clothes - load)).toFixed(2));
}

console.log(howMuchWater(10, 11, 20));
