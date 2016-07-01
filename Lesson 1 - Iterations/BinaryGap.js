/**
 * Title          BinaryGap
 * URL            https://codility.com/programmers/task/binary_gap/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 01
 */

function solution(N) {
  var getMaxOfArray = function (numArray) {
    return Math.max.apply(null, numArray);
  }

  var arr = N.toString(2);
  arr = arr.substring(arr.indexOf(1), arr.lastIndexOf(1) + 1);

  return getMaxOfArray(arr.split(1).map(function (x) { return x.length; }));
}