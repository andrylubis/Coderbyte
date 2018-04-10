/*
	Fungsi ini adalah untuk menghitung jumlah kata dalam suatu kalimat
	misal "Selamat datang", maka akan menampilkan jumlah 2
*/

function WordCount(str) { 

	str = str.split(" ");
	var hitung = str.length;
	return hitung; 
         
}

var str = "Selamat datang";
document.write(WordCount(str));