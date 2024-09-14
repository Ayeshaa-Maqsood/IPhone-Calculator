let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    if (currentInput !== '') {
        currentInput = '';
    } else {
        previousInput = '';
        operator = '';
    }
    updateDisplay();
    updateClearButton();
}

function updateDisplay() {
    const display = document.getElementById('result');
    display.value = previousInput + operator + currentInput;
  }
  
  
  
  
  

  function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) {
      alert("Error: Invalid input. Only one decimal point allowed.");
      return;
    }
    currentInput += number;
    updateDisplay();
    updateClearButton();
  }
  

  function operate(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
      calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
    updateClearButton();
  }
  

  function calculate() {
    if (previousInput === '' || currentInput === '') return;
    if (currentInput.includes('.') && currentInput.indexOf('.') !== currentInput.lastIndexOf('.')) {
      alert("Error: Invalid input. Only one decimal point allowed.");
      currentInput = currentInput.slice(0, -1); // remove the extra decimal point
      updateDisplay();
      return;
    }
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case '-':
        result = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case '*':
        result = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case '/':
        if (currentInput === '0') {
          alert("Error: Division by zero.");
          clearDisplay();
          return;
        } else {
          result = parseFloat(previousInput) / parseFloat(currentInput);
        }
        break;
      default:
        return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
    updateClearButton(true); // Change to AC after calculation
  }
  
  
  
  

function invertSign() {
    if (currentInput === '') return;
    currentInput = (-parseFloat(currentInput)).toString();
    updateDisplay();
}

function percent() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function deleteLast() {
    if (currentInput !== '') {
      currentInput = currentInput.slice(0, -1);
    } else if (operator !== '') {
      operator = '';
    } else if (previousInput !== '') {
      previousInput = previousInput.slice(0, -1);
    }
    updateDisplay();
    updateClearButton();
  }
  
  

  function updateClearButton(isResult) {
    const clearButton = document.getElementById('cls');
    if (isResult) {
      clearButton.innerText = 'AC';
      clearButton.onclick = clearDisplay;
    } else if (currentInput !== '' || operator !== '') {
      clearButton.innerText = 'Del';
      clearButton.onclick = deleteLast;
    } else {
      clearButton.innerText = 'AC';
      clearButton.onclick = clearDisplay;
    }
  }
  
  
  
