function binarySearchIterative(array, searchElement){
    let leftIndex = 0; let rightIndex = array.length-1;
    while(leftIndex <= rightIndex){
        let midIndex = leftIndex + Math.floor((rightIndex - leftIndex)/2);

        if(array[midIndex] === searchElement){
            return midIndex;
        }

        else if(array[midIndex] < searchElement){
            leftIndex = midIndex+1;
        }

        else{
            rightIndex = midIndex -1;
        }
    }

    return -1;
}

function binarySearchRecursive(array, leftIndex, rightIndex, searchElement){
    if(leftIndex > rightIndex){
        return -1;
    }
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex)/2);
    if(array[midIndex] === searchElement){
        return midIndex;
    }
    else if(array[midIndex] < searchElement){
        return binarySearchRecursive(array, midIndex+1, rightIndex, searchElement);
    }
    else{
        return binarySearchRecursive(array, leftIndex, midIndex-1, searchElement);
    }
}

let A = [1, 21, 24, 55, 83, 100, 120];
let searchElement = 24
let size = A.length-1;
console.log("Binary Search Index using iterative method:",binarySearchIterative(A, searchElement));
console.log("Binary Search Index using recursive method:",binarySearchRecursive(A, 0, size, searchElement));