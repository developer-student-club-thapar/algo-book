# python program to check if number is palindrome

# function that checks if number is palindrome
# ------- Input -----------
# number: number to be checked
# ------- Output -----------
#  True: number is a palindrome
#  False: number is a palindrome
def palindrome(number): 
    return str(number)==str(number)[::-1] # keeping it simple

# driver code to test above 
if __name__ == "__main__":
    number = 12344322
    answer = palindrome(number)
    print(answer)


