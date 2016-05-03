/**
 * Title          Dominator
 * URL            https://codility.com/programmers/task/dominator/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  var n = A.length, i, lookup = new Map(),
    max = -Infinity, maxVal = -1;

  for (i = 0; i < n; i++) {
    if (typeof lookup.get(A[i]) === "undefined") {
      lookup.set(A[i], 1);
    } else {
      lookup.set(A[i], lookup.get(A[i]) + 1);
    }
  }

  lookup.forEach(function (v, k, m) {
    if (v > max) {
      max = v;

      if (max > n / 2) { maxVal = k; }
    }
  });

  return A.indexOf(maxVal);
}