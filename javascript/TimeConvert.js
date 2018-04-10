/*
	Fungsi ini adalah untuk mencari dan menampilkan Jam dan Menit dari suatu nilai yang di input.

	misal num = 63
	maka Output yang tampil adalah 1:3  //1 jam, 3 menit
*/

function TimeConvert(num) { 

  var Hours = num/60;    
  var Minutes = num % 60;
  return Math.floor(Hours) + ':' + Minutes;
         
}

var num = 63;
document.write(TimeConvert(num));