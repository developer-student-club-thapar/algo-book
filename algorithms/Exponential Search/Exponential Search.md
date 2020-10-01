# Exponential Search
Exponential Search also known as the Doubling or Galloping Search is based on range finding adn uses binary search to find the element in ***O( log(n) )*** time.
## What is Exponential Search?
Exponential Search as the name suggests, uses some exponential functions to determine the range of `sorted` array where the element may be that is to be searched and then applies binary search to get the correct position if it exists.
## Pre-Requisites
- Binary Search

## Concept
The algorithm is based on 2 key points
- Finding Range in which the element may be
- Binary Search on that Range
### Steps for finding Range
The algorithm increases the size of the searching array by doubling it if the element to be found is greater than the upper bound of the present array. As the array is already `sorted` so this method of checking if the upper bound is greater than or less than the key works fine and as it always doubles the size of the array, hence the name exponential search.
- The algorithm checks if the first element is the key that is to be found then returns zero ( position of the key ) and stops
- If the above case is not true then starts to form a searching array ( size of array 2<sup>0</sup> = 1 ) and checks for the element at index 1. If key is found it returns the position.
- If the above case also fails it incerements the size of the searching array by doubling it ( size of array 2<sup>1</sup> = 2 ) and compares the key and the element at index 2. This continues till the correct range is found or the the search array length becomes greater than the actual array.
### Applying Binary Search
- If the range is found at a length say `L`,then we apply binary search on `L`/2 to `L`. This is because `L`/2 is the previous range in which element does not exist and `L` is new range in which it exists, also ( `new range` = `previous range`*2 ), so the element will surely be present here.
- Now if the length `L` becomes greater than the length of actual array then we apply binary search on `L`/2 to last element of the actual array as we only have the values till that index only.

Let us see the working by considering following examples
## Example 1
Let the list be:

    2, 12, 20, 25, 85, 102, 130
Element to be searched 25

Steps To be Applied
- Finding Range
- Apply Binary Search

Working
```
  //First element check

  2 ≠ 25
```
Now we find the range
```
//First Range
//Array Size = 1

Result: { 12 }

//Check upper bound

12 < 25
```
```
//Next Range
//Array Size = 2

Result: { 12, 20 }

//Check upper bound

20 < 25
```
```
//Next Range
//Array Size = 4

Result: { 12, 20, 25, 85 }

//Check upper bound

85 > 25

//Range found
```
Get Range for Binary Search
```
//Binary Search Range

Lower Bound for Search = Index 2

Upper Bound for Search = Index 4

```
Finally we apply Binary Search to get the correct position that is Index 3
## Example 2
Let the list be:

    2, 12, 20, 25, 85, 102, 130
Element to be searched 102

Steps To be Applied
- Finding Range
- Apply Binary Search

Working
```
  //First element check

  2 ≠ 102
```
Now we find the range
```
//First Range
//Array Size = 1

Result: { 12 }

//Check upper bound

12 < 102
```
```
//Next Range
//Array Size = 2

Result: { 12, 20 }

//Check upper bound

20 < 102
```
```
//Next Range
//Array Size = 4

Result: { 12, 20, 25, 85 }

//Check upper bound

85 < 102

```
```
//Next Range
//Array Size = 8
//Search array size > Original Array size

//Change range to the last element of the Original Array i.e Index 6

//Length becomes 6

Result: { 12, 20, 25, 85, 102, 130 }

//Check upper bound

130 > 102

```
Get Range for Binary Search
```
//Binary Search Range

Lower Bound for Search = Index 4

Upper Bound for Search = Index 6

```
Finally we apply Binary Search to get the correct position that is Index 5

Another example [here](https://lh3.googleusercontent.com/-8AEhpwqvJj0/VTaH7MxVLpI/AAAAAAAABe8/2uqyF_FNy7Y/image_thumb.png?imgmax=800)

Note: Assume the array starts at value 4 in the above example
## Pseudo code
Let `sorted` list be stored in `A` and length is `n`
- Binary Search
```
//Let L be lower boun and U the upper bound

L = 0 and U = n

//Check if element exists in this interval

    IF A[L] > Key or A[U] < key

        Element not present

    End-If

    Else
        Mid = ( L + (U - L )/2 ) Or Mid = ( L + U )/2 ( typecast to integer value )

        IF A[Mid] = key

            Element Found

        End-IF

        Else-IF A[Mid] < key

            Change the Lower Bound
            L = Mid + 1

            Apply Binary Search again on updated interval L to U

        End-Else-IF

        Else

            Change the Upper Bound
            U = Mid -1

            Apply Binary Search again on updated interval L to U

        End-Else

```
- Exponential Search
```
//Check at First index of A

    IF A[0] = key

        Element is at Index 0

    End-IF

    Else

        //Find Range for Binary Search

        Start with i = 1

        While i < n and A[i] ≤ key

            Increment i by Doubling it
            i = i * 2

        End-While

//Search Length exceeds Original length

        IF i ≥ n

            min = n-1

        End-IF

        Else

            min = i

        End-Else

        Apply Binary Search on found Range

        Binary Search on i/2 to min

    End-Else
```
This will give the position of the key if it exists in the array

## External content
- GeeksForGeeks [Exponential Search](https://www.geeksforgeeks.org/exponential-search/)
- GeeksForGeeks [Binary Search](https://www.geeksforgeeks.org/binary-search/)
- [Video](https://www.youtube.com/watch?v=L6AbpxsWJes) for Visualisation
---
