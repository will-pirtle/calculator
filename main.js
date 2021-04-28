// Variables
let firstNumber = '0',
    displayValue = '0',
    operator = null;

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const toggleNegative = document.querySelector('#toggle-neg');
const decimal = document.querySelector('#decimal');


// Set display value to 0 on load
updateDisplay();

// Event Listeners
numbers.forEach((numberBtn) => {
  numberBtn.addEventListener('click', (e) => {
    const number = e.target.innerText;
    if (displayValue.length < 8) {
      if (displayValue === '0') {
        displayValue = number;
      } else {
        displayValue += number;
      }
      updateDisplay();
    }
  });
});

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', (e) => {
    if (e.target.attributes['id'].value !== 'equal') {
      if (operator) {
        equate();
      }
      firstNumber = displayValue;
      operator = e.target.attributes['id'].value;

      displayValue = '0';
    } else {
      equate();
      operator = null;
    }
  });
});

clearBtn.addEventListener('click', clearAll);

toggleNegative.addEventListener('click', () => {
  displayValue = -displayValue;
  updateDisplay();
});

decimal.addEventListener('click', () => {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
});


// Functions
function updateDisplay() {
  display.firstElementChild.innerText = displayValue;
}

function clearAll() {
  firstNumber = '0';
  displayValue = '0';
  operator = null;
  updateDisplay();
}

function equate() {
  if (operator == 'divide' && +displayValue == 0) {
    alert("Dividing by zero is always Infinity..don't try to break my calculator!!")
    clearAll();
  } else {
    displayValue = roundResult(operate(operator, +firstNumber, +displayValue));
    updateDisplay();
  }
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
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