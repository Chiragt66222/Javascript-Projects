// script.js
const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value !== '' && !isNaN(display.value.slice(-1))) {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.value = 'Error';
  }
}
