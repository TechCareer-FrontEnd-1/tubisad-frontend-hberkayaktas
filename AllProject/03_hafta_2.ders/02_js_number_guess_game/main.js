var sayi = Math.ceil(Math.random() * 10);
var sayi2 = prompt("Lutfen bir sayi girin");
var sayac = 1;
while (sayi != sayi2) {
  if (sayi2 < sayi) {
    ++sayac;
    sayi2 = prompt("Girdiginiz sayi kucuk =>");
  } else {
    ++sayac;
    sayi2 = prompt("Girdiginiz sayi buyuk =>");
  }
}

document.write("Gizli sayi: " + sayi + "<br>");
document.write("Kac tekrarda buldunuz: " + sayac + "<br>");
