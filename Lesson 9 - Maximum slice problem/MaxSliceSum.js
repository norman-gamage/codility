/**
 * Title          MaxSliceSum
 * URL            https://codility.com/programmers/task/max_slice_sum/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(A) {
  var n = A.length, size, sum, max = -Infinity, i;

  if (n === 1) { return A[0]; }

  var add = function (arr) {
    return arr.reduce(function (a, b) { return a + b; });
  }

  for (size = 1; size <= n; size++) {
    left = 0;
    right = size;
    sum = add(A.slice(0, size));
    max = Math.max(sum, max);

    while (right < n) {
      sum += A[right++];
      sum -= A[left++];
      max = Math.max(sum, max);
    }
  }
  return max;
}