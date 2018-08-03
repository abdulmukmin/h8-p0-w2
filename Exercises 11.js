//---------------------------------------------------------
//Logic Challenge - Balik Kata-----------------------------

function balikKata(kata) {

var jumlahKata = (kata.length-1)
var kataTerbalik =''

for(k=jumlahKata;k>=0;k--){
  kataTerbalik = kataTerbalik + kata.charAt(k)
  //console.log( kataTerbalik )
}
 return kataTerbalik
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
