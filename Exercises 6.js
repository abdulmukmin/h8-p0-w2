//---------------------------------------------------
//1. Melakukan Looping Menggunakan While-------------

var itungLop1 = 0
var lop1 = 'LOOPING PERTAMA'
var itungLop2 = 22
var lop2 = 'LOOPING KEDUA'
console.log(lop1)
while (itungLop1<20){
	itungLop1+=2
  console.log(itungLop1 + ' - I love coding')
}

console.log(lop2)
while (itungLop2>2){
  itungLop2-=2
  console.log(itungLop2 +' - I will become fullstack developer')
}

//---------------------------------------------------
//2. Melakukan Looping Menggunakan For---------------

var loop1 = 'LOOPING PERTAMA'
var loop2 = 'LOOPING KEDUA'

console.log(loop1)
for(var loopingke1 =1; loopingke1 <= 20; loopingke1 += 1) {
  console.log(loopingke1 + ' - I love coding');
}

console.log(loop2)
for(var loopingke2 = 20; loopingke2 > 0; loopingke2 -=1){
  console.log(loopingke2 + ' - I will become fullstack developer');
}

//---------------------------------------------------
//3. Angka Ganjil dan Genap--------------------------

///1.Buatlah sebuah perulangan1 1 - 100 dengan perulangan counter sebanyak 1
///2.Di dalam perulangan1, periksa setiap angka counter:
////2.a Apabila angka counter adalah angka genap, tuliskan GENAP
////2.b Apabila angka counter adalah angka ganjil, tuliskan GANJIL

var perulangan1 = 0
while (perulangan1<100) {
   perulangan1+=1
   if(perulangan1%2){
     console.log('GANJIL')
   } else {
     console.log('GENAP')
   }
  }
  
///3.Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
///4.Pada 3 perulangan baru ini periksa setiap angka counter:
////4.a Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
////4.b Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
////////"3 kelipatan 3" dan seterusnya.
  
var perulangan2 = 1
var kelipatan3 = 0
var perulangan5 = 1
var kelipatan6 = 0
var perulangan9 = 1
var kelipatan10 = 0

//perulangan2
while (perulangan2<100-2) {
   hasilPerulangan2=perulangan2+=2
   if (hasilPerulangan2 % 3===0){
     console.log(hasilPerulangan2+ ' KELIPATAN 3')
   } else {
     console.log('')
   }
}


//perulangan5
while (perulangan5<100-5) {
  hasilPerulangan5=perulangan5+=5
  if(hasilPerulangan5 % 6=== 0){
     console.log(hasilPerulangan5+' KELIPATAN 6')
     } else {
     console.log('')
  }
}

//perulangan9
while (perulangan9<100) {
  hasilPerulangan9=perulangan9+=9
  if(hasilPerulangan9 % 10 === 0){
    console.log(hasilPerulangan9+' KELIPATAN 10')
    } else {
    console.log('')
  }
}