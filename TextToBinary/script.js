const textInput = document.getElementById('textInput');
const binaryOutput = document.getElementById('binaryOutput');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    const binary = text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
    binaryOutput.value = binary;
});

document.getElementById('copyBtn').addEventListener('click', () => {
    binaryOutput.select();
    document.execCommand('copy');
    alert('Binary copied!');
});