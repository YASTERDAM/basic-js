const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor (){
    this.c_vlozh=0;
    this.c_max=0;
  }
  calculateDepth(arr) {
    let self=this;
    let tmp=self.c_max;
    if(Array.isArray(arr)){
      self.c_vlozh++;
      if(arr.length===0 &&tmp<self.c_vlozh){self.c_max=self.c_vlozh}
      for(let i=0;i<arr.length;i++){
        if(i===arr.length-1 && !(arr[i] instanceof Array)&&tmp<self.c_vlozh)self.c_max=self.c_vlozh;
        if(arr[i]instanceof Array)self.calculateDepth(arr[i]);
      }
    }
    
    if(self.c_vlozh===1){
      let res=self.c_max;
      self.c_max=0;;
      self.c_vlozh=0;
      return res;
    }
    else{ 
      self.c_vlozh--;
      return this.c_max;}
  }

};