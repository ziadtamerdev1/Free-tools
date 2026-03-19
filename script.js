document.getElementById('calculateBtn').addEventListener('click', function() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) return alert("Please select your birth date!");

    const dob = new Date(dobInput);
    const now = new Date();

    // 1. Current Age Calculation
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

    // 2. Next Birthday Countdown (Months, Days, Hours)
    let nextBday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
    if (now > nextBday) {
        nextBday.setFullYear(now.getFullYear() + 1);
    }
    
    let diffMs = nextBday - now;
    let daysLeftTotal = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    let monthsLeft = Math.floor(daysLeftTotal / 30.44);
    let remainingDays = Math.floor(daysLeftTotal % 30.44);
    let hoursLeft = Math.floor((diffMs / (1000 * 60 * 60)) % 24);

    // 3. Life Details
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const getSeason = (m) => {
        if (m >= 2 && m <= 4) return "Spring";
        if (m >= 5 && m <= 7) return "Summer";
        if (m >= 8 && m <= 10) return "Autumn";
        return "Winter";
    };

    const getStage = (age) => {
        if (age < 13) return "Childhood";
        if (age < 17) return "Middle Adolescence";
        if (age < 20) return "Late Adolescence";
        return "Adulthood";
    };

    // 4. Fun Facts Calculations
    const totalDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
    const breaths = (totalDays * 20000).toLocaleString(); // Avg 20k per day
    const heartbeats = (totalDays * 100000).toLocaleString(); // Avg 100k per day

    // Injecting into HTML
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="card main-res" style="text-align:left; border-left: 5px solid #3498db; background:#f0f7ff; padding:15px; border-radius:10px;">
            <h4 style="margin-bottom:10px;">Gregorian Age</h4>
            <p>Birth Date: <b>${dob.getFullYear()}-${dob.getMonth()+1}-${dob.getDate()}</b></p>
            <p>Birth Month: <b>${monthsArr[dob.getMonth()]}</b></p>
            <p>Age: <b>${years} Years, ${months} Months, ${days} Days</b></p>
        </div>

        <div class="card next-bday" style="text-align:left; border-left: 5px solid #f1c40f; background:#fffdf0; padding:15px; border-radius:10px; margin-top:15px;">
            <h4 style="margin-bottom:10px;">Next Birthday Countdown</h4>
            <p>Remaining: <b>${monthsLeft} Months, ${remainingDays} Days, ${hoursLeft} Hours</b></p>
            <p>Next Birthday: <b>${daysArr[nextBday.getDay()]}, ${nextBday.getFullYear()}-${nextBday.getMonth()+1}-${nextBday.getDate()}</b></p>
        </div>

        <div class="card facts" style="text-align:left; border-left: 5px solid #2ecc71; background:#f0fff4; padding:15px; border-radius:10px; margin-top:15px;">
            <h4 style="margin-bottom:10px;">Life Facts</h4>
            <p>Born on: <b>${daysArr[dob.getDay()]}</b></p>
            <p>Season: <b>${getSeason(dob.getMonth())}</b></p>
            <p>Life Stage: <b>${getStage(years)}</b></p>
            <hr style="margin:10px 0; border:0; border-top:1px solid #ddd;">
            <p>Total Days: <b>${totalDays.toLocaleString()} days</b></p>
            <p>Heartbeats: <b>~${heartbeats} times</b></p>
            <p>Breaths: <b>~${breaths} times</b></p>
        </div>
    `;
    resultDiv.style.display = 'block';
});