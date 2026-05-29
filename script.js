const apiKey = "66c5a4b72141b4fde0f0ce4e80ec43f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(
        apiUrl + city + `&appid=${apiKey}`
    );

    if(response.status == 404){
        alert("City Not Found");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML =
    data.name;

    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";

    document.querySelector(".wind").innerHTML =
    data.wind.speed + " km/h";

    const weather = data.weather[0].main;

    if(weather == "Clouds"){
        weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
    }
    else if(weather == "Clear"){
        weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }
    else if(weather == "Rain"){
        weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/3351/3351979.png";
    }
    else if(weather == "Drizzle"){
        weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/414/414974.png";
    }
    else if(weather == "Mist"){
        weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        checkWeather(searchBox.value);
    }
});

checkWeather("Coimbatore");