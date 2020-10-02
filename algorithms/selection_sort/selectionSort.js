// JavaScript implementation of selection sort

const selectionSort = (inputArr) => { 
    // Find the length of the array
    let n = inputArr.length;
    
    // Traverse the subarray of each element in the array
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = 0; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         // If the current minimum index is not as previous minumum index
         // Swap the values
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    // Return the sorted Array 
    return inputArr;
}

const printArray = (sortedArray) => {
    sortedArray.forEach((el) => {
        console.log(el + " ");
    })
}
// Input Array
let inputArr = [25, 12, 10, 48, 19, 75, 54];

// Calling selectionSort on input Array
let sortedArray = selectionSort(inputArr);

// Calling printArray of print the sorted Array
printArray(sortedArray);

