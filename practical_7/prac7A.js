let input1 = 0;
let input2 = 0;
let flag = 0;
let displayval = '';
let result;
let oprtn = '';

function updatedisplay(val) {
    if (flag === 0) {
        input1 = input1 * 10 + val;
        displayval = String(input1);
    } else {
        input2 = input2 * 10 + val;
        let operatorDisplay = '';
        if (oprtn === '+') operatorDisplay = ' + ';
        else if (oprtn === '-') operatorDisplay = ' - ';
        else if (oprtn === '*') operatorDisplay = ' * ';
        else if (oprtn === '/') operatorDisplay = ' / ';
        displayval = String(input1) + operatorDisplay + String(input2);
    }
    document.getElementById('display').value = displayval;
}

function Addfn() {
    flag = 1;
    oprtn = '+';
    displayval = String(input1) + ' + ';
    input2 = 0;
    document.getElementById('display').value = displayval;
}

function Subtractfn() {
    flag = 1;
    oprtn = '-';
    displayval = String(input1) + ' - ';
    input2 = 0;
    document.getElementById('display').value = displayval;
}

function Multiplyfn() {
    flag = 1;
    oprtn = '*';
    displayval = String(input1) + ' * ';
    input2 = 0;
    document.getElementById('display').value = displayval;
}

function Dividefn() {
    flag = 1;
    oprtn = '/';
    displayval = String(input1) + ' / ';
    input2 = 0;
    document.getElementById('display').value = displayval;
}

function refreshfn() {
    input1 = 0;
    input2 = 0;
    result = 0;
    oprtn = '';
    displayval = '';
    flag = 0;
    document.getElementById('display').value = displayval;
}

function resultfn() {
    if (oprtn === '+') {
        result = input1 + input2;
    } else if (oprtn === '-') {
        result = input1 - input2;
    } else if (oprtn === '*') {
        result = input1 * input2;
    } else if (oprtn === '/') {
        if (input2 === 0) {
            document.getElementById('display').value = "Undefined Error!!!";
            input1 = 0;
            input2 = 0;
            flag = 0;
            oprtn = '';
            displayval = '';
            return;
        } else {
            result = input1 / input2;
        }
    }
    
    document.getElementById('display').value = result;
    
    input1 = result;
    input2 = 0;
    oprtn = '';
    flag = 0;
    displayval = String(result);
}