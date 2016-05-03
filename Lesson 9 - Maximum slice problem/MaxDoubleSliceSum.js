/**
 * Title          MaxDoubleSliceSum
 * URL            https://codility.com/programmers/task/max_double_slice_sum/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(A) {
  var n = A.length, sum = A[1], max = -Infinity, x, y, z;

  for (x = 0; x < n - 2; x++) {
    if (x > 0) { sum -= A[x - 1]; }

    for (z = x + 2; z < n; z++) {
      if (z === x + 2) { sum = A[x + 1]; }
      if (z > x + 2) { sum += A[z - 1]; }

      for (y = x + 1; y < z; y++) {
        if ((sum - A[y]) > max) {
          max = (sum - A[y]);
        }
      }
    }
  }

  return max;
}