# Insertion Sort

## What is Insertion Sort

Insertion Sort is basically insertion of an element from a random set of numbers, to its correct position where it should actually be, by shifting the other elements if required.

## Pre-Requisites

Add pre-requisites here

-  Arrays
-  Functions

## Explanation

1. Using a for loop, we are reading n elements from standard input into an array named arr.
2. Next, we are comparing elements of the array so that we can insert them in the proper position using the insertion sort method.
3. At the end, we are printing/displaying the sorted array.


Test case 1 – Average case: Here, the elements are entered in random order.

![1](https://user-images.githubusercontent.com/63907704/94988355-263ba180-058a-11eb-8c09-93ac0a06770f.png)

Test case 2 – Best case: Here, the elements are already sorted.

![2](https://user-images.githubusercontent.com/63907704/94988378-55eaa980-058a-11eb-8053-2339462eeba3.png)

Test case 3 – Worst case: Here, the elements are reverse sorted.

![3](https://user-images.githubusercontent.com/63907704/94988400-803c6700-058a-11eb-87e4-7023f05dfb82.png)

## Pseudo code

  for j <- 2 to length[A]

       do key <- A[j]

         Insert A[j] into the sorted sequence A[1 . . j - 1].

        i <- j - 1

        while i > 0 and A[i] > key

           do A[i + 1] <- A[i]

              i <- i - 1

        A[i + 1] <- key

## External content
https://www.programiz.com/dsa/insertion-sort

