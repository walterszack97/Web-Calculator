//////////////////////BASIC MATH FUNCTIONS//////////////////

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};
  
const divide = function(a, b) {
    return a / b;
};




////////////////////array functions/////////////////////////
const sum = function(numbers) {
    return numbers.reduce((total, number) => total + number, 0)
};

const multiplyArr = function(numbers) {
    return numbers.reduce((total, number) => total * number);
};
  
const divideArr = function(numbers) {
    return numbers.reduce((total, number) => total * number);
};



///////////////////un-used functions////////////////////////
const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
};


const power = function(a, b) {
	return Math.pow(a, b);
};

//////////////////////MECHANICAL FUNCTIONS/////////////////
const operate = function(a, b, operator){
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

////////////////////BUTTONS//////////////////////////////////////////////
const output = document.querySelector("#output_container");
const number_buttons = Array.from(document.querySelectorAll(".num"));
const operator_buttons = Array.from(document.querySelectorAll(".ops"));


/////////////////EVENT LISTENERS + EVENT LISTENER FUNCTIONS////////////////
number_buttons.forEach(button => button.addEventListener('click', (event) => {
    outputFunc(button, event);
}));
operator_buttons.forEach(button => button.addEventListener('click', (event) => {
    outputFunc(button, event);
}));

//function to put button pressed text into output container
const outputFunc = function(button, e){
    let num = button.textContent;
    output.textContent += num;
    console.log(e.currentTarget);
}

console.log(operate(10,12,'*'));