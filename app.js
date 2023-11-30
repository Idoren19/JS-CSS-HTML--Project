async function getWeatherInfo() {
    try {
        const name = document.getElementById('name').value;
        const location = document.getElementById('location').value;

        // Fetch weather information
        const weatherData = await fetchWeatherData(location);

        // Fetch country information
        const countryData = await fetchCountryData(location);

        // Display information
        displayWeatherInfo(name, weatherData);
        displayCountryInfo(countryData);
    } catch (error) {
        console.error(error.message);
    }
}

async function fetchWeatherData(location) {
    const apiKey = '98e5999974094e7a14f1093f873c84c0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${data.message}`);
    }

    return data;
}

async function fetchCountryData(location) {
    const apiUrl = `https://restcountries.com/v3.1/name/${location}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Failed to fetch country data: ${data.message}`);
    }

    return data[0];
}

function displayWeatherInfo(name, weatherData) {
    const weatherInfoElement = document.getElementById('weatherInfo');
    weatherInfoElement.innerHTML = `
        <h2>Hello, ${name}!</h2>
        <p>Current weather in ${weatherData.name}:</p>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
}

function displayCountryInfo(countryData) {
    const countryInfoElement = document.getElementById('countryInfo');
    countryInfoElement.innerHTML = `
        <h2>About ${countryData.name.common}</h2>
        <p>Capital: ${countryData.capital}</p>
        <p>Region: ${countryData.region}</p>
        <!-- Add more information as needed -->
    `;
}
