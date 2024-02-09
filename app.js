// global variables
let displayValue = "0";
let firstNumber = null;
let secondNumber = null;
let operator = null;

const display = document.querySelector(".display");
const operandButtons = document.querySelectorAll(".operand");

display.textContent = displayValue;

operandButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    updateDisplay(e.target.textContent);
    console.log(displayValue);
  });
});

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
