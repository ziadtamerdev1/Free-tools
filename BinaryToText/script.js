const binaryInput = document.getElementById('binaryInput');
const textOutput = document.getElementById('textOutput');

document.getElementById('convertBtn').addEventListener('click', () => {
    const binary = binaryInput.value.trim();
    try {
        const text = binary.split(' ').map(bin => {
            return String.fromCharCode(parseInt(bin, 2));
        }).join('');
        textOutput.value = text;
    } catch (e) {
        alert('Invalid Binary Format!');
    }
});