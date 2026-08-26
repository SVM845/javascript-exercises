const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  let result = num1 - num2;
  return result;
};

const sum = function (arr) {
  return arr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function (arr) {
  let result = arr.reduce((total, current) => {
    return total * current;
  });
  return result;
};

const power = function (base, expo) {
  let temp = 1;
  for (let i = 1; i <= expo; i++) {
    temp = temp * base;
  }
  return temp;
};

const factorial = function (num) {
  let temp = 1;
  for (let i = 2; i <= num; i++) {
    temp = temp * i;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
