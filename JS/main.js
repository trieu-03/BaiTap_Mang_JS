
var numArray = [];

function addNumArray() {
    var number = Number(document.querySelector("#ETNumber").value);
    numArray.push(number);

    document.querySelector("#result").innerHTML = numArray;

}

document.querySelector("#btnaddNum").onclick = addNumArray;


//!1. Tổng số dương

function numberSum() {
    var total = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            total += numArray[i];
        }
    }

    document.querySelector("#result1").innerHTML = total;
}

document.querySelector("#btntotal").onclick = numberSum;


//!2. Đếm số dương

function numberCount() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }

    document.querySelector("#result2").innerHTML = count;
}

document.querySelector("#btncount").onclick = numberCount;



//!3. Tìm số nhỏ nhất

function numberMin() {

    var Min = numArray[0];

    for (var i = 0; i < numArray.length; i++) {

        if (Min > numArray[i]) {
            Min = numArray[i];

        }

    }

    document.querySelector("#result3").innerHTML = Min;

}

document.querySelector("#btnsmallNum").onclick = numberMin;


//!4. Tìm số dương nhỏ nhất 

function numberSmall() {
    var temporary = null;
    if (numArray.length == 0) {
        temporary = '👉Không có số dương trong mảng';
    } else {
        for (var i = 0; i < numArray.length; i++) {
            if (numArray[i] > 0) {
                if (temporary == null) {
                    temporary = numArray[i];
                } else {
                    if (numArray[i] < temporary) {
                        temporary = numArray[i];
                    }
                }
            }
        }
    }
    if (temporary == null) {

        temporary = '👉Không có số dương trong mảng';
    }
    document.querySelector("#result4").innerHTML =
        temporary;
}

document.querySelector("#btnsmallNumber").onclick = numberSmall;




//!5. Tìm số chẵn cuối cùng

function numberEvent() {
    var final = [];

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0)
            final = numArray[i];

    }
    document.querySelector("#result5").innerHTML = " Số chẵn cuối cùng là: " + final;
}

document.querySelector("#btneventNum").onclick = numberEvent;


//!6. Đổi chỗ

function numLocationAll() {
    var numLocation1 = document.getElementById("location1").value;
    var numLocation2 = document.getElementById("location2").value;

    var temporary = numArray[numLocation1];
    numArray[numLocation1] = numArray[numLocation2];
    numArray[numLocation2] = temporary;

    document.getElementById("result6").innerHTML = " Sau khi đổi mảng: " + numArray;

}

document.getElementById("btnchange").onclick = numLocationAll;

//!7. Sắp xếp tăng dần

function numArrange() {

    var numArran = [];
    for (var i = 0; i < numArray.length; i++) {

        numArran.push(numArray[i])

    }
    numArray.sort(function (a, b) {
        return a - b;
    });


    document.querySelector("#result7").innerHTML = "👉Mảng sau khi sắp xếp: " + numArray;
}

document.querySelector("#btnarrange").onclick = numArrange;


//!8. Tìm số nguyên tố đầu tiên

function is_Prime(n) {
    var is_prime = true;
    if (n < 2) {
        is_prime = false;
    }
    for (i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            is_prime = false;
            break;
        }
    }
    return is_prime;
}
function numPrime() {
    var prime = numArray.length > 0 ? numArray[0] : -1;
    for (var i = 0; i < numArray.length; i++) {

        if (is_Prime(numArray[i]) == true) {
            prime = numArray[i];
            break;
        }

    }

    document.querySelector("#result8").innerHTML = prime;

}

document.querySelector("#btnPrime").onclick = numPrime;


//!9. Đếm số nguyên

var numInTerGer = [];

function addNumInTer() {
    var number = Number(document.querySelector("#ITGNumber").value);
    numInTerGer.push(number);

    document.querySelector("#result9_1").innerHTML = numInTerGer;

}

document.querySelector("#btn_addNum").onclick = addNumInTer;


function countInterger() {
    var count = 0;
    for (var i = 0; i < numInTerGer.length; i++) {
        if (numInTerGer[i] != 0) {
            count++;
        }
    }
    document.querySelector("#result9").innerHTML = count;
}

document.querySelector("#btninteger").onclick = countInterger;


//!10. So sánh số lượng số âm và dương

function numberCompare() {
    var numEven = 0;
    var numOdd = 0;
    var numTotal = 0;

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            numEven++;
        } else if (numArray[i] < 0) {
            numOdd++
        }
    }

    if (numEven > numOdd) {
        numTotal = "👉Số dương > Số âm"
    } else if (numEven < numOdd) {
        numTotal = "👉Số dương < Số âm "
    } else {
        numTotal = "👉Số dương = Số âm "
    }

    document.querySelector("#result10").innerHTML = numTotal;
}

document.querySelector("#btncompare").onclick = numberCompare;

