# python program to check if number is palindrome

# function that checks if number is palindrome
# ------- Input -----------
# number: number to be checked
# ------- Output -----------
#  True: number is a palindrome
#  False: number is a palindrome
def palindrome(number): 
    
    # buffer to store the originalNumber
    originalNumber = number

    # computes the reverse of the number and stores it in reversedNumber
    reversedNumber = 0
    while number>0:
        # calculates the last digit everytime
        digit = number%10
        # reversedNumber gets amplified by 10 & digit gets append to the one's position
        reversedNumber *= 10
        reversedNumber += digit
        # interger division by 10 is applied to remove the added digit
        number //= 10
    
    # checks if the numbers are equal.
    if originalNumber == reversedNumber:
        return True
    else:
        return False

# driver code to test above 
if __name__ == "__main__":
    number = 12344322
    answer = palindrome(number)
    print(answer)


