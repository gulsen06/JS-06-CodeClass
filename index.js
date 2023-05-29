// AND opratörü
//? her iki değer de true ise son true değeri döndürür, aksi takdirde ilk false değeri döndürür

// console.log(true && 1);
// console.log(false && 1);
// console.log(1 && 3);
// console.log(1 && 0);
// console.log([] && 1);

// OR opratörü
// console.log(1 || false);
// console.log(false || 0);
// console.log(0 || NaN);
// console.log(213 || "harvey");
// console.log(1 || true);

// console.log(Boolean (123))

// const a = true;

// if (a) {
//     console.log("harvey")
// }

// let status1 = true;

// if (status1) {
//     console.log("deneme1")
// } else {
//     console.log("deneme2")
// }

// status1 ? console.log("1"): console.log("2")

//! 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)

// let yas = +prompt("yaşınızı giriniz");

// console.log(typeof a)

// if (yas < 18) {
//     console.log(`Yaşınız 18'den küçüktür, yaşınız ${yas}'dır`)
// } else if(yas == 18) {
//     console.log(`Yaşınız 18'dir, yaşınız ${yas}'dır`)
// }else{
//     console.log(`Yaşınız 18'den büyüktür, yaşınız ${yas}'dır`)
// }

// yas < 18 ? console.log(`Yaşınız 18'den küçüktür, yaşınız ${yas}'dır`) : console.log(`Yaşınız 18'den büyüktür, yaşınız ${yas}'dır`);

//! (bonus) girilen yılın yüzyılını veren program 1788 > 18.yüzyıl

// let yil = +prompt("yıl giriniz:");
// 1788/100
// 17,81
// 17
// 17+1

// let x = Math.trunc(yil/100) +1;
// console.log(x)
// console.log(`${x} yüzyıl`)

//! 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//?  Not:
//?  90'dan büyükse AA.
//? - 80'den büyük yada 90'a eşitse AB,
//? - 70'den büyük yada 80'a eşitse BB,
//? - 60'den büyük yada 70'a eşitse BC,
//? - 40'den büyük yada 50'a eşitse CD,
//? - 30'den büyük yada 40'a eşitse DD,
//? - 30'dan küçük yada eşitse FF ,
//? - 50'den büyük yada 60'a eşitse CC,

let dersNotu = 150;

// if (dersNotu < 0 || dersNotu > 100) {
//   console.log("Notunuz 100'den büyük 0'dan küçük olamaz")
// } else if (dersNotu > 90) {
//   console.log("Harfiniz AA'dır.")
// } else if (dersNotu > 80) {
//   console.log("Harfiniz AB'dır.")
// } else if (dersNotu > 70) {
//   console.log("Harfiniz BB'dır.")
// } else if (dersNotu > 60) {
//   console.log("Harfiniz BC'dır.")
// } else if (dersNotu > 50) {
//   console.log("Harfiniz CC'dır.")
// } else if (dersNotu > 40) {
//   console.log("Harfiniz CD'dır.")
// } else if (dersNotu > 30) {
//   console.log("Harfiniz DD'dır.")
// } else {
//   console.log("Harfiniz FF'dır.")
// }

//! 3- Artık yıl sorusu
//? Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//? Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

//? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// let yil = 2001;

// if (yil % 4 == 0 && yil % 100 != 0) {
//     console.log(`${yil} artık yıldır`)
// } else if (yil % 400 == 0 ) {
//     console.log(`${yil} artık yıldır`)
// }else {
//     console.log(`${yil} artık yıl değildir`)
// }

//! 4- 1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları konsola yazdırınız ?

// let sayac = 0
// for (let i = 1000; i < 2000; i++) {
//     if (i%13 ===3 ) {
//         console.log(i)
//         sayac ++
//     }
// }

// console.log(sayac)

//!!! 5- kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?
//? while ile
// let sayac = 0;
// let toplam = 0;

// while (sayac < 5) {
//     let sayi = +prompt("sayı giriniz");
//     toplam +=sayi
//     sayac ++;
// }

// console.log(toplam/sayac)

// //? for ile
// let i = 0;
// let sum1 = 0;
// for (i = 1; i <= 5; i++) {
//   let num = parseInt(prompt(`${i}. sayıyı giriniz`));
//   sum1 += num;
// }
// let avarage = sum1 / (i - 1);
// console.log(`Girilen sayının ortalaması ${avarage}'dır`);

//! 6- Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?
// let sum = 0;

// while (true) {
//     let num = +prompt("lütfen sayı giriniz")
//     if (num < 0) {
//         break
//     }
//     sum+= num
// }

// console.log(`Girilen sayıların toplamı: ${sum}`)

//! 7- sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

// for (let i = 0; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 == 0 ) {
//         console.log("FizzBuzz")
//     } else if(i % 3 === 0) {
//         console.log("Fizz")
//     }else if (i % 5 ===0) {
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }

// }

//! 8- Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?
// let number = +prompt('bir sayı giriniz');
// let digitCount = 0;

// while (number !== 0) {
//     digitCount++;
//     number = Math.trunc(number/10)

// }
// console.log(`Sayının basamak sayısı: ${digitCount}`);

//! 9- Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  // 0 1 1 2 3 5 8 13

// let n = +prompt("Kaç tane fibonacci sayısı istersiniz")

// // let fibonacci = [0,1]
// let a = 0;
// let b = 1;
// let strFibonacci = '0 1'

// for (let i = 2; i < n; i++) {

//     c = a+b;
//     strFibonacci += ` ${c}`
//     a = b
//     b = c
// }

// console.log(strFibonacci)

//! 12- girilen değerlerin üçgen oluşturp oluşturamayacağını bulan program

// let a = +prompt("Birinci kenar uzunlugu: ")
// let b = +prompt("Ikinci kenar uzunlugu: ")
// let c = +prompt("Ücüncü kenar uzunlugu: ")

// let check1 = a + b > c;
// let check2 = a + c > b;
// let check3 = b + c > a;

// if (check1 && check2 && check3) console.log("Bu sayilar bir ücgen olusturabilir.");
// else console.log("Bu sayilardan ücgen olmaz.");

//! 11 Aşağıdaki çıktıyı konsola yazdırınız ?

//? 0
//? 00
//? 000
//? 0000
//? 00000
//? 000000

for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "0";
  }
  console.log(row);
}

// for (var i = 0; i < 10; i++) {
//   for (var x = 0; x < i; x++) {
//     document.write("*");
//   }

//   document.write("<br/>");
// }
// var t = "*";
// for (var i = 0; i < 3; i++) {
//   document.write(t + "<br>");
//   t = t + "*";
// }

//! 10- Aşağıdaki çıktıyı konsola yazdırınız

// ?      * * * * *
// ?      * * * * *
// ?      * * * * *
// ?      * * * * *
// ?      * * * * *
// let stars = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     stars += "*";
//   }
//   stars += "\n";
// }
// console.log(stars);
