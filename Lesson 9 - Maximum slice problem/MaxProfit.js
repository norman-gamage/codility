/**
 * Title          MaxProfit
 * URL            https://codility.com/programmers/task/max_profit/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(A) {
  // Initialisations
  var n = A.length, max = -Infinity, maxProfit = 0, i, t;

  // Read input
  for (i = 0; i < n - 1; i++) {
    // Current price
    t = A.shift();

    // Find max price only at, 
    //    i. start 
    //   ii. current price is max
    if (i === 0 || t === max) {
      max = Math.max.apply(Math, A);
    }

    // Max profit
    if (max - t > maxProfit) {
      maxProfit = max - t;
    }
  }

  // Output
  return maxProfit;
}