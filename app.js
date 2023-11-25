function getWeatherInfo() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;

    
    function fetchInformationFromServer(name, location) {
        return fetch('/api/information', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, location }),
        })
        .then(response => response.json());
    }
    
        // .catch(error => {
        //     console.error('Error fetching information:', error);
        //     alert('Error fetching information. Please try again.');
        // });
}

function displayWeatherInfo(weather) {
    const weatherInfoElement = document.getElementById('weatherInfo');
    weatherInfoElement.textContent = `Weather: ${weather}`;
}

function displayCountryInfo(country) {
    const countryInfoElement = document.getElementById('countryInfo');
    countryInfoElement.textContent = `Country: ${country}`;
}

// Example: Mock server request
function fetchInformationFromServer(name, location) {
    return new Promise((resolve, reject) => {
        // Simulating server delay
        setTimeout(() => {
            // Replace this with actual server requests to get weather and country information
            const mockResponse = {
                weather: 'Sunny',
                country: 'Country Details Placeholder',
            };
            resolve(mockResponse);
        }, 1000);
    });
}
