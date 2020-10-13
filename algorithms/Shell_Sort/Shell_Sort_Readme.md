# Shell Sort

## What is Shell Sort? 
- ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved.
- The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.

## Why Shell Sort? 
- Shellsort (also known as Shell sort or Shell's method) is an in-place comparison based sorting algorithm.

- Shell Sort improves its time complexity by taking the advantage of the fact that using Insertion Sort on a partially sorted array results in less number of moves.

#### It is a generalization of:

- sorting by exchange (bubble sort)
- sorting by insertion (insertion sort)

## Pre-Requisites
- **We are required to use Shell Sort algorithm when sorting the numbers.**
- **We are required to implement the algorithm in PHP language.**

## Explanation
Shell sort is the generalization of insertion sort which overcomes the drawbacks of insertion sort by comparing elements separated by a gap of several positions. In general, Shell sort performs the following steps.
let us consider a detailed example to better understand the shell sort using a pictorial representation.

 ### Illustration
   #### Let us illustrate the Shell sort with an Example.

- Consider the following array of 10 elements.

<p align="center">
  <img width="525" height="500" src="images/array-of-10-elements (img 1).png">
</p>


- we provide a gap of 3, then we will have the following sub-lists with each element that is 3 elements apart. We then sort these three sublists.

<p align="center">
  <img width="550" height="800" src="images/sub-lists (img 2).png">
</p>

- The sorted sub-lists and the resultant list that we obtain after combining the three sorted sublists are shown below.

<p align="center">
  <img width="550" height="800" src="images/sorted-sub-lists-and-the-resultant-list (img 3).png">
</p>

- The above array that we have obtained after merging the sorted subarrays is nearly sorted. Now we can perform insertion sort on this list and sort the entire array. This final step is shown below:

<p align="center">
  <img width="550" height="800" src="images/This-final-step (img 4).png">
</p>

- As seen above, after performing shell sort and merging the sorted sublists, we only required three moves to completely sort the list. Thus we can see that we can significantly reduce the number of steps required to sort the array.

- The choice of increment to create sub-lists is a unique feature of shell sort.

## Pseudo code

The general algorithm for shell sort is given below.

```
shell_sort (A, N)
where A – list to be sorted; N – gap_size
set gap_size = N, flag = 1
while gap_size > 1 or flag = 1, repeat
begin
set flag = 0
set gap_size = (gap_size + 1)/2
end
for i = 0 to i< (N-gap_size) repeat
begin
if A[i + gap_size] > A[i]
swap A[i + gap_size], A[i]
set flag = 0
end
end
  
```
Thus in the above algorithm, we first set N which is the gap for sorting the array A using shell sort. In the next step, we divide the array into sub-arrays by using the gap. Then in the next step, we sort each of the sub-arrays so that at the end of the loop we will get a sorted array.
#### Complexity
Worst case time complexity: Θ(N (log N)^2) comparisons
- Average case time complexity: Θ(N (log N)^2) comparisons
- Best case time complexity: Θ(N log N)
- Space complexity: Θ(1).

## External content 

- ShellSort (GFG)  https://www.geeksforgeeks.org/shellsort/

- ShellSort (TutorialsPoint)  https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm

-  ShellSort (programiz)  https://www.programiz.com/dsa/shell-sort
---
