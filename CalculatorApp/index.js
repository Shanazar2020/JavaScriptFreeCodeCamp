let num1 = 9;
let num2 = 3;

document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;
let resultEl = document.getElementById('result-el');

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    changeResult(num1 + num2, 'Addition');
}

function subtract() {
    changeResult(num1 - num2, 'Subtraction');
}

function divide() {
    changeResult(num1 / num2, 'Division');
}

function multiply() {
    changeResult(num1 * num2, 'Multiplication');
}

function changeResult(result, text){
    resultEl.textContent = `${text}: ${result}`;
}