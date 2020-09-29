# Jump Search 

<p>&nbsp;</p>


## What is Jump Search? 
Jump search algorithm, also called as block search algorithm. Only sorted list of array or table can alone use the Jump search algorithm. In jump search algorithm, it is not at all necessary to scan every element in the list as we do in linear search algorithm. We just check the R element and if it is less than the key element, then we move to the R + R element, where all the elements between R element and R + R element are skipped. This process is continued until R element becomes equal to or greater than key element called boundary value. The value of R is given by R = sqrt(n), where n is the total number of elements in an array. Once the R element attain the boundary value, a linear search is done to find the key value and its position in the array. It must be noted that in Jump search algorithm, a linear search is done in reverse manner that is from boundary value to previous value of R.
<p>&nbsp;</p>

## Why Jump Search?
- Jump search algorithm is more efficient in case of finding a element 600 out of 625 elements in an array.

- Jump search algorithm takes 25 iteration to find a element 600 out of 625 elements in an array.

- Whereas Linear search algorithm takes 600 iteration to find a element 600 out of 625 elements in an array.

- Whereas Binary search algorithm takes 19 iteration to find a element 600 out of 625 elements in an array but complexity in calculation is very tough as compared to jump search algorithm.
<p>&nbsp;</p>

## Some Cons of Jump Search
- Jump search algorithm is not preferable for unsorted list or array.

- Executing time of Binary search algorithm is 0 (sqrt (n)).

<p>&nbsp;</p>

## Explanation
Input will be:

    Sorted array A of size n
    Element to be searched, say item

1. Set i=0 and m = √n.
    



2. Compare A[i] with item. If A[i] != item and A[i] < item, then jump to the next block. Also, do the following:

    Set i = m
    Increment m by √n

    

3. Repeat the step 2 till m < n-1


4. If A[i] > item, then move to the beginning of the current block and perform a linear search.

    Set x = i
    Compare A[x] with item. If A[x]== item, then print x as the valid location else set x++
    Repeat Step 4.1 and 4.2 till x < m

    ```

<p>&nbsp;</p>

## Example

Let us trace the above algorithm using an example:

Consider the following inputs:

    A[] = {0, 1, 1, 2, 3, 5, 8, 13, 21, 55, 77, 89, 101, 201, 256, 780}
    item = 77

Step 1: m = √n = 4 (Block Size)



Step 2: Compare A[0] with item. Since A[0] != item and A[0]<item, skip to the next block



Step 3: Compare A[3] with item. Since A[3] != itemand A[3]<item, skip to the next block


Step 4: Compare A[6] with item. Since A[6] != itemand A[6]<item, skip to the next block



Step 5: Compare A[9] with item. Since A[9] != itemand A[9]<item, skip to the next block


Step 6: Compare A[12] with item. Since A[12] != item and A[12] >item, skip to A[9] (beginning of the current block) and perform a linear search.





    Compare A[9] with item. Since A[9] != item, scan the next element
    Compare A[10] with item. Since A[10] == item, index 10 is printed as the valid location and the algorithm will terminate



## Psuedo Code

<p>&nbsp;</p>

  
int jumpSearch(int arr[], int x, int n) 
{ 

    // Finding block size to be jumped 
    int step = sqrt(n); 
    
    // Finding the block where element is 
    // present (if it is present) 
    int prev = 0; 
    while (arr[min(step, n)-1] < x) 
    { 
        prev = step; 
        step += sqrt(n); 
        if (prev >= n) 
            return -1; 
    } 
  
    // Doing a linear search for x in block 
    // beginning with prev. 
    while (arr[prev] < x) 
    { 
        prev++; 
  
        // If we reached next block or end of 
        // array, element is not present. 
        if (prev == min(step, n)) 
            return -1; 
    } 
    // If element is found 
    if (arr[prev] == x) 
        return prev; 
  
    return -1; 
} 
