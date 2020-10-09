'''
I bubble sort in each iteration we compare two numbers and swap them if i+1 > i.
'''


def bubbleSort(alist):
    length = len(alist)  # length of array/list
    for _ in range(length):  # total iterations
        swap = False  # if any sort of swapping is performed in the list, then the value of swap must be changed to True, in case it remains false that means the list is already sorted no need to perform further iterations.
        for i in range(length-1):  # inner iteration in order to perform sorting
            if(alist[i+1] < alist[i]):
                # swapping method in python
                alist[i+1], alist[i] = alist[i], alist[i+1]
                swap = True  # since swapping is performed we are changing value  of swap to True
        if(swap == False):  # in case there is no swapping performed the value of swap will not be changed to True, hence we can break from the loops
            break
    return(alist)  # since the list is sorted we can return it


alist = [1, 2, 4, 5, 6, 4, 3, 4, 5, 7, 8, 6, 4, 3]  # sample test case
print(bubbleSort(alist))  # calling the bubble sort function
