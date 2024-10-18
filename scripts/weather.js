// Define the elements in the HTML we want to manipulate
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API key and location for Budapest, Hungary
const apiKey = '0edb12d9e55a404fe35a6de044286fe6';  // My actual API key
const lat = '47.4871';  // Latitude for Budapest, Hungary
const lon = '19.0503';   // Longitude for Budapest, Hungary
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;  // Metric for Celsius

// Asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);  // For debugging/testing purposes
      displayResults(data);  // Call the function to display the data on the page
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log('Error fetching weather data: ', error);
  }
}

// Function to display the fetched weather data
function displayResults(data) {
  // Set the temperature in Celsius with 1 decimal point and include the °C symbol
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  // Set the icon and description from the weather data
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute('src', iconsrc);
  

  // Update the image element with the correct src and alt attributes
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Update the figcaption text to describe the current weather
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); // Capitalize the first letter of the description
}

// Call the function to fetch and display the weather data
apiFetch();
