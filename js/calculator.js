
let num =0 ;
let symbol ;

function btn_click (a) {
    resultFld.value += a;
}

function cal(b) {
    let firstNum = (document.getElementById("resultFld").value);
    num = firstNum;
    symbol = b ;
    return document.getElementById("resultFld").value = "";
}

function cpt () {
    let testNum = parseFloat(document.getElementById("resultFld").value);
   
    let result;
    
    switch (symbol) {
        case '%' : result = Number(num) % Number(testNum) ; 
        document.getElementById("resultFld").value = result;
        break;
        case '/' : result = Number(num) / Number(testNum) ; 
        document.getElementById("resultFld").value = result;
        break;
        case '*' : result = Number(num) * Number(testNum) ; 
        document.getElementById("resultFld").value = result;
        break;
        case '+' : result = Number(num) + Number(testNum) ; 
        document.getElementById("resultFld").value = result; 
        break;
        case '-' : result = Number(num) - Number(testNum) ; 
        document.getElementById("resultFld").value = result;
        break;
    }        
}





function clearDel() {
    document.getElementById("resultFld").value = "";
    num = 0;
}