function calculate(operator) {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);
  if (Number.isNaN(input1) || Number.isNaN(input2)) {
    alert("enter a valid number");
    return;
  }
  var operator = operator;
  var result = null;
  console.log(operator);
  switch (operator) {
    case "+": {
      result = input1 + input2;
      break;
    }
    case "-": {
      result = input1 - input2;
      break;
    }
    case "*": {
      result = input1 * input2;
      break;
    }
    case "/": {
      result = input1 / input2;
      break;
    }
    default: {
      result = null;
      break;
    }
  }
  document.getElementById("result").value = result;
}

function getClear() {
  document.getElementById("input1").value = null;
  document.getElementById("input2").value = null;
  document.getElementById("result").value = null;
}
