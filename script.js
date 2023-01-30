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
let myEquation = {
    firstNum: null,
    secondNum: null,
    operator: [],
};
let numberOnePlaceholder = [];
let numberTwoPlaceholder = [];

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

console.log(typeof myEquation.operator[1])

////////////////////BUTTONS//////////////////////////////////////////////
const output = document.querySelector("#output_container");
const number_buttons = Array.from(document.querySelectorAll(".num"));
const operator_buttons = Array.from(document.querySelectorAll(".ops"));
const equals = document.querySelector(".equals");
const emoji = String.fromCodePoint("0x2764")


/////////////////EVENT LISTENERS + EVENT LISTENER FUNCTIONS////////////////
number_buttons.forEach(button => button.addEventListener('click', (event) => {
    outputFunc(button, event);
    //get first and second numbers

    if (output.textContent.charAt(output.textContent.length-2) == emoji){
        output.textContent = event.target.textContent;
        myEquation.operator = [];
        numberOnePlaceholder.push(event.target.textContent);
        myEquation.firstNum = Number(numberOnePlaceholder.join(''));
    
    } else if (myEquation.operator[0] === undefined) {
        numberOnePlaceholder.push(event.target.textContent);
        myEquation.firstNum = Number(numberOnePlaceholder.join(''));
    }


    if (myEquation.operator[0] !== undefined){
        numberTwoPlaceholder.push(event.target.textContent);
        myEquation.secondNum = Number(numberTwoPlaceholder.join(''));
        myEquation.operator[1] = emoji
    }
}));

operator_buttons.forEach(button => button.addEventListener('click', (event) => {
    outputOppFunc(button, event);
   
    //get operator
    console.log(event.target.textContent)
    if (myEquation.operator[0] === undefined){
        myEquation.operator[0] = event.target.textContent;
    } else if (typeof myEquation.operator[0] === 'string' && myEquation.secondNum == null){
        myEquation.operator[0] = event.target.textContent;
    } 

    if (myEquation.operator[1] == emoji){
        myEquation.operator[1] = event.target.textContent
    }

   
    //calculate if second operator is pressed
    if (myEquation.operator[1] !== undefined && myEquation.secondNum !== null) {
        myEquation.firstNum = operate(myEquation.firstNum, myEquation.secondNum, myEquation.operator[0]);
        
        numberOnePlaceholder = [];
        numberTwoPlaceholder = [];
        myEquation.secondNum = null;
        output.textContent = `${myEquation.firstNum}${myEquation.operator[1]}`;
        myEquation.operator[0] = myEquation.operator[1];
        myEquation.operator[1] = undefined;
        myEquation.operator[2] = undefined;
    }

}));



//function to put button pressed text into output container
const outputFunc = function(button, e){
    let num = button.textContent;
    output.textContent += num;
}


const outputOppFunc = function(button, e){
    if (myEquation.operator[0] === undefined ){
        output.textContent += e.target.textContent;
    }
    
    if (myEquation.operator[0] !== undefined ){
        output.textContent = output.textContent.replace(`${myEquation.operator[0]}`, e.target.textContent)
    }
}

//equals button function
equals.addEventListener(("click"), event => {
    if (equationIsComplete()){
        myEquation.firstNum = operate(myEquation.firstNum, myEquation.secondNum, myEquation.operator[0]);
        numberOnePlaceholder = [];
        numberTwoPlaceholder = [];
        myEquation.secondNum = null;
        output.textContent = `${myEquation.firstNum}${myEquation.operator[1]}`;
        myEquation.operator[0] = myEquation.operator[1];
        myEquation.operator[1] = undefined;
        myEquation.operator[2] = undefined;
    }
})



//check if myEquation object is full of data
function equationIsComplete(){
    if (myEquation.firstNum !== null && myEquation.secondNum !== null){
        if (myEquation.operator[0] !== undefined){
            return true;
        }
    }
    return false;
}