/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
}
function addNumbers()
{
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2
}

const subtractNumbers = function() {
let subtract1 = Number(document.querySelector('#subtract1').value);
let subtract2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = function(number1, number2) {
    return number1 * number2
}

const multiplyNumbers = function() {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
    //document.querySelector('#product').value = ((factor1, factor2) => factor1 * factor2);

    }
    
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = function(number1, number2) {
    return number1 / number2
}

const divideNumbers = function() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
    }
    
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
const getTotal = function(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById("member").checked) {    
        subtotal *= .80
    }
document.querySelector("#total").textContent = `$ ${subtotal.toFixed(2)}`;}
document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbersArray.filter(number => number % 2 == 1)
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(number => number % 2 == 0)

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number)
