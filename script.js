const apiKey = "c4de759b819646b3e49b65c9370a65ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBtn = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");

async function checkWeather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    const data = await response.json();
    document.querySelector(".weather").style.display = "block";
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherIcon = document.querySelector(".weather-icon");
    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if(data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png";
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";}   

    searchInput.value = "";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchInput.value);
    }
});
