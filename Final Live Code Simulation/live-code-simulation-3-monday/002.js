/*
================
Galon Checker
================
Name :_____________

[INSTRUCTIONS]
galonChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah galon yang penuh (F), setengah penuh (H) dan galon kosong (E)
dan function akan mereturn jumlah masing2 jenis galon dan total galon secara keseluruhan.

Adapun ketentuannya:
Full (F) = 1
Half (H) = 1/2
Empty (E) = 0

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
galonChecker(['F','H','F'])
output: jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
*/

// PSEUDOCODE
    // STORE 'array' with any array
    // IF length of 'array' IS GREATER THAN 0 THEN
    //   STORE 'output' with an array with value equals 0, 0, 0, 0
    //   STORE 'i' with value equals 0
    //   WHILE 'i' IS LESS THAN length of 'array'
    //     IF INDEX 'i' of 'array' equals "F" THEN
    //       ADD INDEX 0 of 'output' by 1
    //       ADD INDEX 3 of 'output' by 1
    //     ELSE IF INDEX 'i' of 'array' equals "H" THEN
    //       ADD INDEX 1 of 'output' by 1
    //       ADD INDEX 3 of 'output' by 0.5
    //     ELSE IF INDEX 'i' of 'array' equals "E" THEN
    //       ADD INDEX 2 of 'output' by 1
    //     END IF
    //   END LOOP
    //   RETURN "jumlah F: " + INDEX 0 of 'output' + ", jumlah H: " + INDEX 1 of 'output' + ", jumlah E: " + INDEX 2 of 'output' + ". Dan totalnya adalah: " + INDEX 3 of 'output'
    // ELSE THEN
    //   RETURN "NO DATA"
    // END IF
    



function galonChecker(array) {
  if (array.length > 0) {
    var output = [0, 0, 0, 0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] === "F") {
        output[0]++;
        output[3]++;
      } else if (array[i] === "H") {
        output[1]++;
        output[3] += 0.5;
      } else if (array[i] === "E") {
        output[2]++;
      }
    }
    return "jumlah F: " + output[0] + ", jumlah H: " + output[1] + ", jumlah E: " + output[2] + ". Dan totalnya adalah: " + output[3];
  } else {
    return "NO DATA";
  }
}

console.log(galonChecker(['F','H','F']));
// jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
console.log(galonChecker(['H','H','F','F','E']));
// jumlah F: 2, jumlah H: 2, jumlah E: 1. Dan totalnya adalah: 3
console.log(galonChecker(['E','F','F','F','H']));
// jumlah F: 3, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 3.5
console.log(galonChecker(['E','H']));
// jumlah F: 0, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 0.5
console.log(galonChecker(['H','H','H','H']));
// jumlah F: 0, jumlah H: 4, jumlah E: 0. Dan totalnya adalah: 2
console.log(galonChecker([])); //NO DATA
