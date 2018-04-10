/*
fungsi ini adalah untuk mensorting sebuah inputan menjadi sesuai urutan abjad alphabet.
A B C D E F G H I  J   K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
1 2 3 4 5 6 7 8 9  10  11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26

misal yang di input adalah hello maka di sorting menjadi ehllo.
*/

function AlphabetSoup(str) {
	str = str.toLowerCase(); //merubah karakter menjadi huruf kecil
	str = str.split(''); // memisahkan huruf menjadi array
	str = str.sort(); // mensorting berdasarkan abjad paling awal
	str = str.join(''); // menggabungkan array menjadi string
	return str;
}

var str = "hello";
document.write(AlphabetSoup(str));