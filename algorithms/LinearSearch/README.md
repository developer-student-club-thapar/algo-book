# Linear Search

## To be achieved

In this algorithm we have to start searching for the required element from the the very first element.
We search the array until we find our required element till the last element of the array.

## Pre-Requisites

-   Array


## Explanation

-   Step 1: Select the first element as the current element.
-   Step 2: Compare the current element with the target element. If matches, then go to step 5.
-   Step 3: If there is a next element, then set current element to next element and go to Step 2.
-   Step 4: Target element not found. Go to Step 6.
-   Step 5: Target element found and return location.
-   Step 6: Exit process.

## Pseudo code

Begin
for i = 0 to (n - 1) by 1 do
    if (a[i] = item) then
        set loc = i
        Exit
    endif
endfor
set loc = -1
End



## External content

[Javatpoint](https://www.javatpoint.com/linear-search-in-java)

---