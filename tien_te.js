function doitien(){
    let Amount = document.getElementById("x").value;
    let From = document.getElementById("a").value;
    let To = document.getElementById("b").value;
    let Result
    if (From === "USD" && To === "VND"){
        Result = 'Result: ' + (Amount * 27000) + 'VNĐ';
    }
    else if (From === "VND" && To === "USD"){
        Result = "Result: " + (Amount / 27000) + " $";
    }
    else if (From === "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
    document.getElementById("result").innerHTML = Result;
}
