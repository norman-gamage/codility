/**
 * Title          CountSemiprimes
 * URL            https://codility.com/programmers/lessons/9/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 03
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(N, P, Q) {
  var isSemiPrime = function (c) {
    var a = 2, b = 0;

    while (b < 3 && c != 1) {
      if ((c % a) === 0) { c /= a; b++; }
      else { a++; }
    }

    return b == 2;
  };

  var semiPrimeCount = function (start, end) {
    var cnt = 0;

    for (var x = start; x <= end; x++) {
      if (isSemiPrime(x)) { cnt++; }
    }

    return cnt;
  }

  var i, output = [];
  for (i = 0; i < P.length; i++) {
    output.push(semiPrimeCount(P[i], Q[i]));
  }

  return output;
}