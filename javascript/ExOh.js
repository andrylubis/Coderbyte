/*
  Fungsi ini adalah untuk menghitung jumlah x dan o.
  IF jumlah x dan o bernilai sama, maka akan menampilkan true
  dan sebaliknya akan menampilkan false.
*/

function ExOh(str) { 

 var totalx = 0;
 var totalo = 0;
  
   if (str.length % 2 == 1) {
      return false;
    } 
    else {     
      for (var i = 0; i<str.length; i++) {
        if (str[i] == "x") {
          totalx=totalx+1;
        }
        else if(str[i] == "o") {
          totalo = totalo+1;
        }
      }    
      if (totalx == totalo) {
        return true;
      }
      else {
        return false;
      }
    }         
}
   
var str = "xooxxxxooxoo"; 
document.write(ExOh(str));