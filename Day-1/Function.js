/*
 * Simple Function to get factorial value
 */

const factorial = (n) => {
  if (n < 2) { 
    return 1; // if n value less than 1, it's just return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));
