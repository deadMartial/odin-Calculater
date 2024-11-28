function add(a,b) {
    return parseInt(a)+parseInt(b);
}
function subtract(a,b) {
    return parseInt(a)-parseInt(b);
}
function multiply(a,b) {
    return parseInt(a)*parseInt(b);
}
function divide(a,b) {
    return (parseFloat(a)/parseFloat(b)).toFixed(8);
}

let op1=0;
let op2=0;
let op="";


const btns=document.querySelectorAll(".ops");
btns.forEach((btn)=> {
    btn.addEventListener("click", printScreen);
})

const sre=document.querySelector(".display");

function operate(op,op1,op2) {
    switch(op) {
        case "+":return add(op1,op2);
        case "-":return subtract(op1,op2);
        case "*":return multiply(op1,op2);
        case "/":return divide(op1,op2);
    }
}

function printScreen(e) {
    if(e.target.classList.contains("num")) {
        printScreenNum(e);
    }
    else if(e.target.classList.contains("util")) {
        printScreenUtil(e);
    }
    else if (e.target.classList.contains("op")) {
        printScreenOp(e);
    }console.log(op," ",op1," ",op2);
}


function printScreenNum(e) {

    console.log(e.target);
    if(e.target.textContent=="." && sre.textContent.includes(".")){return}
    sre.textContent+=e.target.textContent;
    
}

function printScreenUtil(e) {
    if(e.target.textContent==="AC") {
        sre.textContent="";
        op="";
        op1=0;
        op2=0;
    }
    else if(e.target.textContent==="=") {
        op2=parseInt(sre.textContent);
        sre.textContent=operate(op,op1,op2);
        op="";
        op2=0;
        op1=parseInt(sre.textContent)
    }
}

function printScreenOp(e) {
    if(sre.textContent==="") {
        op1=0;return;
    }

    // if()


     if(op!=="") {
        
        op=e.target.textContent;
        op2=parseInt(sre.textContent);console.log(op+op1+op2);
        sre.textContent=operate(op,op1,op2).toString();
        console.log(op," ",op1," ",op2," ", sre.textContent)

    }
    
        op1=parseInt(sre.textContent);
        op=e.target.textContent;
        sre.textContent="";
    

}

