/**
 * Title          BinaryGap
 * URL            https://codility.com/programmers/task/binary_gap/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(N) {
  N = N.toString(2).split('').map(Number);
  var i, max = 0, cnt = 0;

  for (i = 0; i < N.length; i++) {
    if (N[i] === 1) {
      max = Math.max(cnt, max);
      cnt = 0;
    } else if (N[i] === 0) {
      cnt++;
    }
  }

  return max;
}