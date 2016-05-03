/**
 * Title          CountDiv
 * URL            https://codility.com/programmers/task/count_div/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A, B, K) {
  var cnt = (K > B - A) ? 0 : Math.floor(B / K) - Math.floor(A / K);

  if (A % K === 0) {
    cnt += 1;
  }

  return cnt;
}