var arrayToSearch = [2, 6, 8, 12, 14, 16, 20, 24, 26, 28, 30, 31, 35];
 
console.log("Found at position :" + interpolationSearch(arrayToSearch, 2));
console.log("Found at position :" + interpolationSearch(arrayToSearch, 12));
console.log("Found at position :" + interpolationSearch(arrayToSearch, 35));
console.log("Found at position :" + interpolationSearch(arrayToSearch, 44444));
 
function interpolationSearch(arrayToSearch, valueToSearch){
  var length = arrayToSearch.length;
  var low = 0;
  var high = length-1;
  var position = -1;
  var delta = -1;
  while(low <= high 
        && valueToSearch >= arrayToSearch[low]
        && valueToSearch <= arrayToSearch[high]){
    delta = (valueToSearch-arrayToSearch[low])/(arrayToSearch[high]-arrayToSearch[low]);
    position = low + Math.floor((high-low)*delta);
    if (arrayToSearch[position] == valueToSearch){
      return position;
    }
    if (arrayToSearch[position] < valueToSearch){
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
 
  return -1;
}
