"""An algorithm to check whether the entered number is a Armstrong Number or not. :)"""

#an_algo is the function which checks if the user input number is an Armstrong Number or not

def an_algo(y):
    a = str(y)
    b = 0

    for i in range(len(a)):
        b = b + int(a[i])**3

    if a == str(b):
        print(a," is an Armstrong Number \n")
        return

    else:
        print(a," is not an Armstrong Number \n")
        return

#Asks user for an input

nbr = int(input("Your Number : "))
print("\n")

#Calling the armstrong function

an_algo(nbr)


