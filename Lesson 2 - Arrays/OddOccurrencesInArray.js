/**
 * Title          OddOccurrencesInArray
 * URL            https://codility.com/programmers/task/odd_occurrences_in_array/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 01
 */

function solution(A) {
  return A.reduce(function (a, b) { return a ^ b; });
}