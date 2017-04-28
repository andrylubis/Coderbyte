/*
  Algoritma ini adalah untuk mengecek dan menampilkan nilai dari dua parameter.

  Misalkan Soal 1:
  var num1 = 4;
  var num2 = 5;

  output seharunya adalah "true".
  Karena "num2" lebih besar dari "num1".


  Misalkan Soal 2:
  var num1 = 5;
  var num2 = 4;

  output seharunya adalah "false".
  Karena "num2" lebih kecil dari "num1".


  Misalkan Soal 3:
  var num1 = 9;
  var num2 = 9;

  output seharunya adalah "-1";
  Karena "num2" sama dengan "num1"



  Pseoudocode:
  Pertama-tama lakukan seleksi kondisi untuk paramater num2 dan num1.
  1. Jika num2 > num1, maka tampilkan nilai true.
  2. Jika num2 < num1, maka tampilkan nilai false.
  3. Jika num2 == num1 maka tampilkan nilai -1

*/




function CheckNums(num1,num2) { 

 
  if(num2 > num1) {
    return true;
  }
  else if (num2 < num1) {
    return false;
  }
  else if(num2 == num1) {
    return "-1";
  }
  
         
}