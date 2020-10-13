package main

import (
	"fmt"
	"strconv"
)

func main() {
	i := 0
	fmt.Println("Enter the number you want to check: ")
	fmt.Scanf("%d", &i)
	if isArmstrong(i) {
		fmt.Printf("%d is an armstrong number\n", i)
	} else {
		fmt.Println("It's not an armstrong number")
	}
}

// function to check the armstrong number
func isArmstrong(number int) bool {
	tmp := number                       // creating a temporary variable
	digits := len(strconv.Itoa(number)) //using strconv function, we can get the number of digits
	sum := 0
	div := 0
	for {
		if tmp <= 0 {
			break
		}
		div = tmp % 10
		temp := 1
		for i := 0; i < digits; i++ { // adding up to the number to the power raised to digits to form it
			temp = temp * div
		}
		sum += temp
		tmp = tmp / 10
	}
	return number == sum
}
