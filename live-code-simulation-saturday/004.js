
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {
  var firstLetters = [studentsArr[0][0]];
  for (var i = 1; i < studentsArr.length; i++) {
    if (studentsArr[i][0] !== studentsArr[i-1][0]) {
      firstLetters.push(studentsArr[i][0]);
    }
  }
  var temp = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var j = 1; j < firstLetters.length; j++) {
    for (var k = 0; k < firstLetters.length - 1; k++) {
      if(alphabet.indexOf(firstLetters[k]) < alphabet.indexOf(firstLetters[k+1])) {
        temp = firstLetters[k];
        firstLetters[k] = firstLetters[k+1]
        firstLetters[k+1] = temp;
      }
    }
  }
  var output = [];
  for (var l = 0; l < firstLetters.length; l++) {
    output.push([]);
    output[l].push(firstLetters[l]);
    for (var m = 0; m < studentsArr.length; m++) {
      if (studentsArr[m][0] === firstLetters[l]) {
        output[l].push(studentsArr[m]);
      }
    }
  }
  return output;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
