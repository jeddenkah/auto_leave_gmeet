var jumlah_orang_minimal = 3;//ketika jumlah orang kurang dari atau sama dengan ini maka otomatis akan keluar meet

console.log('MULAII!!');
function logout(){
    var reject = document.querySelectorAll('.VTBa7b , .MbhUzd')[12];
    reject.click();
    console.log('keluar');
    setTimeout(() => {
//         var rejoin = document.querySelectorAll('.e19J0b , .CeoRYc')[0];
//         rejoin.click();

    window.location.href = "https://meet.google.com/";
        
    }, 3000);
}
function cekOrang(){
    var coba = document.querySelectorAll(".wnPUne , .N0PJ8e")[0].innerHTML;
    var jumlah = parseInt(coba);
    console.log('jumlah orang sekarang: '+jumlah);
    if(jumlah <= jumlah_orang_minimal){
        logout();
        clearInterval(x);
    }
}

var x = setInterval(cekOrang, 3000);