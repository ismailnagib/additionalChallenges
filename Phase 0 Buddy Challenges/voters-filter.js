//  ================
//  FILTER VOTERS
//  ================
//  description: sebuah fungsi untuk memfilter data pemilih pada suatu daerah menjadi pemilih yang valid
//               dan pemilih yang tidak valid. Pemilih yang valid merupakan warga yang namanya hanya muncul
//               1 kali sedangkan pemilih tidak valid adalah yang namanya muncul lebih dari 1 kali.
//               fungsi akan mengembalikan nilai valid voters dan invalid voters dan akan mengembalikan
//               nilai 'NO DATA' jika data masih kosong

//  rules:
//  1. Tidak boleh menggunakan built function seperti .filter, .sort, .map, .reduce
//  2. Tidak boleh menggunakan REGEX seperti match, replace, dll
//  3. Apabila terdapat nama pada invalid voters, nama tersebut HANYA MUNCUL 1 KALI

//  examples:
//  1. INPUT:
//   [{
//    firstName: 'Ihsan',
//    lastName: 'Maulana',
//    age: 23
//   }, {
//    firstName: 'Neil',
//    lastName: 'Tanodo',
//    age: 23
//   }, {
//    firstName: 'Ihsan',
//    lastName: 'Maulana',
//    age: 23
//   }]

//      OUTPUT:
//    {
//      valid_voters: [{
//        fullName: 'Neil Tanodo',
//        age: 23
//      }],
//      invalid_voters: [{
//        fullName: 'Ihsan Maulana',
//        age: 23
//      }]
//    }

//    2. INPUT:
//      [{
//        firstName: 'Philip',
//        lastName: 'Bryan',
//        age: 23
//      }, {
//        firstName: 'Philip',
//        lastName: 'Bryan',
//        age: 23
//      }]

//        OUTPUT:
//      {
//        valid_voters: [],
//        invalid_voters: [{
//          fullName: 'Philip Bryan',
//          age: 23
//        }]
//      }

function votersFilter (input) {
    var output = {
        valid_voters: [],
        invalid_voters: []
    }
    for (var i = 0; i < input.length - 1; i++) {
        var lengthCheck = output.invalid_voters.length;
        if (input[i].firstName !== "checked") {
            for (var j = i + 1; j < input.length; j ++) {
                if (input[i].firstName === input[j].firstName && input[i].lastName === input[j].lastName) {
                    output.invalid_voters.push({
                        fullName: input[i].firstName + " " + input[i].lastName,
                        age: input[i].age
                    });
                    input[j].firstName = "checked";
                }
            }
            if (output.invalid_voters.length === lengthCheck) {
                output.valid_voters.push({
                    fullName: input[i].firstName + " " + input[i].lastName,
                    age: input[i].age
                });
            }
        }
    }
    return output;
}

console.log(votersFilter(
  [{
   firstName: 'Ihsan',
   lastName: 'Maulana',
   age: 23
  }, {
   firstName: 'Neil',
   lastName: 'Tanodo',
   age: 23
  }, {
   firstName: 'Ihsan',
   lastName: 'Maulana',
   age: 23
  }]
));

// OUTPUT:
// {
//     valid_voters: [{
//         fullName: 'Neil Tanodo',
//         age: 23
//     }],
//     invalid_voters: [{
//         fullName: 'Ihsan Maulana',
//         age: 23
//     }]
// }

console.log(votersFilter(
  [{
    firstName: 'Philip',
    lastName: 'Bryan',
    age: 23
  }, {
    firstName: 'Philip',
    lastName: 'Bryan',
    age: 23
  }]
));

// {
//     valid_voters: [],
//     invalid_voters: [{
//         fullName: 'Philip Bryan',
//         age: 23
//     }]
// }