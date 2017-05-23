'use strict';

// Approx. O(2^N) TIME --- Closer to O(1.6^N)
// O(N) SPACE

// Not Optimized
function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("NOT OPTIMIZED:", fibonacci(30));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(1) SPACE

// Bottom Up
function fibonacciBU(num) {
  if (!num) return 0;
  let a = 0, b = 1;

  for (let i = 2; i < num; i++) {
    const c = a + b;
    a = b;
    b = c;
  }

  return a + b;
}
console.log("BOTTOM UP:", fibonacciBU(70));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// O(N) TIME --- O(N) SPACE

// Top Down
function fibonacciTD(num, memo = []) {
  if (num <= 1) return num;

  if (!memo[num]) {
    memo[num] = fibonacciTD(num - 1, memo) + fibonacciTD(num - 2, memo);
  }

  return memo[num];
}
console.log("TOP DOWN:", fibonacciTD(70));

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// TAIL RECURSION
function fib(n, sum = 0, prev = 1) {
  if (n <= 1) return sum + prev;
  return fib(n - 1, prev + sum, sum);
}
console.log("TAIL RECURSION:", fib(99999999));
