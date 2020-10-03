
# Main Function to find Maximum Subarray Sum

def maxSubArraySum(a):
    
    max_now = 0
    total_max = -9999999999  # Initializing variables with 0 and  Negative Infinity

   # Traversing in List/Array

    for i in range(0,len(a)):
        # Finding out Current Maximum Sum in List/Array
        total_max = max(a[i],total_max+a[i])  
        # Comparing the Current Maximum Sum with Previous One
        max_now = max(max_now,total_max)

    # This will return Maximum Subarray Sum
    return max_now 


# Driver Code
a = [-2, -3, 4, -1, -2, 1, 5, -3] 
print("Maxium Subarray sum is",maxSubArraySum(a))