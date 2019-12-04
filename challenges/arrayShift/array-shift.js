const insertShiftArray = (arr, num) => {
  let newArr = [];
  let midPoint = Math.ceil(arr.length / 2);
    
  for(let i = 0; i < arr.length; i++){
    if(i === midPoint){
      newArr.push(num);
    }
    newArr.push(arr[i]);
  }
  
  return newArr;
};

module.exports = insertShiftArray;
