const PI = 3.14;
const add = (a, b) => {
  return a + b;
};
const mul = (a, b) => {
  return a * b;
};
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
export default PI;
// export { add };
// export { mul };

export { add, mul, factorial };
