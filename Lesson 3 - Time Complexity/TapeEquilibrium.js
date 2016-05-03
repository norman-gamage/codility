/**
 * Title          TapeEquilibrium
 * URL            https://codility.com/programmers/task/tape_equilibrium/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  var sum = A.reduce(function (a, b) { return a + b; }),
    left = 0, right = sum, min = Infinity,
    i, diff;

  for (i = 0; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];

    diff = Math.abs(left - right);
    min = Math.min(min, diff);
  }

  return min;
}