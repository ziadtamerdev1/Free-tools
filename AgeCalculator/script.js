document.getElementById('calculateBtn').addEventListener('click', function() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) return alert("Select Date!");

    const dob = new Date(dobInput);
    const now = new Date(); // اليوم 19-3-2026

    // 1. الحساب الدقيق للعمر (السنة، الشهر، اليوم)
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // 2. عرض العمر الأساسي
    document.getElementById('gregorianAge').innerHTML = `<strong>${years}</strong> Years, <strong>${months}</strong> Months, <strong>${days}</strong> Days`;

    // 3. حسابات بصيغ مختلفة
    const diffTime = Math.abs(now - dob);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    document.getElementById('totalMonths').textContent = (years * 12 + months).toLocaleString();
    document.getElementById('totalWeeks').textContent = Math.floor(diffDays / 7).toLocaleString();
    document.getElementById('totalDays').textContent = diffDays.toLocaleString();
    document.getElementById('totalHours').textContent = (diffDays * 24).toLocaleString();

    // 4. حقائق مرحة
    document.getElementById('heartBeats').textContent = (diffDays * 24 * 60 * 75).toLocaleString(); // متوسط 75 نبضة
    document.getElementById('breaths').textContent = (diffDays * 24 * 60 * 15).toLocaleString(); // متوسط 15 نفس
    document.getElementById('sleep').textContent = (years / 3).toFixed(1); // ثلث العمر نوم
    
    // 5. البرج (Zodiac)
    document.getElementById('zodiac').textContent = getZodiac(dob.getDate(), dob.getMonth() + 1);

    document.getElementById('result').style.display = 'block';
});

function getZodiac(day, month) {
    if((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius (القوس)";
    if((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn (الجدي)";
    // ... يمكن إضافة باقي الأبراج هنا بنفس الطريقة
    return "Check your zodiac!";
}