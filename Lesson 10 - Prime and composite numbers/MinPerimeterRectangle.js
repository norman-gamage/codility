/**
 * Title          MinPerimeterRectangle
 * URL            https://codility.com/programmers/task/min_perimeter_rectangle/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 02
 */

function solution(N) {
  var i, p, min = Infinity;

  for (i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      p = 2 * (i + (N / i));
      min = Math.min(p, min);
    }
  }

  return min;
}