// Define the elements in the HTML we want to manipulate for the Chamber page
const chamberTemp = document.querySelector('#chamber-current-temp');
const chamberWeatherIcon = document.querySelector('#chamber-weather-icon');
const chamberCaptionDesc = document.querySelector('#chamber-caption-desc');
const chamberWeatherDesc = document.querySelector('#chamber-weather-desc');
const chamberForecastContainer = document.querySelector('#chamber-forecast');

// OpenWeatherMap API key and location for Budapest, Hungary
const apiKey = '0edb12d9e55a404fe35a6de044286fe6';  // Your actual API key
const lat = '47.4871';  // Latitude for Budapest, Hungary
const lon = '19.0503';  // Longitude for Budapest, Hungary

// URLs for current weather and forecast
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Fetch and display current weather data
async function fetchChamberCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayChamberCurrentWeather(data);  // Call function to display current weather data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('Error fetching current weather data:', error);
  }
}

// Function to display current weather data
function displayChamberCurrentWeather(data) {
  // Set the temperature in Celsius with 1 decimal point and include the °C symbol
  chamberTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  // Set the weather description and icon
  const desc = data.weather[0].description;
  chamberWeatherDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  chamberWeatherIcon.setAttribute('src', iconsrc);
  chamberWeatherIcon.setAttribute('alt', desc);

  // Update the figcaption text with description
  chamberCaptionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}

// Fetch and display 3-day forecast data
async function fetchChamberForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const forecastData = await response.json();
      displayChamberForecast(forecastData);  // Call function to display forecast
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('Error fetching forecast data:', error);
  }
}

// Function to display the 3-day forecast
function displayChamberForecast(forecastData) {
  chamberForecastContainer.innerHTML = '';  // Clear any existing forecast data

  // Filter forecast to get the next 3 days at noon (12:00:00)
  const dailyData = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

  // Populate forecast data
  dailyData.forEach((day, index) => {
    const temp = day.main.temp.toFixed(1);
    const desc = day.weather[0].description;
    chamberForecastContainer.innerHTML += `<p>Day ${index + 1}: ${temp}°C - ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>`;
  });
}

// Call the functions to fetch and display the weather data
fetchChamberCurrentWeather();
fetchChamberForecast();
