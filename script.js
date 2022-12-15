const result = document.querySelector('#result');
const expression = document.querySelector('#expr')

//numbers
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

one.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

two.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

three.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

four.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

five.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

six.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

seven.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

eight.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

nine.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

zero.addEventListener('click', (e) => {
    expression.textContent += e.target.innerText;
})

//operators
const addition = document.querySelector('#additionBtn');
const subtract = document.querySelector('#subtractBtn');
const multiply = document.querySelector('#multiplyBtn');
const division = document.querySelector('#divisionBtn');
const modulo = document.querySelector('#percentBtn');
const equal = document.querySelector('#equalBtn');

addition.addEventListener('click', () => {
    expression.textContent += ' + ';
})

subtract.addEventListener('click', () => {
    expression.textContent += ' - ';
})

multiply.addEventListener('click', () => {
    expression.textContent += ' * ';
})

division.addEventListener('click', () => {
    expression.textContent += ' / ';
})

modulo.addEventListener('click', () => {
    expression.textContent += ' % ';
})

equal.addEventListener('click', () => {
    result.textContent = Function('return '+expression.textContent)();
})

//reset
const clear = document.querySelector('#clearBtn');

clear.addEventListener('click', () => {
    if(expression.textContent) result.textContent = expression.textContent = '';
})

//clear
const del = document.querySelector('#deleteBtn');

del.addEventListener('click', () => {
    if(expression.textContent) result.textContent = '';
    const exprList = expression.textContent.split(' ');
    exprList.pop();
    exprList.pop();

    switch(exprList[exprList.length - 1]){
        case '+': case '-': case '*': case '/': case '%':
            exprList[exprList.length - 1] += ' ';
            break;
    }

    expression.textContent = exprList.join(' ');
})

//decimal
const decimal = document.querySelector('#decimalBtn');

decimal.addEventListener('click', (e) => {
    if(expression.textContent.length == 0) expression.textContent = '';
    const exprList = expression.textContent.split(' ');

    const regex = new RegExp('[0-9]+', 'g');
    const isNumber = exprList[exprList.length - 1].match(regex);

    if(isNumber) exprList[exprList.length - 1] += e.target.innerText;
    else console.log('Invalid Expression');

    expression.textContent = exprList.join(' ');
})