//parametors take in two words with one space in between them.
//return two capital letters with a dot separating them.
//example Sam Harris => S.H
//psudo take letters and capp
function abbrevName(name) {
  const s = name.split(" ")[0].slice(0, 1);
  const x = name.split(" ")[1].slice(0, 1);
  return `${s.toUpperCase()}.${x.toUpperCase()}`;
}

console.log(abbrevName("sam harris"));
