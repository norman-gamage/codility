/**
 * Title          PassingCars
 * URL            https://codility.com/programmers/task/passing_cars/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(A) {
  if (A.length === 0) { return 0; }

  var ones = A.reduce(function (a, b) { return a + b }),
    zeros = A.length - ones,
    cnt = 0, i;

  for (i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      cnt += ones;
      zeros -= 1;
    } else {
      ones -= 1;
    }
  }

  return cnt;
}