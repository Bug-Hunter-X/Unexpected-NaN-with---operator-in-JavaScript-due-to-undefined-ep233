function foo(a, b) {
  // Check for undefined and handle it
  a = (typeof a === 'undefined') ? 0 : a; // or some default value
  //Check for null and handle it
  a = (a === null) ? 0 : a; // or some default value

  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5));    // 5
console.log(foo(void 0, 5)); // 5