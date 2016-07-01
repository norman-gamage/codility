/**
 * Title          Distinct
 * URL            https://codility.com/programmers/task/distinct/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 Jul 01
 */

function solution(A) {
  return (new Set(A)).size;
}