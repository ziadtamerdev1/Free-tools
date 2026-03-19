const qrInput = document.getElementById('qr-input');
const qrCanvas = document.getElementById('qrcode-canvas');

// إنشاء الكائن المسؤول عن توليد الكود بمقاس 200x200
const qrcode = new QRCode(qrCanvas, {
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

// وظيفة لتحديث الكود فور الكتابة
qrInput.addEventListener('input', (e) => {
    const text = e.target.value.trim();
    
    if (text === "") {
        // لو الخانة فاضية، بنخفي الكود أو نضع صورة تجريبية
        qrCanvas.style.visibility = "hidden";
    } else {
        qrCanvas.style.visibility = "visible";
        qrcode.makeCode(text);
    }
});

// توليد كود مبدئي عند فتح الصفحة
qrcode.makeCode("Welcome to WebTools!");