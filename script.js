"use strict";

let number1 = null;
let number2 = null;
let result = null;

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Start function");

  document.querySelector("#calculate").addEventListener("click", readNumbers);
}

function readNumbers() {
  console.log("Read both numbers");

  let input1 = document.querySelector("#firstnumber").value;
  let input2 = document.querySelector("#secondnumber").value;

  number1 = Number(input1);
  number2 = Number(input2);

  calculateNumbers();
}

function calculateNumbers() {
  console.log("Calculating numbers");

  const operator = document.querySelector("#operator").value;

  if (operator === "add") {
    result = number1 + number2;
  } else if (operator === "sub") {
    result = number1 - number2;
  } else if (operator === "mul") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  writeResult();
}

function writeResult() {
  console.log("Writing result out");

  document.querySelector("#firstnumber").value = null;
  document.querySelector("#secondnumber").value = null;

  let resultList = document.querySelector("#results");
  let list = document.createElement("li");
  list.innerHTML = result;
  resultList.appendChild(list);
  resultList.scrollTo(1, 1000000000);

  roundUpNumber();
}
