function linearSearch(arr, x) {

    let len = arr.length
    let i = 0
    // iterating through the full array checking each element to see if it is "x"
    for(i=0;i<len;i++) {
        if (arr[i] == x) {
            return i;
        }
    }

    return -1;
}
