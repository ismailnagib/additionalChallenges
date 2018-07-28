/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]

//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]

// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime

note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/

// PSEUDOCODE
  // STORE 'num' with any number
  // STORE 'output' with empty array
  // STORE 'i' with 2
  // WHILE 'i' < num
  //   STORE 'check' with true
  //   IF 'i' > 3 AND ('i' % 2 = 0 OR i % 3 = 0) THEN
  //     CHANGE 'check' to false
  //   ELSE IF 'i' >= 25 THEN
  //     STORE 'j' with 5
  //     WHILE 'j' * 'j' <= 'i'
  //       IF 'i' % 'j' = 0 THEN
  //         CHANGE 'check' to false
  //       END IF
  //       ADD 'j' by 2
  //     END LOOP
  //   END IF
  //   IF 'check' = true THEN
  //     PUSH 'i' into 'output'
  //   END IF
  //   ADD 'i' by 1
  // END LOOP
  // RETURN 'output'


// CODE
function getPrime(num) {
  var output = [];
  for (i = 2; i < num; i++) {
    var check = true;
    if (i > 3 && (i % 2 === 0 || i % 3 === 0)) {
      check = false;
    } else if (i >= 25) {
      for (var j = 5; j * j <= i; j += 2) {
        if (i % j === 0) {
            check = false;
        }
      }
    }
    if (check === true) {
      output.push(i);
    }
  }
  return output;
}

console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []
