//---------------------------------------------
//Logic Challenge - X dan O--------------------



function xo(str){
var x = 0
var o = 0

  for(i = 0; i <= str.length ; i++){
    str.charAt(i)
    if (str.charAt(i)==='x'){
      x =  x + 1
    } else if(str.charAt(i)==='o'){
      o = o + 1
    }
  }

  if (x === o){
    return true
  } else {
    return false
  }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
