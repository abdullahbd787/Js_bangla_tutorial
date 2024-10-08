function first(input) {
  console.log(input);
}

function second(n) {
  return n * 5;
}
function third(a, b) {
  return a + b;
}
first(second(third(3, 5)));
