/**
 * Title          FrogJmp
 * URL            https://codility.com/programmers/task/frog_jmp/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(X, Y, D) {
  var jumps = Math.floor((Y - X) / D),
    carry = (Y - X) % D;

  if (carry > 0) { jumps++; }

  return jumps;
}