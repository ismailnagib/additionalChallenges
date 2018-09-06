// Saya mempunyai sebuah perpustakaan dalam perpustakaan tersebut
// terdapat 10 buku 
// saya juga bisa memasukkan buku baru ke perpustakaan tersebut.
// aplikasi ini memiliki dua tipe user
// VIP 
//  - limit buku 3
//  - maksimal pengembalian 1 minggu
// Normal
//  - limit 1 buku
//  - maksimal pengembalian 3 hari
 
// Ada 3 user dalam aplikasi ini
// - JOHN -> VIP
// - Kim Gun Mo -> Normal
// - Hyun Seung hee -> Normal
// buatlah sebuah method dalam class user untu
// k meminjam buku dari perpus
// contoh
// user.borrow('harry potter')
// // user meminjam buku harry potter dimulai dari hari ini
// pastikan limit buku tidak melewati yang sudah di pinjam.
// Buatlah sebuah method di class user `return`
// yang memiliki dua paramter
// parameter pertama buku yang akan dibalikkan
// parameterk edua kapan(tanggal) buku tersebut di balikkan.
// contoh
// // user.return('harry potter', '2018-12-2')
// misal tanggal yang di masukkan di fungsi return melebihi 
// tanggal batas maksimumnya 
// tampilkan message melebihi waktu
// kalau masih dalam interval waktunya tampilkan message tepat waktu
// setiap kali kita nge return buku maka hilangkan jumlah buku yang kita pinjam pada user tersebut. 

const fs = require('fs');

class Library {

    constructor() {
        this.books = fs.readFileSync('./libraryData.json');
    }

    add(title) {
        this.books.push(new Book(title));
        fs.writeFileSync('./libraryData.json', JSON.stringify(this.books, null, 4), 'utf-8');
    }

}

class Book {

    constructor(title) {
        this.title = title;
        this.status = true;
        this.borrowDate = undefined;
    }
}

class NormalUser {

    constructor() {
        this.bookLimit = 1;
        this.returnLimit = 3;
    }

    borrow(library, title) {
        if (this.bookLimit !== 0) {
            for (var i = 0; i < library.books.length; i++) {
                if (library.books[i].title === title && library.books[i].status) {
                    library.books[i].status = false;
                }
            }
        }
    }
}

class VIPUser extends NormalUser {

    constructor() {
        super();
        this.bookLimit = 3;
        this.returnLimit = 7;
    }
}