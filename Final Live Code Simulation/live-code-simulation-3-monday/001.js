/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

BUATLAH sebuah pseudocode untuk membuat program bilangan prima!
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

// STORE 'num' with any number
// STORE 'check' with value equals true
// IF 'num' IS LESS THAN 2 THEN
//   CHANGE 'check' to false
// ELSE IF 'num' IS GREATER THAN 3 AND ('num' % 2 equals 0 OR 'num' % 3 equals 0) THEN
//   CHANGE 'check' to false
// ELSE IF 'num' IS GREATER THAN OR EQUALS 25 THEN
//   STORE 'i' equals 5
//   WHILE 'i' * 'i' IS LESS THAN OR EQUALS 'num'
//     IF 'num' % 'i' equals 0 THEN
//       CHANGE 'check' to false
//     END IF
//   END LOOP
//   ADD 'i' by 2
// END IF
// IF 'check' equals true THEN
//   RETURN "INI BILANGAN PRIMA"
// END IF