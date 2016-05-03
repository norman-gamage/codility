/**
 * Title          FrogRiverOne
 * URL            https://codility.com/programmers/task/frog_river_one/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(X, A) {
  var track = [], i, cnt = 0;

  for (i = 0; i < A.length; i++) {
    if (typeof track[A[i]] === "undefined") {
      track[A[i]] = true;
      cnt++;
    }

    if (cnt === X) {
      return i;
    }
  }

  return -1;
}