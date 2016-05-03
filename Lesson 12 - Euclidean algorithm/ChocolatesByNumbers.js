/**
 * Title          ChocolatesByNumbers
 * URL            https://codility.com/programmers/task/chocolates_by_numbers/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 * 
 * Comments       This solution fails in certain performance tests
 */

function solution(N, M) {
  var arr = Array(N).fill(true), i = 0, cnt = 0;

  while (arr[i] === true) {
    arr[i] = false;
    i += M;
    i %= N;
    cnt++;
  }

  return cnt;
}