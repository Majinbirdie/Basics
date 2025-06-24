function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    if (result === undefined) {
      display.value = '';
    } else {
      display.value = result;
    }
  } catch (error) {
    alert('Invalid expression');
    display.value = '';
  }
}
