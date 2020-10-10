CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  if(options.additionSeparator===undefined)options.additionSeparator='|';
  if(options.separator===undefined)options.separator='+';
  if(options.repeatTimes===undefined && options.additionRepeatTimes===undefined)return str+options.addition;
  let res,el=[], sep=[];
  for(let i=0;i<options.repeatTimes;i++){
    el.push(str)
    for(let j=0;j<options.additionRepeatTimes;j++){
      sep.push(`${options.addition}`);
    }
    el[i]+=sep.join(options.additionSeparator)
    sep=[];
  }
res=el.join(options.separator);
return res;
};