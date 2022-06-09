//Örnek-1)  kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

/////////////////////////////////////////////////////////////////////////////////
let gelen = prompt("Lütfen bize bir sayı veriniz.");
function teksayi(sayi) {
  document.write("Tek sayılar:");
  let teksayiAdet = 0;
  let teksayiToplam = 0;

  for (let i = 0; i <= sayi; i++) {
    if (i % 2 == 1) {
      document.write(i);
      teksayiAdet++;
      if (i < sayi - 1 && i != 7) {
        document.write("-");
      }
      if (i != 7) {
        if (i >= 100) {
          document.write("<br>100 den sonra toplanmıyor ama gösteriliyor");
          break;
        } else {
          teksayiToplam += i;
        }
      } else {
        document.write("-#7 toplanmayacak-");
      }
    }
  }
  document.write(
    "<br>Girdiğiniz Sayı içinde " + teksayiAdet + " tek sayı mevcut."
  );
  document.write(
    "<br>Girdiğiniz Sayı içindeki teksayılar toplamı:" + teksayiToplam + "<br>"
  );
}
function ciftsayi(sayi) {
  document.write("<br>Çift sayılar:");
  let ciftsayiAdet = 0;
  let ciftsayiToplam = 0;

  for (let i = 0; i <= sayi; i++) {
    if (i % 2 == 0) {
      document.write(i);
      ciftsayiAdet++;
      if (i < sayi - 1) {
        document.write("-");
      }
      if (i >= 100) {
        document.write("<br>100 den sonra toplanmıyor ama gösteriliyor");
        break;
      } else {
        ciftsayiToplam += i;
      }
    }
  }
  document.write(
    "<br>Girdiğiniz Sayı içinde " + ciftsayiAdet + " cift sayı mevcut."
  );
  document.write(
    "<br>Girdiğiniz Sayı içindeki ciftsayılar toplamı:" + ciftsayiToplam
  );
}
if (gelen != 44) {
  teksayi(gelen);
  ciftsayi(gelen);
} else {
  document.write("secret key detected");
}
