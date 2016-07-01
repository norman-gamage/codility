/**
 * Title          Triangle
 * URL            https://codility.com/programmers/task/triangle/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 01
 */

function solution(A) {
  A.sort(function (a, b) { return a - b; });

  var i = 0, len = A.length - 2;

  for (i = 0; i < len; i++) {
    if (A[i] >= 0 && A[i] + A[i + 1] > A[i + 2]) {
      return 1;
    }
  }
  return 0;
}