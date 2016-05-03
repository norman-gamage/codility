/**
 * Title          CyclicRotation
 * URL            https://codility.com/programmers/task/cyclic_rotation/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A, K) {
  if (A.length === 0) { return []; }

  var i;
  for (i = 0; i < K; i++) {
    A.unshift(A.pop());
  }

  return A;
} 