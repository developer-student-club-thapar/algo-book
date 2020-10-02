public class LinearSearch 
{ 
    public static int linearSearch(int[] arr, int x) 
    { 
        int n = arr.length;

        for(int i=0;i<n;i++) {
            if (arr[i] == x) {
                return i;
            }
        }
  
        return -1;
    } 
  
    // Driver program to test function 
    public static void main(String [ ] args) 
    { 
        int arr[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610}; 
        int x = 55; 
  
        // Find the index of 'x' using Linear Search 
        int index = linearSearch(arr, x); 
  
        // Print the index where 'x' is located 
        System.out.println("\nNumber " + x + " is at index " + index); 
    } 
} 

