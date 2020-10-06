const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
 let counter=0;
 for(let i in arr){
  for(let j in arr[i]){
    if(arr[i][j]==='^^')counter++;
  }
 }
 console.log(counter);
 return counter;
};
