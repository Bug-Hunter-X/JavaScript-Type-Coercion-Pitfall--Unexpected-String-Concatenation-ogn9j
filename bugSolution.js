function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3

function bar(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return "Invalid input types";
  }
}
console.log(bar(1,2)); //Output:3
console.log(bar(1,'2')); //Output: Invalid input types