// Set current year in the footer
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}
// Set last modified date with time
const lastModifiedElement = document.getElementById("modDate");
const lastModified = new Date(document.lastModified);
if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModified.toLocaleString(); // Show date and time
}
const myButton = document.getElementById('myButton');
const menuLinks = document.querySelector('ul.menuLinks');

// Toggle the 'open' class when the hamburger button is clicked
myButton.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
    
    // Toggle the button content between hamburger and "X"
    if (myButton.textContent === '\u2630') { // Unicode for hamburger (three lines)
        myButton.textContent = '\u2715'; // Unicode for 'X'
    } else {
        myButton.textContent = '\u2630'; // Unicode for hamburger (three lines)
    }
});

// Function to toggle between dark and light mode
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    
    // Toggle between light and dark modes
    document.body.dataset.theme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update button text based on the current theme
    if (document.body.dataset.theme === 'dark') {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Initialize button text based on the current theme on page load
window.addEventListener('DOMContentLoaded', () => {
    if (document.body.dataset.theme === 'dark') {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }

    // Initialize the hamburger menu button with the correct symbol
    myButton.textContent = '\u2630'; // Unicode for hamburger (three lines)
});

