def binarySearch(A, L, U, key):
    if A[L] > key or A[U] < key:
        return -1
    else:
        Mid = (L + (U - L) / 2)
        # or
        # Mid = (int)(L + U) / 2
        if A[Mid] == key:
            return Mid
        elif A[Mid] < key:
            L = Mid + 1
            binarySearch(A, L, U, key)
        else:
            U = Mid - 1
            binarySearch(A, L, U, key)
        return -1


def exponentialSearch(A, n, key):
    if A[0] == key:
        return 0
    else:
        i = 1
        while i < n and A[i] <= key:
            i = i * 2
        if i >= n:
            min = n - 1
        else:
            min = i
        return binarySearch(A, i / 2, min, key)


A = [2, 12, 20, 25, 85, 102, 130]
n = len(A)
key = 25
result = exponentialSearch(A, n, key)
if result == -1:
    print("Element not found in thye array")
else:
    print("Element is present at indekey %d" % (result))

key = 102
result = exponentialSearch(A, n, key)
if result == -1:
    print("Element not found in thye array")
else:
    print("Element is present at indekey %d" % (result))

key = 45
result = exponentialSearch(A, n, key)
if result == -1:
    print("Element not found in thye array")
else:
    print("Element is present at indekey %d" % (result))
