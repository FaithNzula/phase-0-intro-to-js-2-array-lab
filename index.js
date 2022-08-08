var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph")
  return name;
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob")
  return name;
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
 function destructivelyRemoveFirstCat(){
  cats.shift();
 }
function appendCat(name) {
  let catsTwo = [...cats];
  catsTwo.push("Broom");
  return catsTwo;
}
function prependCat(name) {
  let catsThree = [...cats];
  catsThree.unshift("Arnold");
  return catsThree;
}
function removeFirstCat() {
  let catsFour = [...cats];
  catsFour.shift();
  return catsFour;
}
function removeLastCat() {
  let catsFive = [...cats];
  catsFive.pop();
  return catsFive;
}
  