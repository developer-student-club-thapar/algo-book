We basically ignore half of the elements just after one comparison.Let x be the element to be searched.

1-Compare x with the middle element.
2-If x matches with middle element, we return the mid index.
3-Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
4-Else (x is smaller) recur for the left half.
