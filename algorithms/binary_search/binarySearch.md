# Binary Search
Binary Search, also known as half-interval search is a method of finding an element ***O( log(n) )*** time.
## Pre-Requisites
- None

## Concept
The algorithm is based on 2 key points
- The range is already sorted
- Always finding a middle index in a given range

### Applying Binary Search
- If the range is found at a length say `L`,then we apply binary search on `L`/2 to `L`. This is because `L`/2 is the previous range in which element does not exist and `L` is new range in which it exists, also ( `new range` = `previous range`*2 ), so the element will surely be present here.
- Now if the length `L` becomes greater than the length of actual array then we apply binary search on `L`/2 to last element of the actual array as we only have the values till that index only.

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

This will give the position of the key if it exists in the array
```

## Reference content
- GeeksForGeeks [Binary Search](https://www.geeksforgeeks.org/binary-search/)
---