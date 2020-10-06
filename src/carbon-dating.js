const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)!=String)return false;
  let sA=parseInt(sampleActivity);
  if(sA===NaN)return false;
  if(sA === 0 || sA>MODERN_ACTIVITY ||sA<0)return false;
  let k=0.693/HALF_LIFE_PERIOD;
  let t=Math.log(MODERN_ACTIVITY/sA)/k;
  return Math.ceil(t);
};
