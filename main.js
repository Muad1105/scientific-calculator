const calculator = document.querySelector('.calculator');
const display = document.getElementById('display');
const calcExpDis = document.querySelector('.cal-exp-dis');
const calcExp = document.querySelector('.cal-exp');

const result = document.getElementById('answer');

// operators basic calculator
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('obelus');
const point = document.getElementById('point');
const back = document.getElementById('back');

const operators = [];
// let num = operators.length;

// !num ? (num = 0) : (num = num);

// for (let i = 0; i < num; i++) {}

const numbers = [];
const calculation = [];
const onScreen = '';

let calcNum = '';
// let calculate = 0;

function calculate() {
  calcNum = calculation.join('');
  console.log(calcNum);
  return eval(calcNum);
}

let num = -1;
calculator.onclick = function (e) {
  const target = e.target;
  if (target.classList.contains('btn')) {
    if (target.classList.contains('number')) {
      num++;
      //   add 2 numbers
      calculation.push(target.value);
      onscreen = target.value;
      calcExp.innerHTML += onscreen;
    }
    if (target.contains(point)) {
      console.log('point');
      let dot = '.';
      calculation.push(dot);
      calcExp.innerHTML += dot;
    }
    if (target.classList.contains('operator')) {
      if (target.contains(add)) {
        console.log(add);
        let plus = '+';
        calculation.push(plus);
        calcExp.innerHTML += plus;
      }
      if (target.contains(subtract)) {
        let minus = '-';
        calculation.push(minus);
        console.log('subtract');
        calcExp.innerHTML += minus;
      }
      if (target.contains(multiply)) {
        let cross = '*';
        calculation.push(cross);
        calcExp.innerHTML += cross;
      }
      if (target.contains(divide)) {
        let obelus = '/';
        calculation.push(obelus);
        calcExp.innerHTML += obelus;
      }
    }
    if (target.classList.contains('equals')) {
      console.log('len', calculation.length, 'arr', calculation);
      const ans = calculate();
      result.innerHTML = ans;
      calcExpDis.innerHTML = calcNum;
    }
  }
};
