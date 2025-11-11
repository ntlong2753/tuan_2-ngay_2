function ChangeMoney(){
    let Amount = document.getElementById("amount").value;
    let From = document.getElementById("from").value;
    let To = document.getElementById("to").value;
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
