let $cong = document.getElementById("cong")
let $tru = document.getElementById("tru")
let $nhan = document.getElementById("nhan")
let $chia = document.getElementById("chia")
let $du = document.getElementById("du")
$cong.addEventListener("click", plus)
function plus(){
    let $a = parseInt(document.getElementById("number1").value)
    let $b = parseInt(document.getElementById("number2").value)
    let $ketqua = document.getElementById("ketqua")
    let c = $a + $b;
    $ketqua.innerHTML = `Result Division = ${c}`;
}
$tru.addEventListener("click", minus)
function minus(){
    let $a = parseInt(document.getElementById("number1").value)
    let $b = parseInt(document.getElementById("number2").value)
    let $ketqua = document.getElementById("ketqua")
    let c = $a - $b;
    $ketqua.innerHTML = `Result Division = ${c}`;
}
$nhan.addEventListener("click", multiply)
function multiply(){
    let $a = parseInt(document.getElementById("number1").value)
    let $b = parseInt(document.getElementById("number2").value)
    let $ketqua = document.getElementById("ketqua")
    let c = $a * $b;
    $ketqua.innerHTML = `Result Division = ${c}`;
}
$chia.addEventListener("click", division)
function division(){
    let $a = parseInt(document.getElementById("number1").value)
    let $b = parseInt(document.getElementById("number2").value)
    let $ketqua = document.getElementById("ketqua")
    let c = $a / $b;
    $ketqua.innerHTML = `Result Division = ${c}`;
}
$du.addEventListener("click", extra)
function extra(){
    let $a = parseInt(document.getElementById("number1").value)
    let $b = parseInt(document.getElementById("number2").value)
    let $ketqua = document.getElementById("ketqua")
    let c = $a % $b;
    $ketqua.innerHTML = `Result Division = ${c}`;
}