// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("modDate").textContent = lastModified;

// Hamburger menu toggle
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');

    // Toggle between three lines and 'X'
    if (hamburgerElement.classList.contains('open')) {
        hamburgerElement.innerHTML = 'X'; // Change to X when menu is open
    } else {
        hamburgerElement.innerHTML = '&#9776;'; // Change back to ≡ when menu is closed
    }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change button text based on current mode
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Toggle Light Mode'; // Set button to light mode
    } else {
        darkModeToggle.textContent = 'Toggle Dark Mode'; // Set button to dark mode
    }
});
