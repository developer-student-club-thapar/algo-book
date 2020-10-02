function palindromeChecker(s) {
    if (typeof (s) === 'number') {
        s = (s).toString();
    }
    let splitArray = s.split('');
    for (let i = 0, j = splitArray.length - 1; i < (splitArray.length - 1) / 2; i++, j--) {
        if (splitArray[i] !== splitArray[j]) {
            return "not a palindrome"
        }
    }
    return "palidrome"
}

console.log("palindrome checker");
const word = process.argv[2]
console.log(palindromeChecker(word));