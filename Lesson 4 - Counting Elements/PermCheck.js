/**
 * Title          PermCheck
 * URL            https://codility.com/programmers/task/perm_check/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  var i, s = 0;
  for (i = 1; i < A.length + 1; i++) {
    s ^= i;
    s ^= A[i - 1];
  }

  return (s === 0) ? 1 : 0;
}