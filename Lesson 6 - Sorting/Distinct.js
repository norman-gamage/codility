/**
 * Title          Distinct
 * URL            https://codility.com/programmers/task/distinct/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  if (A.length < 1) { return A.length; }

  var s = new Set(), i;

  for (i = 0; i < A.length; i++) {
    s.add(A[i]);
  }

  return s.size;
}