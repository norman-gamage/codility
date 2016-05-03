/**
 * Title          OddOccurrencesInArray
 * URL            https://codility.com/programmers/task/odd_occurrences_in_array/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  var i, c;
  for (i = 0; i < A.length; i++) {
    c ^= A[i];
  }
  return c
}