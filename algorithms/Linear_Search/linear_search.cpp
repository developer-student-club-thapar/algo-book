#include <bits/stdc++.h>
using namespace std;

int main()
{
   int search_element,i;
   int size;
   
   cout<<"Enter the size of array:-\n";
   cin>>size;
   
   int arr[size];
   
   cout<<"Enter elements of Array:-\n";
   for(int j=0;j<size;j++){
   	cin>>arr[j];
   }
   
   cout<<"Enter the element you want to search in Array:-\n";
   cin>>search_element;
   
   for ( i=0;i<size;i++) {
      if (arr[i] == search_element) {
         printf("%d is present at location %d.\n", search_element, i+1);
         break;
      }
   }
   if (i == size)
      printf("%d isn't present in the array.\n", search_element);

  return 0;    
}
