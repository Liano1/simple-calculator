let output = document.getElementById('output');

function clearOutput() {
  output.value = '';
}

function deleteLast() {
  output.value = output.value.slice(0, -1);
}

function appendInput(value) {
  output.value += value;
}

function calculate() {
  output.value = eval(output.value);
}
