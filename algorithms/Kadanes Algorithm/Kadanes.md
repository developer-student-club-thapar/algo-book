# Kadane's Algorithm

## What to do?

We have to find the maximum contigous array sum using an efficient method.

Ex: Consider the array {-2, -3, 4, -1, -2, 1, 5, -3}. Maximum Subarray sum for this array would be 7 


## Explanation

Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array (max_now is used for this). And keep track of maximum sum contiguous segment among all positive segments (total_max is used for this). Each time we get a positive sum compare it with total_max and update total_max if it is greater than total_max


## Pseudo code

```
 Initialize:
    total_max = INT_MIN
    max_now = 0

Loop for each element of the array
  (a) max_now = max_now + a[i]
  (b) if(total_max < max_now)
            total_max = max_now
  (c) if(max_now < 0)
            max_now = 0
return total_max
```


