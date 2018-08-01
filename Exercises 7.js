//----------------------------------------------------
//1.Menyusun Barisan Bintang--------------------------
var row1 = 5

while (row1 > 0){
  row1 -= 1
  console.log('*')
}


//----------------------------------------------------
//2. Menyusun Barisan Bintang Dengan Nested Looping---
var row2 = 5

for (var baris = 1; baris <= row2; baris++){
  baris + 1

  var bintang =''
  for (var kolom = 1; kolom <= row2; kolom++){
    bintang = bintang + '*'
    kolom + 1
    }
  console.log(bintang)
}





//----------------------------------------------------
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5
for (var baris=0; baris<=row3; baris++){
  baris + 1

  var bintang = ''
  for (var kolom=0; kolom < baris; kolom++){
    bintang = bintang + '*'
    
  }
  console.log (bintang)
}