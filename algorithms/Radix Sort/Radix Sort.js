function countSort(A, n, Exp) {
    var count = Array.apply(null, Array(10)).map(function () { return 0; });

    for (var i = 0; i < n; i++) {
        count[Math.floor(A[i] / Exp) % 10]++;
    }
    for (var i = 1; i < 10; i++) {
        count[i] = count[i] + count[i - 1];
    }
    var output = Array.apply(null, Array(n)).map(function () { return 0; });

    for (var i = n - 1; i >= 0; i--) {
        output[count[Math.floor(A[i] / Exp) % 10] - 1] = A[i];
        count[Math.floor(A[i] / Exp) % 10]--;
    }

    for (var i = 0; i < n; i++) {
        A[i] = output[i];
    }
}
function RadixSort(A, n) {
    var Max = Math.max.apply(A[0], A);
    var Exp = 1;
    while (Math.floor(Max / Exp) > 0) {
        countSort(A, n, Exp);
        Exp = Exp * 10;
    }
}
var test = [130, 12, 85, 102, 25, 20, 2];
var n = test.length;
RadixSort(test, n);
console.log(test);
