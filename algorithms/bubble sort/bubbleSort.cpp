#include <iostream>
using namespace std; //! so that we don't have to add std:: everywhere
int bubbleSort(int a[])
{
    int i, j, len; //! i and j for iteration, len to store len of array, many other wayys to find len of array
    bool swap;
    cout << "Enter length of array" << endl;
    cin >> len; //input length for number of iterations
                //  int a[10] = {5,4,6,3,6,2,3,5,6,34};
    for (i = 0; i < len; i++)
    {
        swap = false; //!set value of swap as false initially
        for (j = i + 1; j < len; j++)
        {
            if (a[j] < a[i])
            {
                std::swap(a[j], a[i]); //! compare two at a time and iterate thru the list
                swap = true;           //! in case there is a swap the value will be changed to true.
            }
        }
        // cout<<swap<<endl;
        if (swap == false)
        { //! in case the value has not been changed to true, i.e the list is sorted, hence we can break the iterations
            break;
        }
    }
    cout << "Sorted Element List ...\n";
    for (i = 0; i < len; i++)
    {
        cout << a[i] << "\t"; //!iterate over index values in order to print
    }
    return 0;
}

int main()
{
    int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    bubbleSort(a); //!calling the function.
}