def linear_search(arr, x):
    # iterating through the full array checking each element to see if it is "x"
    for (i, ele) in enumerate(arr, 0):
        if ele == x:
            return i

    return -1


print(linear_search([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 6)) # -1
print(linear_search([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 55)) # 10