function validateHello(greetings) {
  const bank = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  let x = greetings
    .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase()
    .split(" ");

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < bank.length; j++) {
      if (x[i] == bank[j]) {
        return true;
      }
    }
  }
  return false;
}
