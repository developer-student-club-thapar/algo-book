# To check whether the given number is an Armstrong Number or not

## Question

A number  a  is an Armstrong Number or  number if it is equal to the sum of its own digits raised to the power of the number of digits. This definition is dependent on the base, b , used to represent the number.


Single digit numbers are trivially Armstrong Numbers.

Ex: 371 is also an Armstrong Number because
371 = 3^3 + 7^3 + 1^3


## Pseudo code

You can add the psuedo code all at once in here, in above section only add steps in a descriptive manner.

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


