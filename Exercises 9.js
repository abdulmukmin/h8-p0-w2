//------------------------------------------------------
//Tugas 1-----------------------------------------------

function shoutOut(nilai) {
  return (nilai)
}
console.log(shoutOut('Halo Function!'))

//------------------------------------------------------
//Tugas 2-----------------------------------------------
var num1=5
var num2=6
var hasilPerkalian= calculateMultiply(num1,num2)

function calculateMultiply(num1,num2){
  return num1*num2
}

console.log(hasilPerkalian)

//------------------------------------------------------
//Tugas 3-----------------------------------------------
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogjakarta"
var hobby = "gaming"

var fullSentence = processSentence(name, age, address, hobby)

function processSentence(name, age, address, hobby){
  return ('Nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby)
}

console.log(fullSentence)
