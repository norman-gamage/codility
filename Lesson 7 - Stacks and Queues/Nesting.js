/**
 * Title          Nesting
 * URL            https://codility.com/programmers/task/nesting/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(S) {
  var n = S.length, i, stack = [];

  for (i = 0; i < n; i++) {
    if (S[i] === '(') {
      stack.push('(');
    } else {
      if (stack.pop() !== '(') { return 0; }
    }
  }

  return (stack.length === 0) ? 1 : 0;
}