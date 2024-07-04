const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const API_KEY = '7e55bd9c30c6b039e87634ce2facdb2a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

app.get('/weather', async (req, res) => {
    try {
        const { data } = await axios.get(apiUrl, {
            params: {
                q: 'London',
                appid: API_KEY
            }
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
