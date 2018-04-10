/*
	fungsi ini adalah untuk mengecek apakah suatu kalimat merupakan suatu palindrome.
	jika palindrome maka menampilkan nilai tru,sebaliknya menampilkan nilai false.

*/
function Palindrome(str) {
	var reverse = "";
	for(var i=str.length; i>0; i--) {
		reverse+=str.substring(i, i-1);
	}
	if(str == reverse) {
		return true;
	}
	else {
		return false;
	}
}

var str = "ada";
document.write(Palindrome(str));