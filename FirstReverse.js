/*
	Algoritma ini adalah untuk membalikan suatu karakter di dalam suatu kalimat.
	Misalkan ada suatu parameter berisi kalimat/karakter, 
	maka karater dari suatu kalimat urutannya berubah, dari urutan depan menjadi berurut ke belakang.

	Misalkan suatu variabel,
	var kalimat = "Andry Lubis";	
	dirubah menjadi --> "sibuL yrdnA"
*/

function FirstReverse(str) {
	var kalimatBalik="";
  	for (a=str.length; a >= 0; a--)
  		kalimatBalik+=str.substring(a, a-1);	  	
  		return kalimatBalik;
}

// memanggil fungsi
var str = "Andry Lubis";
document.write(FirstReverse(str));