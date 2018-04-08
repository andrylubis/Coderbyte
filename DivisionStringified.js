/*
    Fungsi ini adalah untuk menampilkan hasil bagi pada pada variabel num1 dan num2
    misal num1 = 5 dan num2 = 2, maka menampilkan hasil 3, dan misal
    num1 = 1, num2 = 10 maka menampilkan output 0.
*/

function DivisionStringified(num1,num2) { 

    var hasilBagi = 0; 
    var sisaBagi  = 0;
    
    if(num1 < num2) {
        return 0;
    }
    else {
        hasilBagi = num1/num2;
        sisaBagi  = num1 % num2;
        
        if(sisaBagi != 0) {
            sisaBagi = 1;
        }
        var hasil = Math.floor(hasilBagi) + sisaBagi; 
        return hasil;
    }        
}
   
var num1 = 5;
var num2 = 2;
document.write(DivisionStringified(num1, num2));