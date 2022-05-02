// Setup
function abTest(a, b) {
  // Only change code below this line
  let result;
  if (a < 0 || b < 0) {
    return result;
  } else {
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  // Only change code above this line
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));
console.log(abTest(2, -2));
console.log(abTest(2, 8));
console.log(abTest(3, 3));
console.log(abTest(0, 0));
