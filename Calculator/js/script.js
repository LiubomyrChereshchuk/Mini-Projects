/**
 * calculator v 1.0
 * made by Lub4ikChe
 */


//all constants needed to work 

//all butns
const buttons = document.querySelectorAll('.button');

//only numbers
const numbers = document.querySelectorAll('.number');

//only operations btns
const operations = document.querySelectorAll('.operation');

//output field
const output = document.querySelector('.output');

//Clean (C) button
const clean = document.querySelector('.clean');

// = btn
const result = document.querySelector('.result');

//upper output field
const upOutour = document.querySelector('.output-operation');


//object with all needed functions
const calculator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '÷': (a, b) => a / b,
    '×': (a, b) => a * b,
    '√': (a) => Math.sqrt(a),
    'x²': (a) => a ** 2,
    'n!': function f(a) {
        //simple recursion to calculate factorial
        if (a <= 1) return 1;
        else {
            return a * f(a - 1);
        }
    },
};


/**
 * main function
 * params: all constants
 */

function mainFunc(numbers, operations, output, upOutour, result, clean) {
    //current operation
    let op = '';
    //first num
    let a = 0;
    //second num
    let b = 0;

    //hover effect on buttons
    for (const button of buttons) {
        button.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#bfbfbf';
        });

        button.addEventListener('mouseleave', function () {
            this.style.backgroundColor = null;
        });

    }

    //input numbers
    for (const num of numbers) {
        num.onclick = function () {
            output.innerHTML += this.innerHTML;
        }
    }

    //input operations
    for (const operation of operations) {
        operation.onclick = function () {
            //get first num typeof Number
            a = +output.innerHTML;
            output.innerHTML = '';
            //get current operation
            op = this.innerHTML;
            //output current operation
            upOutour.innerHTML = op;
        }
    }

    // calculate and output the result
    result.onclick = function () {
        //get second num typeof NUmber
        b = +output.innerHTML;
        upOutour.innerHTML = '';

        //all possible options
        if (op == '+' || op == '-' || op == '÷' || op == '×') {
            output.innerHTML = calculator[op](a, b).toString().slice(0, 10);;
        }

        else if (op == '√' || op == 'x²') {
            output.innerHTML = calculator[op](a).toString().slice(0, 10);
        }

        //check for inputted num for factorial
        else if (op == 'n!') {
            if (a > 21) {
                alert('too big number, please choose less than 22');
                output.innerHTML = '';
                a = 0;
            }
            else {
                output.innerHTML = calculator[op](a).toString().slice(0, 10);
            }
        }
    }

    //clean output and reset values of nums
    clean.onclick = function () {
        upOutour.innerHTML = '';
        output.innerHTML = '';
        a = 0;
        b = 0;
    }

}

//start the program
mainFunc(numbers, operations, output, upOutour, result, clean);