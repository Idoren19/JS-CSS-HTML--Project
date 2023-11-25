const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/api/information', (req, res) => {
    const { name, location } = req.body;

    // Simulate fetching real-time weather and country information
    const weather = getWeatherInfo();
    const country = getCountryInfo();

    res.json({ weather, country });
});

function getWeatherInfo() {
    // Replace this with actual weather API call
    return 'Sunny';
}

function getCountryInfo() {
    // Replace this with actual country API call
    return 'Country Details Placeholder';
}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
