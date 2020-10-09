function bubbleSort(arr)
{
    var temp,swap; //! temp is declared to swap, swap is used to as a indicator
    var len = arr.length //! storing the length of array
    for(var i = 0;i<len;i++){
    swap = false //! setting the value of swap as false
    for(var j = 0;j<len-1;j++){
        if(arr[j+1]<arr[j]){  //! compare 
            temp = arr[j]       //! swapping if the if conditions satisfies
            arr[j] = arr[j+1]
            arr[j+1] = temp
            swap = true  //! changing the value of swap as true, if a swap takes place
        }
    }
    if(swap == false){
        break;  //! in case there are no swaps performed that means the array is already sorted, hence break 
        }
    }
    return arr
}

//! call the bubbleSort function.
arr = [1,2,3,2,1]   
document.write(bubbleSort(arr))