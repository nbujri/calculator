// global variables
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let operator = null;

const display = document.querySelector(".display");
const operandButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");

window.addEventListener("load", clear);

operandButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    updateDisplay(e.target.textContent);
    console.log(displayValue);
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.textContent;
    console.log(operator);
  });
});

clearButton.addEventListener("click", clear);

function updateDisplay(value) {
  if (displayValue.length >= 10) return;
  if (displayValue[0] === "0") {
    displayValue = "";
    displayValue += value;
    display.textContent = displayValue;
  } else {
    displayValue += value;
    display.textContent = displayValue;
  }
}

function clear() {
  displayValue = "0";
  firstNumber = null;
  secondNumber = null;
  operator = null;
  display.textContent = displayValue;
  // console.log(displayValue, firstNumber, secondNumber, operator);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
