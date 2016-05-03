/**
 * Title          Brackets
 * URL            https://codility.com/programmers/task/brackets/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(S) {
  if (S.length < 1) { return 1; }
  if (S.length < 2) { return 0; }
  var i, stack = [], t;

  for (i = 0; i < S.length; i++) {
    if (S[i] === '(' || S[i] === '{' || S[i] === '[') {
      stack.push(S[i]);
    }

    else if (S[i] === ')') {
      t = stack.pop()
      if (t !== '(') { return 0; }
    }

    else if (S[i] === ']') {
      t = stack.pop()
      if (t !== '[') { return 0; }
    }

    else if (S[i] === '}') {
      t = stack.pop()
      if (t !== '{') { return 0; }
    }
  }

  return (stack.length === 0) ? 1 : 0;
}