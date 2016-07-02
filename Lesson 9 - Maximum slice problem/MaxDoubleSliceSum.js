/**
 * Title          MaxDoubleSliceSum
 * URL            https://codility.com/programmers/task/max_double_slice_sum/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 02
 */

function solution(A) {
  var N = A.length,
    K1 = Array(N).fill(0), K2 = Array(N).fill(0),
    i, max = 0;

  for (i = 1; i < N - 1; i++) {
    K1[i] = Math.max(K1[i - 1] + A[i], 0);
  }

  for (i = N - 2; i > 0; i--) {
    K2[i] = Math.max(K2[i + 1] + A[i], 0);
  }

  for (i = 1; i < N - 1; i++) {
    max = Math.max(max, K1[i - 1] + K2[i + 1]);
  }

  return max;
}