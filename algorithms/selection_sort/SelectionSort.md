# Selection Sort

## What is Selection Sort ?

Selection sort is an algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

## Pre-Requisites

-   Arrays
-   Python

## Explanation
How Selection Sort Works?

1. Set the first element as minimum.
   <img src="images/pic1.png" width=500px alt="pic1"></img>
2. Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.

Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.
  <img src="images/pic2.png" width=500px alt="pic2"></img>
  
3. After each iteration, minimum is placed in the front of the unsorted list.
  <img src="images/pic3.png" width=500px alt="pic3"></img>
4. For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the    elements are placed at their correct positions.
  <img src="images/pic4.png" width=500px alt="pic4"></img>
  <img src="images/pic5.png" width=500px alt="pic5"></img>
  <img src="images/pic6.png" width=500px alt="pic6"></img>
  <img src="images/pic7.png" width=500px alt="pic7"></img>


## Pseudo code
<p>&nbsp;</p>
  selectionSort(array, size)
  repeat (size - 1) times
  set the first unsorted element as the minimum
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum
  swap minimum with first unsorted position
  end selectionSort   

## External content

[Programiz](https://www.programiz.com/dsa/selection-sort)
