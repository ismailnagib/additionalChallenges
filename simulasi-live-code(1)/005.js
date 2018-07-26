/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  var forOutput = [];
  var counter = 0;
  for (var i = 0; i < studentGrades.length; i++) {
    if (studentGrades[i].classCode !== "checked") {
      forOutput.push([studentGrades[i].classCode, [], []]);
      if(studentGrades[i].score >= 70) {
        forOutput[counter][1].push(studentGrades[i].name);
      } else {
        forOutput[counter][2].push(studentGrades[i].name);
      }
      for (var j = i + 1; j < studentGrades.length; j++) {
        if (studentGrades[j].classCode === studentGrades[i].classCode) {
          if(studentGrades[j].score >= 70) {
            forOutput[counter][1].push(studentGrades[j].name);
          } else {
            forOutput[counter][2].push(studentGrades[j].name);
          }
          studentGrades[j].classCode = "checked";
        }
      }
      counter++
    }
  }
  var output = [];
  for (var k = 0; k < forOutput.length; k++) {
    output.push({
      classCode: forOutput[k][0],
      passed: forOutput[k][1],
      failed: forOutput[k][2]
    })
  }
  return output;
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/