// # EASY - REPEATED PATTERN

// Buatlah sebuah function yang me-_return_ jumlah karakter yang paling banyak muncul dalam sebuah deret string.
// kita bisa memasukan panjang karakter yang akan kita cari perulangannya.

// ```javascript
//     // str adalah string yang akan kita cari perulangannya
//     // length adalah jumlah karakter yang akan kita cari
//     // misal length = 2, maka kita akan mencari perulangan yang berisikan 2 karakter contoh: 'ab'
//     // length = 3, contoh: 'aba'
//     function countChar(str, length){

//     }
// ```


// contoh, kita mencari perulangan yang paling sering muncul dengan panjang 3 karakter :
// ```javascript
//     let str = "abacccccabacccceeeeddddabaeeeaba"
//     let str2 = "kkkmmmmooonnoooommmmxxxppaaammmm"

//     // case 1
//     let result = countChar(str, 3)
//     console.log(result) // "aba" - 4x

//     // case 2
//     let result = countChar(str, 1)
//     console.log(result) // "c" - 9x

//     // case 3
//     let result = countChar(str2, 3)
//     console.log(result) // "mmm" - 3x

//     // case 4
//     let result = countChar(str2, 1)
//     console.log(result) // "m" - 12x


function countChar(str, length){
    var mostRepeated = "";
    var counter = 0;
    for (var i = 0; i <= str.length - length; i++){
        var checking = "";
        var checkingCount = 0;
        for (var j = i; j < i + length; j++) {
            checking += str[j];
        }
        for (var k = 0; k <= str.length - length; k++) {
            var matchChecking = "";
            for (var l = k; l < k + length; l++) {
                matchChecking += str[l];
            }
            if (matchChecking === checking) {
                checkingCount++;
            }
        }
        if (checkingCount > counter) {
            counter = checkingCount;
            mostRepeated = checking;
        }
    }
    
    return mostRepeated + " - " + counter + "x";
}


var str = "abacccccabacccceeeeddddabaeeeaba"
var str2 = "kkkmmmmooonnoooommmmxxxppaaammmm"

// case 1
var result = countChar(str, 3)
console.log(result) // "aba" - 4x

// case 2
var result = countChar(str, 1)
console.log(result) // "c" - 9x

// case 3
var result = countChar(str2, 3)
console.log(result) // "mmm" - 3x

// case 4
var result = countChar(str2, 1)
console.log(result) // "m" - 12x