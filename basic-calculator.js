function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function delValue(value) {
    var input = document.getElementById("display"); 
    input.value = input.value.substring(0, input.value.length - 1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
