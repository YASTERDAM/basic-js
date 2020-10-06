const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!(arr instanceof Array)) return false;
  let res='';
  for(i in arr){
    if(typeof(arr[i])==="string"){
      res+=arr[i].trim().toUpperCase().split('').shift();
    }
  }
  res=res.split('').sort().join('');
  return res;
};
