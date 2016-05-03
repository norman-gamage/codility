/**
 * Title          MaxNonoverlappingSegments
 * URL            https://codility.com/programmers/task/max_nonoverlapping_segments/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 03
 */

function solution(A, B) {
  var i, j, t, cnt,
    N = A.length, 
    max = -Infinity;

  if (N < 1) { return 0; }
  if (N < 2) { return 1; }

  for (i = 0; i < N - 1; i++) {
    cnt = 1;

    for (j = i + 1, t = j - 1; j < N; j++) {
      if (A[j] > B[t]) {
        cnt++;
        t = j;
      }
    }

    max = Math.max(cnt, max);

    if (i < max) { break; }
  }

  return max;
}