/**
 * Title          CountFactors
 * URL            https://codility.com/programmers/task/count_factors/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(N) {
  var cnt = 1, i;

  for (i = 1; i <= Math.floor(N / 2); i++) {
    if (N % i === 0) { cnt++; }
  }

  return cnt;
}