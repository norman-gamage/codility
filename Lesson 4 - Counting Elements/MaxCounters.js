/**
 * Title          MaxCounters
 * URL            https://codility.com/programmers/task/max_counters/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(N, A) {
  var arr = Array(N).fill(0), i, max = 0;

  for (i = 0; i < A.length; i++) {
    if (A[i] - 1 < N) {
      arr[A[i] - 1] += 1;
      max = (arr[A[i] - 1] > max) ? arr[A[i] - 1] : max;
    }

    else if (A[i] - 1 >= N) {
      arr = Array(N).fill(max);
    }
  }

  return arr;
}