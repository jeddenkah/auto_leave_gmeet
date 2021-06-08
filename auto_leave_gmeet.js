var jumlah_orang_minimal = 7;//ketika jumlah orang kurang dari atau sama dengan ini maka otomatis akan keluar meet

console.log('MULAII!!');
function logout(){
    var reject = document.querySelectorAll('.yHy1rc , .eT1oJ , .tWDL4c , .jh0Tpd , .Gt6sbf , .QQrMi , .ftJPW')[4];
    reject.click();
    console.log('keluar');
    setTimeout(() => {

    window.location.href = "https://meet.google.com/";
        
    }, 3000);
}
function cekOrang(){
    var coba = document.querySelectorAll(".uGOf1d")[0].innerHTML;
    var jumlah = parseInt(coba);
    console.log('jumlah orang sekarang: '+jumlah);
    if(jumlah <= jumlah_orang_minimal){
        logout();
        clearInterval(x);
    }
}

var x = setInterval(cekOrang, 3000);