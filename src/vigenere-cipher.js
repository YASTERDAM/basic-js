const CustomError = require("../extensions/custom-error");
let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
class VigenereCipheringMachine {
  constructor(type){
    this.type=type;
  }
  encrypt(msg,key) {
    debugger
    msg=msg.toUpperCase()
    key=key.toUpperCase()
    let res='';
    let f_position;
    let s_position;
    let dif;
    let j=0;
    for(let i=0;i<msg.length;i++){
      if(alphabet.indexOf(msg[i])===-1){
        res+=msg[i];
        continue;}
      if(j>key.length-1){j=0}
      f_position=alphabet.indexOf(msg[i]);
      dif=key.charCodeAt(j)-64-1;
      if(f_position+dif>alphabet.length-1){
        s_position=f_position+dif-alphabet.length;
        res+=alphabet[s_position];
      }
      else{
        s_position=f_position+dif;
        res+=alphabet[s_position];
      }
      j++;
    }
    if(this.type===false) return res.split('').reverse().join('');
    else return res;
  }    
  decrypt(msg,key) {
    debugger
    msg=msg.toUpperCase()
    key=key.toUpperCase()
    let res='';
    let f_position;
    let s_position;
    let dif;
    let j=0;
    for(let i=0;i<msg.length;i++){
      if(alphabet.indexOf(msg[i])===-1){
        res+=msg[i];
        continue;}
      if(j>key.length-1){j=0}
      f_position=alphabet.indexOf(msg[i]);
      dif=key.charCodeAt(j)-64-1;
      if(f_position-dif<0){
        s_position=alphabet.length+(f_position-dif);
        res+=alphabet[s_position];
      }
      else{
        s_position=f_position-dif;
        res+=alphabet[s_position];
      }
      j++;
    }
    if(this.type===false) return res.split('').reverse().join('');
    else return res;
  }
}

module.exports = VigenereCipheringMachine;
