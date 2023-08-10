//cara membuat variabe
var a = 'a';
let b = 'b';
const c = 'c';

//variabel bisa menampung tipe data string (text), integet/number, boolean, array, object,

let nama = "bryan"; //string
let umur = 22; //number
let apakahbenar = true; //boolean
let uang = 5000.5 //number namun ada koma

//operator aritmatika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2);


//disini kita belajar mengisi variabe
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); // 30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //ntah berapa

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //10

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'agus';
let lastname = 'setiawan';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' + lastname);
console.log(firstname - lastname) //NaN

//alur pembacaan code
//untuk membaca code kalian harus membacanya dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10

//pertanyaan? kanapa false - 10 tetapmenjadi 10????? karena false = 0, true = 1;
console.log(true + 10); //11

//membaca error
//error itu jangan kalian takut, justru kalian harus takut kalau ada tidak ada yang namanya error dalam pemrograman
//karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si program rada
//muak buat mencari errornya atau letak kesalahannya

//contoh error
// const hewan ='jerapah';
// console.log(hewan);
// hewan = 'buaya';

// auto komentar bisa dengan mencet ctrl + /
//Tipsnya adalah, selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding itu perlu kebiasaan
//karena ngoding itu adalah habit