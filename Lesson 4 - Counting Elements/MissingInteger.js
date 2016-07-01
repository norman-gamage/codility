/**
 * Title          MissingInteger
 * URL            https://codility.com/programmers/task/missing_integer/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 01
 * 
 * Comments       Reference: http://stackoverflow.com/questions/25002381/missing-integer-variation-on-solution-needed
 */

function solution(A) {
  var lookUpArray = Array(A.length).fill(false),
    output, i;

  for (i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] <= A.length) {
      lookUpArray[A[i] - 1] = true;
    }
  }

  output = lookUpArray.indexOf(false) + 1;

  return (output > 0) ? output : A.length + 1;
}