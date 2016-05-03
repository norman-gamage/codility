//http://stackoverflow.com/questions/25002381/missing-integer-variation-on-solution-needed

function solution(A) {
    var lookUpArray=[], i;
    
    for (i = 0; i < A.length; i++) {
        lookUpArray[i] = false;
    }
    
    for (i = 0; i < A.length; i++)
            if (A[i] > 0 && A[i] <= A.length)
                lookUpArray[A[i] - 1] = true;

    for (i = 0; i < lookUpArray.length; i++)
            if (!lookUpArray[i])
                return i + 1;

    return A.length + 1;
}