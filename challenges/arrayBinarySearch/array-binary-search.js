function BinarySearch(arr, key){
  let result;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === key){
      result = i;
      break;
    }

    result = -1;
  }

  return result;
}

module.exports = BinarySearch;
