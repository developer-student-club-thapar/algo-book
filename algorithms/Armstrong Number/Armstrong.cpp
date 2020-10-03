#include <cmath>
#include <iostream>
using namespace std;

bool armstrong(int n)
{
    int temp=n,no_of_digits=0,sum=0; // Initial Variables
    
    // Logic to count number of digits in temp
    while(temp!=0)
    {
        temp/=10;
        no_of_digits++;
    }
    temp = n;
   // Logic to Store the sum

    while(temp!=0)
    {
        sum+=pow(temp%10,no_of_digits);  // Adding digit raised to power in sum 
        temp/=10;  // Integer Division by 10 
    }
    return sum==n;

}

// Driver Code
int main()
{
    int x = 371;
    
    if(armstrong(x))
    cout<<x<<" is an Armstrong Number";
    else
    cout<<x<<" is not an Armstrong Number";
}