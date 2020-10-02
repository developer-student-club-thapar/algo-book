let number = prompt("Enter any number : ");  // take an input
let n = number.length;
let sum = 0;

let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** n;
    temp = parseInt(temp / 10);   // removing last digit from the number
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}