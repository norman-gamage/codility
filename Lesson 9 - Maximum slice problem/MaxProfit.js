/**
 * Title          MaxProfit
 * URL            https://codility.com/programmers/task/max_profit/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 02
 */

function solution(A) {
  if (A.length === 0) { return 0; }

  var len = A.length - 1,
    arr = Array(len).fill(0),
    i, max = 0, max_tmp = 0;

  for (i = 0; i < len; i++) {
    arr[i] = A[i + 1] - A[i];
  }

  for (i = 0; i < len; i++) {
    max_tmp += arr[i];
    if (max_tmp < 0) { max_tmp = 0; }
    else if (max_tmp > max) { max = max_tmp; }
  }

  return max;
}