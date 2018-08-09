/*
  ================
  GET MEMBER SUMMARY
  ================
  author: Muhammad Ramadiansyah
  description: Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi berdasarkan data-data
               seperti nama depan, nama belakang, dan umur.
               fungsi ini akan mengembalikan sebuah object dengan atribut total member, rata-rata umur, 
               dan anggota yang paling tua dan muda dengan keterangan nama lengkap dan umur.
  
  rules:
  1. tidak boleh menggunakan built in function seperti sort, filter, index of, Math.max, Math.min dan sejenisnya
  2. tidak boleh menggunakan regex ( match, replace, dll)
  3. asumsi contoh data memiliki umur yang berbeda-beda 
  4. jika data masih kosong maka akan mengembalikan "Belum ada data"

  examples:
  1. diberikan data = 
    [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 27
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }, {
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 19
    }],
  
    maka output = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 27,
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 19,
      },
      average_member_age = 23
    }
*/

function getMemberSummary (member) {
    if (member.length > 0) {
        var maxAge = member[0].age;
        var maxIndex = 0;
        var minAge = member[0].age;
        var minIndex = 0;
        var ageSumArr = [member[0].age];
        var ageSum = 0;

        for (var i = 1; i < member.length; i++) {
            ageSumArr.push(member[i].age);
            if (member[i].age > maxAge) {
                maxAge = member[i].age;
                maxIndex = i;
            }
            if (member[i].age < minAge) {
                minAge = member[i].age;
                minIndex = i;
            }
        }
        
        for (var j = 0; j < ageSumArr.length; j++) {
            ageSum += ageSumArr[j];
        }
        var ageAvg = Math.round(ageSum / member.length);

        var output = {
            total_member: member.length,
            oldest_member: {
                full_name: member[maxIndex].first_name + " " + member[maxIndex].last_name,
                age: member[maxIndex].age
            },
            youngest_member: {
                full_name: member[minIndex].first_name + " " + member[minIndex].last_name,
                age: member[minIndex].age
            },
            average_member_age: ageAvg
        }

        return output;

    } else {
        return "Belum ada data"
    }
}

console.log(getMemberSummary([{
        first_name: 'Wika',
        last_name: 'Silo',
        age: 2
      }, {
        first_name: 'Dhani',
        last_name: 'Damara',
        age: 27
      }, {
        first_name: 'Fandy',
        last_name: 'Barestu',
        age: 18
      }, {
        first_name: 'Acha',
        last_name: 'Acha',
        age: 29
      }, {
        first_name: 'Zena',
        last_name: 'Villenia',
        age: 32
      }, {
        first_name: 'Annisa',
        last_name: 'Ayu',
        age: 21
      }],
));
//output
/*
 {
   total_member: 6,
   oldest_member: {
      full_name: 'Zena Villenia',
      age: 32,
   },
   youngest_member: {
    full_name: 'Fandy Barestu',
    age: 18,
   },
   average_member_age: 26
 }
*/

console.log(getMemberSummary(
  [{
    first_name: 'Rama',
    last_name: 'Diansyah',
    age: 20
  }, {
    first_name: 'Malik',
    last_name: 'Adhi',
    age: 21
  }, {
    first_name: 'Dita',
    last_name: 'Zakiah',
    age: 27
  }]
))

/*
  total_member: 3,
  oldest_member: {
      full_name: 'Dita Zakiah',
      age: 27,
   },
  youngest_member: {
    full_name: 'Rama Diansyah',
    age: 20,
   },
   average_member_age: 23
*/

console.log(getMemberSummary(
  [{
    first_name: 'Zena',
    last_name: 'Villenia',
    age: 20
  }]
))
/*
  { 
    total_member: 1,
    oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    average_member_age: 20 
  }
*/

console.log(getMemberSummary([]))

/*
  "Belum ada data"
*/