# To check whether the given number is an Armstrong Number or not

## Question

A number  a  is an Armstrong Number or  number if it is equal to the sum of its own digits raised to the power of the number of digits. This definition is dependent on the base, b , used to represent the number.


Single digit numbers are trivially Armstrong Numbers.

Ex: 371 is also an Armstrong Number because
371 = 3^3 + 7^3 + 1^3


## Pseudo code for algorithm written in C++

```
 temp = number
 no_of_digits=0 
 sum = 0

 WHILE temp IS NOT 0
  temp <-  temp/10 (Integer Division)
  no_of_digits <- no_of_digits+1
   
temp = n

 WHILE temp IS NOT 0
  sum <- sum + (temp modulo 10)^no_of_digits 
  temp <- temp/10 (Integer Division)

```

## Explation for algorithm written in Python

```
def an_algo(y):
    p = str(y)
    b = 0
    for i in range(len(p)):
        b = b + int(p[i])**3
    if p == str(b):
        print(p," is an armstrong number \n")
        return
    else:
        print(p," is not an armstrong number \n")
        return
```
The function takes the user input number as the argument as "y" which undergoes the formula of in the "for loop" an armstrong number and saved in "b". If "y = b" then the user input is an armstrong number.

## Explanation for algorithm written in golang

```
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
```
The function above takes input  `i`  (passing through objects), and creates a temporary variable for computation and then executes the algorithm.

Using `strconv`,  number of digits is extracted and using for loop, we are adding the indivisual numbers to power raised to the number of digits in the original number.

Finally it compares the computed value with  `i`  and returns the boolean(0 or 1) value which in turn used by if statement and executes the final results to user.


