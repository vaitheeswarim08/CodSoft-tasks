const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn:not(#clear):not(#equal)');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

// எண்களை திரையில் காட்ட Event Listeners
buttons.forEach(button => {
button.addEventListener('click', () => {
const value = button.getAttribute('data-value');
if (display.value === '0') {
display.value = value;
} else {
display.value += value;
}
});
});

// Clear பட்டன் வேலை செய்ய
clearBtn.addEventListener('click', () => {
display.value = '';
});

// கணக்கிட (= பட்டன்)
equalBtn.addEventListener('click', () => {
try {
if(display.value) {
display.value = eval(display.value);
}
} catch (error) {
display.value = 'Error';
}
});