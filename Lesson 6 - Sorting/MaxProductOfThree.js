/**
 * Title          MaxProductOfThree
 * URL            https://codility.com/programmers/task/max_product_of_three/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  A.sort(function (a, b) { return a - b; });

  var L = A.slice(0, 3),
    R = A.slice(A.length - 3, A.length);

  return Math.max(R[0] * R[1] * R[2], R[2] * L[0] * L[1]);
}