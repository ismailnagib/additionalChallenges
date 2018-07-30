/**
  Vowels Counter Recursive

  Diberikan sebuah function consonantCounterRecursive(sentences) yang menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function consonantCounterRecursive(sentences) {
  var consonant = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  var checkThis = sentences[0];
  var value = 0;
  for (var i = 0; i < consonant.length; i++) {
    if (checkThis === consonant[i]) {
      value = 1;
    }
  }
  if (sentences.length === 1) {
    return value;
  } else {
    return value + consonantCounterRecursive(sentences.slice(1));
  }
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) // 10 (karena spasi tidak termasuk abjad/alphabet kan?)  // 13 itu kalo spasinya diitung
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
