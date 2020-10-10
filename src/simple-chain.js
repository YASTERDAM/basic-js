const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values:[],
  getLength() {
    return this.values,length;
  },
  addLink(value) {
    debugger;
    if(value===undefined)this.values.push(`( )`);
    this.values.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    debugger
    if(this.values[position-1]===NaN ||(this.values[position-1] instanceof Number&&!Number.isInteger(this.values[position-1])) || (position<1||position>this.values.length)){
      this.values=[];
      throw new Error('THROWN');}
      this.values.splice(position-1,1);return this;
  },
  reverseChain() {
    debugger
    this.values.reverse();
    return this;
  },
  finishChain() {
    debugger
    let res=this.values.join('~~');
    this.values=[];
    return res;
  }
};

module.exports = chainMaker;
