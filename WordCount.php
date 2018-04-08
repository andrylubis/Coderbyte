<?php 
/*
	Fungsi ini adalah untuk menghitung jumlah kata dalam suatu kalimat
	misal "Selamat datang", maka akan menampilkan jumlah 2
*/

function WordCount($str) {  
  $changeToArray = explode(" ", $str);  
  return $wordcount = count($changeToArray);
}

$str = "selamat datang";  
echo WordCount($str); 
?>