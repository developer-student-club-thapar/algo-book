# Python selection sort algorithm
def selection_sort(arr):

    arr_length = len(arr)

    for i in range(arr_length):

        # index for minimum array valuee
        min_index = i

        for j in range(i + 1, arr_length):
            # traverse and find minimum value through remaining array
            if arr[min_index] > arr[j]:
                min_index = j

        # swap elements for current element and found minimum element
        arr[i], arr[min_index] = arr[min_index], arr[i]


# test code
arr = [int(element) for element in input('Enter array:').split()]
selection_sort(arr)
print('Sorted list: ' + str(arr))
