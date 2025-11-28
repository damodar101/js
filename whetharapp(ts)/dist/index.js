"use strict";
// ---------- Debounce Function ----------
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
// ----------  Weather Function ----------
async function fetchWeather() {
    const cityInput = document.getElementById("cityInput");
    const loading = document.getElementById("loading");
    const result = document.getElementById("weatherResult");
    if (!cityInput || !loading || !result)
        return;
    const city = cityInput.value.trim();
    if (!city) {
        result.classList.add("hidden");
        loading.classList.add("hidden");
        return;
    }
    // Show loading spinner
    loading.classList.remove("hidden");
    loading.innerHTML = '<span class="spinner"></span> Loading...';
    result.classList.add("hidden");
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75a96c434d123366265d96fc038da370&units=metric`);
        if (!res.ok) {
            loading.innerText = "City Not Found!";
            result.classList.add("hidden");
            return;
        }
        const data = await res.json();
        // Hide loading, show result
        loading.classList.add("hidden");
        result.classList.remove("hidden");
        const cityName = document.getElementById("cityName");
        const temp = document.getElementById("temp");
        const description = document.getElementById("description");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");
        const icon = document.getElementById("icon");
        if (cityName)
            cityName.innerText = data.name;
        if (temp)
            temp.innerText = `Temperature: ${data.main.temp}°C`;
        if (description)
            description.innerText = `Weather: ${data.weather[0].description}`;
        if (humidity)
            humidity.innerText = `Humidity: ${data.main.humidity}%`;
        if (wind)
            wind.innerText = `Wind: ${data.wind.speed} km/h`;
        if (icon)
            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
    catch (error) {
        if (loading)
            loading.innerText = "Error fetching weather!";
        if (result)
            result.classList.add("hidden");
        console.error(error);
    }
}
// ---------- Wrap Fetch Weather with Debounce ----------
const debouncedFetch = debounce(fetchWeather, 700);
// ---------- Add Event Listener ----------
const cityInputEl = document.getElementById("cityInput");
if (cityInputEl) {
    cityInputEl.addEventListener("input", debouncedFetch);
}
//# sourceMappingURL=index.js.map