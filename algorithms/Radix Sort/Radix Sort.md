# Radix Sort
## Why Radix Sort??
Other sorting algorithms like Merge Sort, Heap Sort, Quick-Sort, etc cannot do better than ***Ω(n log(n))***. Another algorithm *Counting Sort* , a linear time sorting algorithm with complexity ***O(n+k)*** also does not give good results even for n^2 elements for which the other sorts may give some results but not to the mark.
Now comes the Radix Sort, which always gives the linear time complexity.
## What is Radix Sort?
Radix Sort uses Counting sort as its base principle and sorts the integer values by sorting the numbers on the basis of their least significant digits to the highest significant digits.The time complexiy of this algorithm is therefore ***O(d (n+b))*** where
- `n` the number of elements
- `b` the base of representing the numbers ( Usually taken as 10 )
- `d` is the maximum number of digits in the given integers.

  Calculated as d = O( log<sub>b</sub>k )
## Pre-Requisites
- Counting Sort

## Concept
We use counting sort multiple times on the given integers from the least significant digit to the highest significant digit that is:
- Firstly, sort according to ones place
- Next, acording to tens,hundreds,thousands and so on.

Let us see the working by considering an example
## Example
Let the list be:

    130, 12, 85, 102, 25, 20, 2
Steps To be Applied
- Finding Greatest Element
- Apply Counting Sort `d` times

  NOTE: We do not have to calculate `d` explicitly as it will be done while applying the sort
- If there is a clash while sorting we maintain the order from the previous list (See example)

Working
```
  Max Element = 130 => Sort apllied only till hundreds place
  Applying count sort at ones place
  Result: 130, 20, 12, 102, 2, 85, 25
```
There is clash at ones place for following pairs

 - 13`0` and 2`0`
 - 1`2`, 10`2`, `2`
 - 8`5` and 2`5`

To resolve this we kept the order according to the previous list we had that is:

130 before 20, 12 before 102 before 2 and so on.
```
  Applying count sort at tens place
  Result: 102, 2, 12, 20, 25, 130, 85
```
```
  Applying count sort at hundreds place
  Result: 2, 12, 20, 25, 85, 102, 130
```
Another visual example availabe [here](https://www.ritambhara.in/wp-content/uploads/2018/01/Screen-Shot-2018-01-13-at-3.26.15-PM.png)
## Pseudo code
Let list be stored in `A` and length is `n`
- Get Max element
```
  Max = A[0]

  FOR i=1 to n-1

    IF ( A[i] > Max )

      Set Max = A[i]

    End-IF

  End-FOR
```
- Count Sort ( With base = 10 )
```
// n is size of array to be sorted

//Initialize an array ( say count ) of size 10 with each element set to 0
//Size is taken as 10 as base = 10

//Store frequency in count array

  FOR i=0 to n-1

    Increment count[DIGIT] //Digit belongs to 0-9

  End-FOR

//Changing values in count to get actual positions of all digits

  FOR i=1 to n-1

    count[i] = count[i] + cout[i-1] //Position of this digit is after that of the previous

  End-FOR

//Building output array for storing sorted output
//Size of this output array is same as the size of original array to be sorted

  FOR i=n-1 to 0

    output[count[DIGIT]-1] = arr[i]

    decrease count[DIGIT]

  END-FOR

//Copy this output array to original array so that it contains sorted numbers

  FOR i=0 to n-1

    A[i] = output[i]

  END-FOR
```
- Radix Sort
```
//Using GetMax function to find greatest element

  Max = GetMax(A)

//Looping for ones,tens,hundreds place

//Exp stores multiples of 10 for finding place ( ones, tens or hundreds)

  Exp = 1  //Starting at ones place

  While ( Max/Exp > 0 )

    //Apply count sort at Exp place i.e
    //if Exp = 1 then sort at ones place
    //if Exp = 10 then sort at tens place and so on

    countSort ( Exp )

    Increment Exp by multiplying with 10  //To get next place

  END-While
```

## External content
- GeeksForGeeks [Radix Sort](https://www.geeksforgeeks.org/radix-sort/)
- GeeksForGeeks [Counting Sort](https://www.geeksforgeeks.org/radix-sort/)
- [Video](https://www.youtube.com/watch?v=nu4gDuFabIM&feature=youtu.be) for Visualisation
---
