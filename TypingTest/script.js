const textDisplay = document.getElementById('text-display');
const inputField = document.getElementById('input-field');
const timerEl = document.getElementById('timer');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const retryBtn = document.getElementById('retryBtn');

const sampleText = "The quick brown fox jumps over the lazy dog. Programming is not about what you know; it's about what you can figure out. Practice makes perfect when it comes to typing speed.";

let timer = 60;
let interval = null;
let isTyping = false;
let errors = 0;

function initTest() {
    textDisplay.innerHTML = "";
    sampleText.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('char');
        span.innerText = char;
        textDisplay.appendChild(span);
    });
    textDisplay.querySelectorAll('.char')[0].classList.add('current');
}

inputField.addEventListener('input', () => {
    const characters = textDisplay.querySelectorAll('.char');
    const typedText = inputField.value.split('');
    
    if (!isTyping) {
        isTyping = true;
        startTimer();
    }

    errors = 0;
    characters.forEach((charSpan, index) => {
        const typedChar = typedText[index];
        
        charSpan.classList.remove('current', 'correct', 'incorrect');

        if (typedChar == null) {
            if (index === typedText.length) charSpan.classList.add('current');
        } else {
            if (typedChar === charSpan.innerText) {
                charSpan.classList.add('correct');
            } else {
                charSpan.classList.add('incorrect');
                errors++;
            }
        }
    });

    // حساب الـ WPM والدقة
    let words = inputField.value.trim().split(/\s+/).length;
    wpmEl.innerText = Math.round((words / (60 - timer)) * 60) || 0;
    accuracyEl.innerText = Math.round(((typedText.length - errors) / typedText.length) * 100) || 100;
});

function startTimer() {
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerEl.innerText = timer;
        } else {
            clearInterval(interval);
            inputField.disabled = true;
            alert(`Test Over! Your speed is ${wpmEl.innerText} WPM.`);
        }
    }, 1000);
}

retryBtn.addEventListener('click', () => {
    location.reload();
});

initTest();