const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let commands = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  if(arr.length == 0) return [];
  if(!(Array.isArray(arr))) throw new Error(`THROWN`);
  let newArr = [];
  for (let i = 0 ; i < arr.length; i++) {
   if(arr[i] != commands[0] && arr[i] != commands[1] && arr[i] != commands[2] && arr[i] != commands[3]) {
      newArr.push(arr[i]);
    }
    if(arr[i-1] === commands[0]) {
      newArr.pop();
      continue;
    }
    if (arr[i - 1] ===commands[2]) newArr.push(arr[i]);
    if(arr[i+1] === commands[1]) {
      newArr.pop();
      continue;
    }
    if (arr[i + 1] === commands[3]) newArr.push(arr[i]);
  }
  return newArr;
  };
  
 