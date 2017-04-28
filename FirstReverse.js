/*
	Algoritma ini adalah untuk membalikan suatu karakter di dalam suatu kalimat.

*/

function FirstReverse(str) { 

	var kalimatBalik="";
  	for (a=str.length; a >= 0; a--)
  		kalimatBalik+=str.substring(a, a-1);
  	
  	return kalimatBalik;
 
         
}