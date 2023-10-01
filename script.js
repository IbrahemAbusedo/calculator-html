let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function operate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
function convertToUSD() {
    const shekels = parseFloat(currentInput);
    if (!isNaN(shekels)) {
        const usd = shekels * 0.29; 
        document.getElementById('display').value = usd.toFixed(2);
        currentInput = usd.toFixed(2);
    }
}

function convertToILS() {
    const usd = parseFloat(currentInput);
    if (!isNaN(usd)) {
        const shekels = usd * 3.43; 
        document.getElementById('display').value = shekels.toFixed(2);
        currentInput = shekels.toFixed(2);
    }
}

function convertToEUR() {
    const shekels = parseFloat(currentInput);
    if (!isNaN(shekels)) {
        const euros = shekels * 0.26; 
        document.getElementById('display').value = euros.toFixed(2);
        currentInput = euros.toFixed(2);
    }
}

function convertToILSFromEUR() {
    const euros = parseFloat(currentInput);
    if (!isNaN(euros)) {
        const shekels = euros * 3.83; 
        document.getElementById('display').value = shekels.toFixed(2);
        currentInput = shekels.toFixed(2);
    }
}

