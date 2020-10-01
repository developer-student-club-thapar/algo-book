function binarySearch(A, L, U, key) {
    if (A[L] > key || A[U] < key) {
        return -1;
    }
    else {
        var Mid = (L + (U - L) / 2);
        //or
        // var Mid = (var)(L + U) / 2;
        if (A[Mid] == key) {
            return Mid;
        }
        else if (A[Mid] < key) {
            L = Mid + 1;
            binarySearch(A, L, U, key);
        }
        else {
            U = Mid - 1;
            binarySearch(A, L, U, key);
        }
        return -1;
    }
}
function exponentialSearch(A, n, key) {
    if (A[0] == key) {
        return 0;
    }
    else {
        var i = 1;
        while (i < n && A[i] <= key) {
            i = i * 2;
        }
        var min;
        if (i >= n) {
            min = n - 1;
        }
        else {
            min = i;
        }
        return binarySearch(A, i / 2, min, key);
    }
}
var A = [2, 12, 20, 25, 85, 102, 130];
var n = A.length;
var pos = exponentialSearch(A, n, 25);
if (pos != -1) {
    console.log("Element found at index " + pos);
}
else {
    console.log("Element not found");
}
pos = exponentialSearch(A, n, 102);
if (pos != -1) {
    console.log("Element found at index " + pos);
}
else {
    console.log("Element not found");
}
pos = exponentialSearch(A, n, 45);
console.log(pos);
if (pos != -1) {
    console.log("Element found at index " + pos);
}
else {
    console.log("Element not found");
}
