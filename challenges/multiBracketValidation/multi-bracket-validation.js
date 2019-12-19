function multiBracketValidation(input){
  let closeParen = [']', '}', ')'];
  let openParen = ['[', '{', '('];

  let match;
  let char;
  let stack = [];
  let result = true;

  if(input.length <= 1) return false;

  for(let i = 0; i < input.length; i++){
    char = input[i];

    if(closeParen.indexOf(char) > -1){
      match = openParen[closeParen.indexOf(char)];
      if(stack.length === 0 || (stack.pop() !== match)){
        
        result = false;
      }
    } else {
      stack.push(char);
    }
  }
  
  
  closeParen.forEach(close => {
    openParen.forEach(open => {
      if(stack.indexOf(close) > -1 || stack.indexOf(open) > -1){
        result = false;
      }
    });
  });
  
  return result;
}


// for(let i = 0; i < input.length; i++){
//   if(paren.charAt(input[i]) > -1){
//     if(openParen.includes(input[i])){
//       stack.push(input[i]);
//     } else {
//       if(stack.length === 0){
//         return false;
//       }
//     }
//   }
// }
