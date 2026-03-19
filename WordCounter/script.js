const input = document.getElementById('input');
const wCount = document.getElementById('wCount');
const cCount = document.getElementById('cCount');

input.addEventListener('input', () => {
    const val = input.value.trim();
    cCount.textContent = val.length;
    wCount.textContent = val ? val.split(/\s+/).length : 0;
});