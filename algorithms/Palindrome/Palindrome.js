let str = window.prompt("Enter a positive integer: ")
let reversed = str.split("").reverse().join("")


if (reversed === str) {
    alert("The Number entered was a Palindrome")
} else { 
    alert("The Number entered was NOT a Palindrome")
}
