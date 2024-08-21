let temp_array = [];
let main_array = [];
let operator = "";
function operator_clicked(operator_clicked) {
  operator = operator_clicked;
  main_array.push(temp_array.join(""));
  temp_array = [];
  main_array.push(operator);
  console.log(main_array);
  const buttons = document.querySelectorAll('.op-btn');
  buttons.forEach(button => {
    button.disabled = true;
  });
  document.getElementById('equalto').disabled = false;
}
function numberclicked(int) {
  let number_pressed = int;
  temp_array.push(number_pressed);
  const inputfield = document.getElementById('input');
  inputfield.value = temp_array.join("");
}

function clearing() {
  temp_array = [];
  main_array = [];
  operator = "";
  document.getElementById('input').value = "";
  const buttons = document.querySelectorAll('.op-btn');
  buttons.forEach(button => {
    button.disabled = false;
  });
  document.getElementById('equalto').disabled = true;
}

function equalto() {
  main_array.push(temp_array.join(""));
  let sum;
  if (main_array[1] == "+") {
    sum = Number(main_array[0]) + Number(main_array[2]);
  }
  if (main_array[1] == "-") {
    sum = Number(main_array[0]) - Number(main_array[2]);
  }
  if (main_array[1] == "*") {
    sum = Number(main_array[0]) * Number(main_array[2]);
  }
  if (main_array[1] == "/") {
    sum = Number(main_array[0]) / Number(main_array[2]);
  }
  if (main_array[1] == "^") {
    sum = Number(main_array[0]) ** Number(main_array[2]);
  }
  if (main_array[1] == "%") {
    sum = Number(main_array[0]) % Number(main_array[2]);
  }

  document.getElementById('input').value = sum;
  temp_array = [];
  main_array = [];
  operator = "";
  const buttons = document.querySelectorAll('.op-btn');
  buttons.forEach(button => {
    button.disabled = false;
  });
  document.getElementById('equalto').disabled = true;
}
