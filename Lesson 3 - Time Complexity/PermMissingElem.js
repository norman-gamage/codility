/**
 * Title          PermMissingElem
 * URL            https://codility.com/programmers/task/perm_missing_elem/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  var i, d = 0;

  for (i = 1; i < A.length + 2; i++) {
    d ^= i;
    d ^= A[i - 1];
  }

  return d;
}