/**
 * Title          AbsDistinct
 * URL            https://codility.com/programmers/task/abs_distinct/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(A) {
  var absValue = function (x) { return Math.abs(x); }

  var s = new Set(A.map(absValue));

  return s.size;
}