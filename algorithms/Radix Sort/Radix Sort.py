def counting_sort(A, Exp):
    n = len(A)

    count = [0] * (10)

    for i in range(0, n):
        index = A[i] // Exp
        count[index % 10] += 1


    for i in range(1, 10):
        count[i] = count[i]+count[i - 1]

    output = [0] * (n)

    i = n - 1
    while i >= 0:
        index = A[i] // Exp
        output[count[index % 10] - 1] = A[i]
        count[index % 10] -= 1
        i = i- 1

    i = 0
    for i in range(0, len(A)):
        A[i] = output[i]


def radix_sort(A):

    Max = max(A)

    Exp = 1
    while Max / Exp > 0:
        counting_sort(A, Exp)
        Exp *= 10

A = [130, 12, 85, 102, 25, 20, 2]
radix_sort(A)
print(A)
