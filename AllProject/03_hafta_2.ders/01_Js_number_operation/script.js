var number1 = Number(prompt("lüfen ilk sayıyı girin"));
var number2 = Number(prompt("lüfen ikinci sayıyı girin"));

document.write("Girdiğiniz verilerin en küçüğü :"+ Math.min(number1,number2)+"<br>");
document.write("Girdiğiniz verilerin en büyüğü :"+ Math.max(number1,number2)+"<br>");
document.write("Girdiğiniz verilerin en büyüğünün karekökü :"+ Math.sqrt(Math.max(number1,number2))+"<br>");
document.write("Girdiğiniz verilerin en büyüğünün karekökünü üste yuvarlıyalım :"+ Math.ceil(Math.sqrt(Math.max(number1,number2)))+"<br>");
document.write("Girdiğiniz verilerin en küçüğü mutlak değeri :"+ Math.abs(Math.min(number1,number2))+"<br>");
document.write("Girdiğiniz verilerin en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım :"+ 
Math.pow(Math.min(number1,number2),Math.max(number1,number2))+"<br>");