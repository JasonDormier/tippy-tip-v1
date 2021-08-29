'use strict';

//TODO
//validate bill amount data to not allow user to enter a number larger than 9999.99
//validate person amount to not allow user to enter a number larger than 100
//have the 10% button highlighted and highlight the current tip amount that is selected
            //this can be done by checking the the tip% and comparing the value and setting the style to focus or something of that nature.



//--------------user input---------------

let billAmountInput = document.getElementById('bill-amount-input');
let numberOfPeople = document.getElementById('number-people-input');
//--------------input buttons------------
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const fifteen = document.getElementById('fifteen');
const twenty = document.getElementById('twenty');
const twentyFive = document.getElementById('twenty-five');
const fifty = document.getElementById('fifty');
const custom = document.getElementById('custom');
const resetButton = document.getElementById('reset-button');

//---------------- outputs -------------
let tipAmountOutput = document.getElementById('tip-amount-output');
let perPersonOutput = document.getElementById('per-person-output');

//initialize values;

let billAmount, people, tipAmount;

reset();

const tip = () => {
    return (Math.round((tipAmount * (billAmount / people)) * 100) / 100).toFixed(2);
}

const billPerPerson = () => {
    return (Math.round((billAmount / people) * 100) / 100).toFixed(2);
}

const eventClick = event => {
    event.preventDefault();
    let clickedId = event.target.innerHTML;
    //we need to remove the % and turn into an int and turn into decimal
    tipAmount = parseInt(clickedId.replace('%', '')) / 100;
    tipAmountOutput.innerHTML = `$ ${tip()}`;
}

const onChange = event => {

    if (event.target.id === 'bill-amount-input') {
        billAmount = event.target.value;
        tipAmountOutput.innerHTML = `$ ${tip()}`;
        perPersonOutput.innerHTML = `$ ${billPerPerson()}`;
    }

    if (event.target.id === 'number-people-input') {
        people = event.target.value;
        tipAmountOutput.innerHTML = `$ ${tip()}`;
        perPersonOutput.innerHTML = `$ ${billPerPerson()}`;
    }

    //we will need to process this number to be a decimal
    if (event.target.id === 'custom') {
        let inputValue = event.target.value;
        let processedInput = parseInt(inputValue.replace('%', '')) / 100
        tipAmount = processedInput;
        tipAmountOutput.innerHTML = `$ ${tip()}`;
    }
}

function reset() {
    tipAmountOutput.innerHTML = `$ ${(Math.round(0 * 100) / 100).toFixed(2)}`;
    perPersonOutput.innerHTML = `$ ${(Math.round(0 * 100) / 100).toFixed(2)}`;
    
    custom.value = 0;
    billAmountInput.value = (Math.round(0 * 100) / 100).toFixed(2);
    numberOfPeople.value = 1;

    billAmount = 0;
    people = 1;
    tipAmount = 0.10;
}

//------------ event listeners-----------

five.addEventListener('click', eventClick);
ten.addEventListener('click', eventClick);
fifteen.addEventListener('click', eventClick);
twentyFive.addEventListener('click', eventClick);
fifty.addEventListener('click', eventClick);
resetButton.addEventListener('click', reset);

billAmountInput.addEventListener('input', onChange);
numberOfPeople.addEventListener('input', onChange);
custom.addEventListener('input', onChange);
