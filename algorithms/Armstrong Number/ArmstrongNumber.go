//Program to check armstrong number

package main

import "fmt"

func main() {
	var number, tempNumber, remainder int //declaring variables for execution
	var result int = 0

	fmt.Print("Enter a number to be checked: ")
	fmt.Scan(&number)

	tempNumber = number

	//executing the logic for checking an armstrong number
	for {
		remainder = tempNumber % 10
		result += remainder * remainder * remainder
		tempNumber /= 10

		if tempNumber == 0 {
			break
		}
	}

	if result == number {
		fmt.Printf("%d is an Armstrong number.", number)
	} else {
		fmt.Printf("%d is not an armstrong number.", number)
	}
}
