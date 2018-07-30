/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating (penumpang) {
  var namaGerbong = [];
  var jumlahGerbong = 0;
  for (var i = 0; i < penumpang.length; i++) {
    if (penumpang[i].gerbong !== "checked") {
      namaGerbong.push([])
      namaGerbong[jumlahGerbong].push(penumpang[i].gerbong);
      namaGerbong[jumlahGerbong].push(penumpang[i].nama);
      namaGerbong[jumlahGerbong].push(penumpang[i].seat);
      for (var j = i+1; j < penumpang.length; j++) {
        if (penumpang[j].gerbong === penumpang[i].gerbong) {
          penumpang[j].gerbong = "checked";
          namaGerbong[jumlahGerbong].push(penumpang[j].nama);
          namaGerbong[jumlahGerbong].push(penumpang[j].seat);
        }
      }
      jumlahGerbong++
    }
  }
  console.log(jumlahGerbong);
  console.log(namaGerbong);
  var output = {};
  for (var k = 0; k < jumlahGerbong; k++) {
    output[namaGerbong[k][0]] = [];
    for (var j = 1; j < namaGerbong[k].length; j += 2) {
      output[namaGerbong[k][0]].push({
        nama: namaGerbong[k][j],
        seat: namaGerbong[k][j+1]
      })
    }
  }
  return output;
}


console.log(trainSeating([
  { nama: "Awtian", gerbong: "VVIP", seat: 'A1' },
  { nama: "Klonoa", gerbong: "VIP", seat: 'V1' },
  { nama: "Azizy", gerbong: "VVIP", seat: 'A2' },
  { nama: "Crash", gerbong: "Regular", seat: 'R1' },
  { nama: "Sena", gerbong: "Regular", seat: 'R3' },
  { nama: "Retsu", gerbong: "VIP", seat: 'V2' },
  { nama: "Hiruma", gerbong: "VVIP", seat: 'A666' },
  { nama: "Tsubasa", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
