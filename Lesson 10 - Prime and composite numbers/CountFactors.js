/**
 * Title          CountFactors
 * URL            https://codility.com/programmers/task/count_factors/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 02
 */

function solution(N) {
  var cnt = 0, i;

  for (i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      cnt += (i * i === N) ? 1 : 2;
    }
  }

  return cnt;
}