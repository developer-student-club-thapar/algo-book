#include <iostream>
#define MAX_SIZE 20

using namespace std;

int main(){
    int size ,element;
    int array[MAX_SIZE];
    cout<<"enter the number of elements: ";
    cin>>size;
    for(int i=0;i<size;i++){
        cout<<"enter element "<<i+1<<": ";
        cin>>array[i];
    }
    cout<<"Enter the element you want to find: ";
    cin>>element;
    int flag=0,position;
    for(int i=0;i<size;i++){ 
        if(element==array[i]){
            flag=1; 
            position=i+1;
            break;
        }
    }
    if(flag==0){
        cout<<"Element not found !";
    }
    else{
        cout<<element <<" is found at position :"<<position<<endl;
    }
    return 0;
}