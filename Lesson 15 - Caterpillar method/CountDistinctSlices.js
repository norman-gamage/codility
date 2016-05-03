/**
 * Title          CountDistinctSlices
 * URL            https://codility.com/programmers/task/count_distinct_slices/
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 02
 */

function solution(M, A) {
  var s, i, j, len1, len2, cnt = 0;

  for (i = 0; i < A.length; i++) {
    s = new Set();
    s.add(A[i]);

    for (j = i; j < A.length; j++) {
      len1 = s.size;
      s.add(A[j]);
      len2 = s.size;

      if (len1 === len2 && i !== j) { break; }
      
      cnt++;
    }
  }
  
  return cnt;
}