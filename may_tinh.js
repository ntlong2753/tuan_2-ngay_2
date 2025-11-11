function cong(){
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);
    let ket_qua = Number(number1) + Number(number2);
    document.getElementById('res').innerHTML = "Kết quả: " + ket_qua;
    //let ket_qua = Number(number1) + Number(number2);
   // document.write('The ket_qua: ' + ket_qua);

    //let res = document.getElementById("res");
    //document.getElementById("res").innerHTML = Number(number1) + Number(number2);
    //res.innerText=ket_qua.toString();
}
function tru() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let ket_qua = Number(number1) - Number(number2);
    document.getElementById('res').innerHTML = "Kết quả: " +  ket_qua
    //document.getElementById('res').innerHTML = number1 - number2;
    //let ket_qua = Number(number1) - Number(number2);
    //document.write('The ket_qua: ' + ket_qua);
    //let res = document.getElementById("res");
    //document.getElementById("res").innerHTML = Number(number1) - Number(number2);
    //res.innerText = ket_qua.toString();
}
function nhan() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let ket_qua = Number(number1) * Number(number2);
    document.getElementById('res').innerHTML = "Kết quả: " + ket_qua
}
function chia() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let ket_qua = Number(number1) / Number(number2);
    document.getElementById('res').innerHTML = "Kết quả: " + ket_qua
}