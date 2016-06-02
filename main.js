var result = document.getElementById("display");
var buttons = document.querySelectorAll("button");

for (i = 0; i < buttons.length; i++) {
  if (buttons[i].value === '=') {
    buttons[i].addEventListener('click', calculate);
  } else if (buttons[i].value === 'c') {
    buttons[i].addEventListener('click', clear);
  } else {
    buttons[i].addEventListener('click', display(i));
  }
}

function calculate() {
  result.textContent = eval(result.textContent);
}

function display(i) {
  return function() {
    result.textContent += buttons[i].value;
  }
}

function clear() {
  result.textContent = null;
}
