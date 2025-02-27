// Example: Fetch weather data from an API
const cities = ["Los Angeles", "New York", "Seattle"];

cities.forEach(city => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`)
        .then(response => response.json())
        .then(data => {
            const weatherCard = document.querySelector(`.weather-card:has(h2:contains("${city}"))`);
            if (weatherCard) {
                weatherCard.querySelector("p:nth-of-type(1)").textContent = `Temperature: ${data.current.temp_c}°C`;
                weatherCard.querySelector("p:nth-of-type(2)").textContent = `Condition: ${data.current.condition.text}`;
                weatherCard.querySelector("img").src = `images/${data.current.condition.text.toLowerCase()}.png`;
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
});