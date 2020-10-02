
def armstrong(n):
    # Variable to store number of digits
    digits = len(str(n))
    
    # Variable to Calculate Power Sum
    sum = 0
    
    # Temprorary Variable to Store Original Number
    temp = n
   
    # Main Logic
    while temp!=0:
        sum+= (temp%10)**digits   # Adding digits raised to power of number of Digits
        temp//=10  # Integer Division by 10 
    return n==sum # Return True or False according to answer

# Driver Code
x = 371

if armstrong(x):
    print(f"{x} is an Armstrong Number")
else:
    print(f"{x} is not an Armstrong Number")


