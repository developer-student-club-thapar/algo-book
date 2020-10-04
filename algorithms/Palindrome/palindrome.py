# Python Program to Check Palindrome Number

# Reading Number and Converting to Integer
number = int(input('Enter Number: '))
copy = number

# Set Reverse variable to 0
reverse = 0

# Finding Reverse
while number != 0:
    remainder = number%10
    reverse = reverse *10 + remainder
    number = number//10

# Checking for Palindrome
if copy == reverse:
    print('%d is PALINDROME' %(copy))
else:
    print('%d is NOT PALINDROME' %(copy))
