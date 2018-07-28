/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut.
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [7, 5, 8, 3] dan [9, 1, 2, 5, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 4725
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!


*/
// PSEUDOCODE
  // STORE 'arrOperand1' with any number array
  // STORE 'arrOperand2' with any number array
  // IF length of 'arrOperand1' = 0 AND length of 'arrOperand2' = 0 THEN
  //   RETURN 0
  // ELSE THEN
  //   IF length of 'arrOperand1' < length of 'arrOperand2' THEN
  //     WHILE length of 'arrOperand1' < length of 'arrOperand2'
  //       PUSH 0 into 'arrOperand1'
  //     END LOOP
  //   ELSE IF length of 'arrOperand1' > length of 'arrOperand2' THEN
  //     WHILE length of 'arrOperand1' > length of 'arrOperand2'
  //       PUSH 0 into 'arrOperand2'
  //     END LOOP
  //   END IF
  //   STORE 'odd' with empty string
  //   STORE 'i' with 0
  //   WHILE 'i' < length of 'arrOperand1'
  //     STORE 'times' with INDEX 'i' of 'arrOperand1' * INDEX 'i' of 'arrOperand2'
  //     IF 'times' % 2 = 1 THEN
  //       PUSH 'times' into 'odd'
  //     END IF
  //     ADD 'i' by 1
  //   END LOOP
  //   STORE 'output' with 1
  //   STORE 'j' with 0
  //   WHILE 'j' < length of 'odd'
  //     CHANGE 'output' to 'output' * INDEX 'j' of 'odd'
  //     ADD 'j' by 1
  //   END LOOP
  //   RETURN 'output'
  // END IF


// CODE
function multiplyTheOdds(arrOperand1, arrOperand2) {
  if (arrOperand1.length === 0 && arrOperand2.length === 0) {
    return 0;
  } else {
    if (arrOperand1.length < arrOperand2.length) {
      for (; arrOperand1.length < arrOperand2.length;) {
        arrOperand1.push(0);
      }
    } else if (arrOperand1.length > arrOperand2.length) {
      for (; arrOperand1.length > arrOperand2.length;) {
        arrOperand2.push(0);
      }
    }
    
    var odd = []; 
    for (var i = 0; i < arrOperand1.length; i++) {
      var times = arrOperand1[i] * arrOperand2[i];
      if (times % 2 === 1) {
        odd.push(times);
      }
    }

    var output = 1;
    for (var j = 0; j < odd.length; j++) {
      output *= odd[j];
    }

    return output;
  }
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0
