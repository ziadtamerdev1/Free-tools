const ipAddr = document.getElementById('ip-address');
const city = document.getElementById('city');
const country = document.getElementById('country');
const isp = document.getElementById('isp');
const timezone = document.getElementById('timezone');
const detailsCard = document.getElementById('ip-details');
const loader = document.getElementById('loader');
const refreshBtn = document.getElementById('refreshBtn');

async function fetchIPDetails() {
    loader.style.display = 'block';
    detailsCard.style.display = 'none';

    try {
        // نطلب البيانات من API مجاني
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // نوزع البيانات في الصفحة
        ipAddr.textContent = data.ip;
        city.textContent = data.city;
        country.textContent = data.country_name;
        isp.textContent = data.org;
        timezone.textContent = data.timezone;

        loader.style.display = 'none';
        detailsCard.style.display = 'block';
    } catch (error) {
        loader.textContent = "Failed to load info. Check your connection.";
        console.error("Error fetching IP:", error);
    }
}

// تشغيل الأداة بمجرد فتح الصفحة
window.onload = fetchIPDetails;

// زر التحديث
refreshBtn.addEventListener('click', fetchIPDetails);