async function fetchAndProcessData(url) {
    try {
        // Отправляем запрос
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Парсим ответ как JSON
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching and processing data:', error);
        return `An error occurred: ${error.message}`;
    }
}

// YouTube Data API
const apiKey = 'AIzaSyBm2bzkHIHdWwqiRF5KeDyvdxPzFd3IABk'; 
const videoId = 'KnkDoy_TCiM';
const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics`;

fetchAndProcessData(url)
    .then(result => {
        console.log(result);
    });
