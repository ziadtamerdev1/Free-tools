const colorInput = document.getElementById('colorInput');
const hexCode = document.getElementById('hexCode');
const rgbCode = document.getElementById('rgbCode');
const preview = document.getElementById('preview');

// وظيفة لتحويل HEX إلى RGB
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

colorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    
    // تحديث النصوص والمعاينة
    hexCode.textContent = color.toUpperCase();
    rgbCode.textContent = hexToRgb(color);
    preview.style.backgroundColor = color;
});

// إضافة ميزة النسخ عند الضغط على الكود
[hexCode, rgbCode].forEach(el => {
    el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.textContent);
        alert('Code copied to clipboard: ' + el.textContent);
    });
});