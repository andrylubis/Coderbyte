/*
	Fungsi ini adalah untuk membalikan huruf kapital menjadi kecil
	dan sebaliknya huruf kecil menjadi kapital dalam suatu kalimat.
*/

function SwapeCase(str) {
	var output ="";

	for(var i = 0; i < str.length; i++) {
		if(str[i] === str[i].toUpperCase()) {
			output = output + str[i].toLowerCase();
		}
		else if(str[i] === str[i].toLowerCase()) {
			output = output + str[i].toUpperCase();
		}		
	}
	return output;
}

var str ="Hello World";
document.write(SwapeCase(str));