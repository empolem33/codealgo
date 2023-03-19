//params take in volume and length see if cube
//return Return true if the cuboid could have equal sides, return false otherwise.
//example 125, 5), true);
//pusdo chech length equll to voulume

var cubeChecker = function (volume, side) {
  if (side < 1 || volume < 1) return false;
  return volume == side ** 3;
};

console.log(cubeChecker(8, 2));
