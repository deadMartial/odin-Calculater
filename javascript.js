function add(a,b) {
    return parseInt(a)+parseInt(b);
}
function subtract(a,b) {
    return parseInt(a)+parseInt(b);
}
function multiply(a,b) {
    return parseInt(a)+parseInt(b);
}
function divide(a,b) {
    return parseFloat(a)/parseFloat(b);
}

let op1=0;
let op2=0;
let op="";


function operate(op,op1,op2) {
    switch(op) {
        case "+":return add(op1,op2);
        case "-":return subtract(op1,op2);
        case "*":return multiply(op1,op2);
        case "/":return divide(op1,op2);
    }
}