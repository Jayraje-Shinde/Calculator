let temp_array = [];
let main_array = [];
let operator = "";
if (main_array[main_array.length - 1] == "") {
  main_array.pop();
}
function operator_clicked(operator_clicked) {
  operator = operator_clicked;
  main_array.push(temp_array.join(""));
  temp_array = [];
  if (main_array[1] == undefined) {
    console.log("IF");
    main_array.push(operator);
  } else {
    console.log("else");
    main_array[1] = operator;
    console.log(main_array);
    main_array.pop();
  }

  const inputfield = document.getElementById('previous-numbers');
  inputfield.value = main_array.join(" ");
  // const buttons = document.querySelectorAll('.op-btn');
  // buttons.forEach(button => {
  //   button.disabled = true;
  // });
  // document.getElementById('equalto').disabled = false;
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
  // document.getElementById('equalto').disabled = true;
}
function plusminus() {
  let tempnum = temp_array[0];
  temp_array[0] = -tempnum;
  const inputfield = document.getElementById('input');
  inputfield.value = temp_array.join("");

}
function equalto() {
  console.log(main_array);
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
  if (main_array[1] == "%") {
    sum = (Number(main_array[0]) * Number(main_array[2]) * 0.01);
  }
  if (main_array == []) {
    sum = " ";
  }

  document.getElementById('input').value = sum;
  document.getElementById('previous-numbers').value = "";
  temp_array = [];
  main_array = [];
  operator = "";
  const buttons = document.querySelectorAll('.op-btn');
  buttons.forEach(button => {
    button.disabled = false;
  });
  // document.getElementById('equalto').disabled = true;
}
