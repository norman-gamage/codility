/**
 * Title          EquiLeader
 * URL            https://codility.com/programmers/task/equi_leader/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 03
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(A) {
  var i, K = [], V = [], W, cnt = 0,
    arrMax = function (arr) {
      return Math.max.apply(Math, arr);
    }, arrSum = function (arr) {
      return arr.reduce(function (a, b) { return a + b; });
    }

  for (i = 0; i < A.length; i++) {
    if (K.indexOf(A[i]) < 0) {
      K.push(A[i]);
      V.push(1);
    } else {
      V[K.indexOf(A[i])] += 1;
    }
  }

  W = Array(K.length).fill(0);

  for (i = 0; i < A.length; i++) {
    W[K.indexOf(A[i])] += 1;
    V[K.indexOf(A[i])] -= 1;

    if (arrMax(V) / arrSum(V) > 0.5
      && arrMax(W) / arrSum(W) > 0.5
      && V.indexOf(arrMax(V)) === W.indexOf(arrMax(W))) {
      cnt++;
    }
  }

  return cnt;
}