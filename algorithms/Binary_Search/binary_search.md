# Binary Search 

<p>&nbsp;</p>


## What is Jump Search? 
Binary search is a fast search algorithm with run-time complexity of Ο(log n). This search algorithm works on the principle of divide and conquer. For this algorithm to work properly, the data collection should be in the sorted form.
<p>&nbsp;</p>


## How Binary Search Works?
For a binary search to work, it is mandatory for the target array to be sorted. We shall learn the process of binary search with a pictorial example. The following is our sorted array and let us assume that we need to search the location of value 31 using binary search.
<p>&nbsp;</p>



<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_0.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>

First of all we should determine the mid by using the formula:

-- mid = low + (high - low) / 2

In our current example mentioned above:
It is, 0 + (9 - 0 ) / 2 = 4 (integer value of 4.5). So, 4 is the mid of the array.

<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_1.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>
Now we compare the value stored at location 4, with the value being searched, i.e. 31. We find that the value at location 4 is 27, which is not a match. As the value is greater than 27 and we have a sorted array, so we also know that the target value must be in the upper portion of the array.

<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_2.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>
We change our low to mid + 1 and find the new mid value again.

->low = mid + 1
->mid = low + (high - low) / 2 

Our new mid is 7 now. We compare the value stored at location 7 with our target value 31.
<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_3.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>
The value stored at location 7 is not a match, rather it is more than what we are looking for. So, the value must be in the lower part from this location.
<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_4.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>
Hence, we calculate the mid again. This time it is 5.

<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_5.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>
We compare the value stored at location 5 with our target value. We find that it is a match.
<img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_6.jpg" width=500px alt="represent"></img>

<p>&nbsp;</p>
Hence the element to be searched 31 is present at location 5.

<p>&nbsp;</p>



## Psuedo Code

<p>&nbsp;</p>

  
   Procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set lowerBound = 1
   Set upperBound = n 

   while x not found
      if upperBound < lowerBound 
         EXIT: x does not exists.
   
   set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
      
   if A[midPoint] < x
       set lowerBound = midPoint + 1
        
   if A[midPoint] > x
      set upperBound = midPoint - 1 
   if A[midPoint] = x 
       EXIT: x found at location midPoint
   end while
   
end procedure

