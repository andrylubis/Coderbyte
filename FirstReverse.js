/*
	Algoritma ini adalah untuk membalikan suatu karakter di dalam suatu kalimat.
	Misalkan ada suatu parameter berisi kalimat/karakter, 
	maka karater dari suatu kalimat urutannya berubah, dari urutan depan menjadi berurut ke belakang.

	Misalkan suatu variabel,
	var kalimat = "Andry Lubis";	
	dirubah menjadi --> "sibuL yrdnA"
*/

function FirstReverse(str) {
	var reverse ="";
  	for (var i=str.length; i >= 0; i--)
  		reverse+=str.substring(i, i-1);	  	
  		return reverse;
}

// memanggil fungsi
var str = "Andry Lubis";
document.write(FirstReverse(str));