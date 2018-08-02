var tanggal = 5
var bulan = 7
var tahun = 2001
var sebutBulan = ''

//cek tanggal 
switch (true){
	case tanggal >= 1 && tanggal <= 31 :    

    //cek bulan
    switch (true){
      case bulan >= 1 && bulan <=12 :

        //cek tahun
        switch (true){
          case tahun >=1900 && tahun <= 2200 :

			//kalo sudah benar semua baruu proses konversi bulan
            switch (bulan){
              case 1:
                sebutBulan = 'Januari';
                break;
              case 2:
                sebutBulan = 'Februari';
                break;
              case 3:
                sebutBulan = 'Maret';
                break;
              case 4:
                sebutBulan ='April';
                break;
              case 5:
                sebutBulan = 'May';
                break;
              case 6:
                sebutBulan ='Juni';
                break;
              case 7:
                sebutBulan ='Juli';
                break;
              case 8:
                sebutBulan = 'Agustus';
                break;
              case 9:
                sebutBulan = 'September'
                break;
              case 10:
                sebutBulan = 'Oktober';
                break;
              case 11:
                sebutBulan = 'November';
                break;
              case 12:
                sebutBulan = 'Desember';
                break;
			//baru tampilkan semuanya
            } console.log(''+ tanggal +' '+sebutBulan+' '+tahun+'')

          break
          default :
            console.log('inputan tahun keliru')
            break 
        }
        break
      default :
        console.log('inputan bulan keliru')
        break;
    }

    break
	default :
	  console.log('inputan tanggal keliru');
	  break;
}