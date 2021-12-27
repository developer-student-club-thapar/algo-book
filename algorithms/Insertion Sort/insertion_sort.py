def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        cmp = arr[i]
        if cmp < arr[i-1]:
            j = i
            while True:
                arr[j] = arr[j-1]
                j -= 1
                if j == 0 or cmp >= arr[j-1]:
                    break
            arr[j] = cmp


array = [5, 8, 2, 9, 4, 45, 5]
insertion_sort(array)
print("Sorted array: ", array)
