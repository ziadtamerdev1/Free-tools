const metersInput = document.getElementById('meters');
const feetInput = document.getElementById('feet');
const clearBtn = document.getElementById('clear');

// 1 Meter = 3.28084 Feet
metersInput.addEventListener('input', () => {
    const m = parseFloat(metersInput.value);
    if (!isNaN(m)) {
        feetInput.value = (m * 3.28084).toFixed(2);
    } else {
        feetInput.value = '';
    }
});

feetInput.addEventListener('input', () => {
    const f = parseFloat(feetInput.value);
    if (!isNaN(f)) {
        metersInput.value = (f / 3.28084).toFixed(2);
    } else {
        metersInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    metersInput.value = '';
    feetInput.value = '';
});