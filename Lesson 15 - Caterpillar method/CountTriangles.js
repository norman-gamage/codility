/**
 * Title          CountTriangles
 * URL            https://codility.com/programmers/task/count_triangles/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(A) {
  var p, q, r, P, Q, R, n = A.length, cnt = 0;

  if (n < 3) { return 0; }

  for (r = 2; r < n; r++) {
    R = A[r];
    for (q = 1; q < r; q++) {
      Q = A[q];
      for (p = 0; p < q; p++) {
        P = A[p];

        if (P + Q > R && Q + R > P && R + P > Q) {
          cnt++;
        }
      }
    }
  }

  return cnt;
}