## Question
Linear Search is a search algorithm which is used to search for a target value in a given array. The array need not be sorted. 

## Explanation

We iterate through each of the elements in the given array and compare it to the target until we find the target or reach the end of the array.

-   Iterate through the array
    - If the element is equal to the target, we have finished the search and found the targer!
-   If we have reached the end of the array and have not found the target then the target does not exist in the array

<img src="images/linear_search.gif" width=500px alt="represent"></img>

## Pseudo code

```
START
    for every element in arr
        if element == target
            print "target found!!"
    print "reached end of array, target is not there in the array :("
END
```

## External content
[Linear Search Visualization](https://www.cs.usfca.edu/~galles/visualization/Search.html)
