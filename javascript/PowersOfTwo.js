/*
	fungsi ini adalah untuk menampilkan output
	if nilai yang di input habis di bagi 2 = 0 maka menampilkan nilai true,
	sebaliknya menampilkan nilai false
*/

function PowersOfTwo() {
	hasilBagi = num / 2;
	sisaBagi = num % 2;

	while((hasilBagi != 2) && (sisaBagi == 0)) {
		hasilBagi = hasilBagi / 2;
		sisaBagi = hasilBagi % 2; 
	}

	if(hasilBagi == 2) {
		return true;
	}
	else {
		return false;
	}
}

var num = 11;
document.write(PowersOfTwo(num));