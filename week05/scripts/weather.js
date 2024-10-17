// Define the elements in the HTML we want to manipulate
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL for OpenWeatherMap API (for Trier, Germany)
const apiKey = '0edb12d9e55a404fe35a6de044286fe6';  // My actual API key
const lat = '49.75';  // Latitude for Trier, Germany
const lon = '6.64';   // Longitude for Trier, Germany
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);  // For testing purposes
      displayResults(data);  // Call display function to show the data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to display the fetched weather data
function displayResults(data) {
  // Set the temperature
  currentTemp.innerHTML = `${data.main.temp.toFixed(2)}&deg;F`;

  // Set the icon and description
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const desc = data.weather[0].description;

  // Update the image element with the new src and alt attributes
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Update the caption text to describe the weather
  captionDesc.textContent = desc;
}

// Call the function to fetch and display the weather data
apiFetch();
