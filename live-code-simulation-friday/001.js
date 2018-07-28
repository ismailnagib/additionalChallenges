/*

Ugly numbers adalah angka yang jika dibagi dengan faktor prima angka 2, 3 atau 5 menghasilkan angka 1.

Contoh 1:
4 merupakan ugly number karena
Proses:
  1. 4 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 2
     2 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 4 merupakan ugly number

contoh 2:
15 merupakan ugly number karena
Proses:
  1. 15 dibagi 2 menghasilkan sisa bagi > 0, maka akan melanjutkan ke step 2
  2. 15 dibagi 3 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 15 merupakan ugly number

contoh 3:
17 bukan ugly number karena
Proses:
  1. 17 dibagi 2 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 2
  2. 17 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 17 dibagi 5 menghasilkan sisa bagi > 0 dan hasilnya bukan 1

Maka 17 bukan ugly number

contoh 4:
20 merupakan ugly number karena
Proses:
  1. 20 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 10
     10 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 2 menghasilkan sisa bagi > 0 maka lanjut ke step 2
  2. 5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 20 merupakan ugly number

Buatlah sebuah function getUglyNumber dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan ugly number sampai angka parameter tersebut.

Contoh 1:
input: 10
output: [ 2, 3, 4, 5, 6, 8, 9, 10 ]

Contoh 2:
input: 20
output: [ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]

RULE:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE

*/

// ALGORITMA

// 1. Simpan variabel 'num' berisi angka
// 2. Simpan variabel 'output' berisi array kosong
// 3. Simpan variabel 'i' berisi 2
// 4. Selama variabel 'i' lebih kecil dari 'num', maka:
//   4.a. Simpan variabel 'iCopy' berisi 'i'
//   // FUNCTION DIBAGI2
//   4.b. Jika 'i' modulus 2 sama dengan 0, maka:
//     4.b.a. Jika 'i' dibagi 2 sama dengan 1, maka:
//       4.b.a.a. Masukkan 'iCopy' ke dalam 'output'
//     4.b.b. Selain yang lolos 4.b.a., maka:
//       4.b.b.a. Bagi 'i' dengan 2
//       4.b.b.b. Ulang lagi proses dari 4.b
//   4.c. Selain yang lolos 4.b., maka lanjut ke 4.d.
//   // FUNCTION DIBAGI4
//   4.d. Jika 'i' modulus 3 sama dengan 0, maka:
//     4.d.a. Jika 'i' dibagi 3 sama dengan 1, maka:
//       4.d.a.a. Masukkan 'iCopy' ke dalam 'output'
//     4.d.b. Selain yang lolos 4.b.a., maka:
//       4.d.b.a. Bagi 'i' dengan 3
//       4.d.b.b. Ulang lagi proses dari 4.d
//   4.e. Selain yang lolos 4.d., maka lanjut ke 4.f.
//   // FUNCTION DIBAGI5
//   4.f. Jika 'i' modulus 5 sama dengan 0, maka:
//     4.f.a. Jika 'i' dibagi 5 sama dengan 1, maka:
//       4.f.a.a. Masukkan 'iCopy' ke dalam 'output'
//     4.f.b. Selain yang lolos 4.b.a., maka:
//       4.f.b.a. Bagi 'i' dengan 5
//       4.f.b.b. Ulang lagi proses dari 4.f
//   4.g. Ubah 'i' menjadi 'i' + 1
// 5. Tampilkan 'output'



// CODE

function getUglyNumber(num) {
  var output = [];
  for (var i = 2; i <= num; i++) {
    var iCopy = i;
    function dibagi2(num) {
      if (num % 2 === 0) {
        if (num / 2 === 1) {
          output.push(iCopy);
        } else {
          num /= 2;
          return dibagi2(num);
        }
      } else {
        return dibagi3(num);
      }
    }
    function dibagi3(num) {
      if (num % 3 === 0) {
        if (num / 3 === 1) {
          output.push(iCopy);
        } else {
          num /= 3;
          return dibagi3(num);
        }
      } else {
        return dibagi5(num);
      }
    }
    function dibagi5(num) {
      if (num % 5 === 0) {
        if (num / 5 === 1) {
          output.push(iCopy);
        } else {
          num /= 5;
          return dibagi5(num);
        }
      }
    }
    dibagi2(i);
  }
  return output;
}

console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(1)); //[]
