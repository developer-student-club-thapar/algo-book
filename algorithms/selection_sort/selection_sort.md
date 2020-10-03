# Selection Sort
 
## Why selection Sort
Selection sort can be good at checking if everything is already sorted. It is also good to use when *memory space is limited*. This is because unlike other sorting algorithms, selection sort doesn't go around swapping things until the very end, resulting in less temporary storage space used.

## What is Selection Sort?
Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.

This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n<sup>2</sup>)
- `n` the number of elements

## Pre-Requisites
- Understanding of loops and swapping

## Concept
The Selection sort algorithm is based on the idea of finding the *minimum* or *maximum* element in an unsorted array and then putting it in its correct position in a sorted array.

Assume that the array:

    7, 5, 4, 2

needs to be sorted in ascending order.

The minimum element in the array i.e. ***2*** is searched for and then swapped with the element that is currently located at the first position, i.e. ***7*** Now the minimum element in the remaining unsorted array is searched for and put in the second position, and so on.

Steps To be Applied
− Set MIN to location `0`
− Search the minimum element in the list
− Swap with value at location MIN
− Increment MIN to point to next element
− Repeat until list is sorted


## Pseudo code for Selection Sort

```
  procedure selection sort 
   list  : array of items
   n     : size of list

   for i = 1 to n - 1
   /* set current element as minimum*/
      min = i    
  
      /* check the element to be minimum */

      for j = i+1 to n 
         if list[j] < list[min] then
            min = j;
         end if
      end for

      /* swap the minimum element with the current element*/
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for
	
end procedure
```

## External content
- TutorialsPoint [Selection Sort](https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm#:~:text=Selection%20sort%20is%20a%20simple,part%20is%20the%20entire%20list.)
- GeeksForGeeks [Selection Sort](https://www.geeksforgeeks.org/selection-sort/)
- [Video](https://www.youtube.com/watch?v=xWBP4lzkoyM&feature=emb_logo&ab_channel=GeeksforGeeks) for Visualisation
---

