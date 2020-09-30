#include <iostream>
using namespace std;

int binarySearch(int A[], int L, int U, int key)
{
    if (A[L] > key || A[U] < key)
    {
        return -1;
    }
    else
    {
        int Mid = (L + (U - L) / 2);
        //or
        // int Mid = (int)(L + U) / 2;
        if (A[Mid] == key)
        {
            return Mid;
        }
        else if (A[Mid] < key)
        {
            L = Mid + 1;
            binarySearch(A, L, U, key);
        }
        else
        {
            U = Mid - 1;
            binarySearch(A, L, U, key);
        }
        return -1;
    }
}
int exponentialSearch(int A[], int n, int key)
{
    if (A[0] == key)
    {
        return 0;
    }
    else
    {
        int i = 1;
        while (i < n && A[i] <= key)
        {
            i = i * 2;
        }
        int min;
        if (i >= n)
        {
            min = n - 1;
        }
        else
        {
            min = i;
        }
        return binarySearch(A, i / 2, min, key);
    }
}
int main()
{
    int A[] = {2, 12, 20, 25, 85, 102, 130};
    int n = sizeof(A) / sizeof(A[0]);
    int pos = exponentialSearch(A, n, 25);
    if (pos != -1)
    {
        cout << "Element found at index " << pos << endl;
    }
    else
    {
        cout << "Element not found" << endl;
    }
    pos = exponentialSearch(A, n, 102);
    if (pos != -1)
    {
        cout << "Element found at index " << pos << endl;
    }
    else
    {
        cout << "Element not found" << endl;
    }
    pos = exponentialSearch(A, n, 45);
    if (pos != -1)
    {
        cout << "Element found at index " << pos << endl;
    }
    else
    {
        cout << "Element not found" << endl;
    }
    return 0;
}
