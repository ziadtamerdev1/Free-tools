const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// العناصر الجديدة (Checkboxes)
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const lists = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+[]{}|;:,.<>?"
};

generateBtn.addEventListener('click', () => {
    let charPool = "";
    if (uppercaseEl.checked) charPool += lists.upper;
    if (lowercaseEl.checked) charPool += lists.lower;
    if (numbersEl.checked) charPool += lists.number;
    if (symbolsEl.checked) charPool += lists.symbol;

    if (charPool === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < lengthField.value; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool.charAt(randomIndex);
    }
    passwordField.value = password;
});

// زر النسخ
copyBtn.addEventListener('click', () => {
    if (passwordField.value === "") return;
    passwordField.select();
    document.execCommand('copy');
    alert('Copied!');
});