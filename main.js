let displayValue = 0;
const display = document.querySelector('.display');
updateDisplay();

let lastNumber,
    nextNumber,
    operator;

const numbers = document.querySelectorAll('.number');
numbers.forEach((numberBtn) => {
  numberBtn.addEventListener('click', (e) => {
    const number = e.target.innerText;
    if (!operator) {
      displayValue += `${number}`;
      displayValue = +displayValue;
      updateDisplay();
    } else {
      displayValue = 0;
      displayValue += `${number}`;
      displayValue = +displayValue;
      updateDisplay();
    }
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', (e) => {
    if (e.target.attributes['id'].value !== 'equal') {
      lastNumber = displayValue;
      operator = e.target.attributes['id'].value;
    } else {
      nextNumber = displayValue;
      displayValue = operate(operator, lastNumber, nextNumber);
      updateDisplay();
    }
  });
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  lastNumber = 0;
  nextNumber = 0;
  operator = "";
  displayValue = 0;
  updateDisplay();
});

function updateDisplay() {
  display.firstElementChild.innerText = displayValue;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case 'add':
      return add(num1, num2);
      break;
    case 'subtract':
      return subtract(num1, num2);
      break;
    case 'multiply':
      return multiply(num1, num2);
      break;
    case 'divide':
      return divide(num1, num2);
      break;
  } 
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}