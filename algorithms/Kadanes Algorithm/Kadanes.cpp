#include<iostream>
#include<climits>
using namespace std;
// Main Function to find Maximum Subarray Sum
int maxSubarraySum(int a[], int size) 
{ 
   int total_max = INT_MIN;   // Initializing variables with 0 and  Negative Infinity
   int max_now = 0; 
   // Traversing in Array
   for (int i = 0; i < size; i++) 
   {   // Finding out Current Maximum Sum in Array
        max_now = max(a[i], max_now+a[i]); 
         // Comparing the Current Maximum Sum with Previous One
        total_max = max(total_max, max_now); 
   } 
    // This will return Maximum Subarray Sum
   return total_max; 
} 
// Driver Code
int main()
{
      int a[] = {-2, -3, 4, -1, -2, 1, 5, -3}; 
      int size = sizeof(a)/sizeof(a[0]);
      cout<<"Max Subarray Sum is "<<maxSubarraySum(a,size);
}
