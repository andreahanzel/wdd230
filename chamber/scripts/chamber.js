// Update the last modified date in the footer
const lastModified = document.getElementById('last-modified');
if (lastModified) {
    const modifiedDate = new Date(document.lastModified);
    lastModified.textContent = modifiedDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}


const myButton = document.getElementById('myButton');
const menuLinks = document.querySelector('ul.menuLinks');

// Toggle the 'open' class when the hamburger button is clicked
myButton.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
    myButton.classList.toggle('open');

    // Toggle the button content between hamburger and "X"
    myButton.textContent = myButton.classList.contains('open') ? '✕' : '☰';
});

// Reset menu when resizing from mobile to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuLinks.classList.remove('open');
        myButton.classList.remove('open');
        myButton.textContent = '☰'; // Reset to hamburger icon
    }
});


// Calendar
// Calendar Variables
const currentMonthEl = document.getElementById('current-month');
const calendarBody = document.getElementById('calendar-body');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Function to generate the calendar days
function generateCalendar(month, year) {
    calendarBody.innerHTML = ''; // Clear previous calendar body
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Update the month display
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    currentMonthEl.textContent = `${monthNames[month]} ${year}`;

    // Create the days grid
    let date = 1;
    for (let i = 0; i < 6; i++) { // 6 rows to cover all possible weeks in a month
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) { // 7 columns for the days of the week
            const cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                cell.textContent = ''; // Empty cells before the first day of the month
            } else if (date > daysInMonth) {
                break; // Stop when we've reached the end of the month
            } else {
                cell.textContent = date;
                cell.classList.add('calendar-day'); // Add class to each day
                cell.addEventListener('click', () => alert(`You clicked on ${monthNames[month]} ${date}, ${year}`)); // Click event for each day
                
                // Highlight today's date
                if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    cell.classList.add('current-day'); 
                }
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

// Function to switch months
function switchMonth(change) {
    currentMonth += change;

    if (currentMonth === 12) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth === -1) {
        currentMonth = 11;
        currentYear--;
    }

    generateCalendar(currentMonth, currentYear);
}

// Event Listeners for Previous and Next buttons
prevMonthBtn.addEventListener('click', () => switchMonth(-1));
nextMonthBtn.addEventListener('click', () => switchMonth(1));

// Initial Calendar Display
generateCalendar(currentMonth, currentYear);



// Carousel Autoplay Animation

const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;
let slideInterval;
const intervalTime = 4000; // 4 seconds for each slide

// Function to show the active slide
function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.classList.remove('active'); // Remove active class from all slides
        if (i === index) {
            item.classList.add('active'); // Add active class to the current slide
        }
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length; // Loop back to the first slide
    showSlide(currentSlide);
}

// Start the autoplay function
function startAutoplay() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Stop the autoplay function (when hovered)
function stopAutoplay() {
    clearInterval(slideInterval);
}

// Initialize the carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Show the first slide
    startAutoplay();

    // Add hover event to pause and resume autoplay
    carouselItems.forEach(item => {
        item.addEventListener('mouseover', stopAutoplay);
        item.addEventListener('mouseout', startAutoplay);
    });
});


// milliseconds to days constant
const msToDays = 86400000;

// Function to check and display the visit message
function displayVisitMessage() {
    const visitMessageElement = document.getElementById('visitMessage');
    const now = new Date();
    const lastVisit = localStorage.getItem('lastVisit');

    // If no last visit, it's the user's first visit
    if (!lastVisit) {
        visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = now - lastVisitDate;
        const daysDifference = Math.floor(timeDifference / msToDays); // Convert milliseconds to days

        // Display message based on how long ago they visited
        if (daysDifference < 1) {
            visitMessageElement.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessageElement.textContent = "You last visited 1 day ago.";
        } else {
            visitMessageElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    // Save the current visit in localStorage
    localStorage.setItem('lastVisit', now);
}

function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdownContent = document.getElementById('dropdownContent');
    
    // Toggle the open class to show or hide the dropdown content
    dropdownContent.classList.toggle('open');
}


