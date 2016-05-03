/**
 * Title          TieRopes
 * URL            https://codility.com/programmers/task/tie_ropes/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(K, A) {
  var i, sum = 0, cnt = 0;

  for (i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum >= K) {
      cnt++;
      sum = 0;
    }
  }

  return cnt;
}