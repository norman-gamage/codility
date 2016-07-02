/**
 * Title          CountTriangles
 * URL            https://codility.com/programmers/task/count_triangles/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 02
 */

function solution(A) {
  A.sort(function (a, b) { return a - b; })

  var i, j, k, len = A.length, cnt = 0;

  for (i = 0; i < len - 2; i++) {
    for (j = i + 1; j < len - 1; j++) {
      for (k = j + 1; k < len; k++) {
        if (A[i] + A[j] <= A[k]) {
          break;
        } else {
          cnt++;
        }
      }
    }
  }

  return cnt;
}