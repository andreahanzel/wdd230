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

// Ensure DOM is loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const menuLinks = document.querySelector('ul.menuLinks');

    if (myButton && menuLinks) {
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
    }

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
    showSlide(currentSlide); // Show the first slide
    startAutoplay();

    // Add hover event to pause and resume autoplay
    carouselItems.forEach(item => {
        item.addEventListener('mouseover', stopAutoplay);
        item.addEventListener('mouseout', startAutoplay);
    });

    // Function to display the current timestamp in the form field
    let timestampField = document.getElementById("timestamp");
    if (timestampField) {
        let currentTimestamp = new Date().toISOString();
        timestampField.value = currentTimestamp;
    }

    // For the title field
    const titleField = document.getElementById("title");
    if (titleField) {
        titleField.addEventListener("input", function () {
            const pattern = /^[A-Za-z\s\-]{7,}$/;
            if (!pattern.test(titleField.value)) {
                titleField.setCustomValidity("Title must be at least 7 characters and contain only letters, spaces, or hyphens.");
            } else {
                titleField.setCustomValidity("");
            }
        });
    }

    // For the phone field
    const phoneField = document.getElementById("phone");
    if (phoneField) {
        phoneField.addEventListener("input", function () {
            const phonePattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
            if (!phonePattern.test(phoneField.value)) {
                phoneField.setCustomValidity("Please enter a valid phone number.");
            } else {
                phoneField.setCustomValidity("");
            }
        });
    }
}); // Add closing brace and parentheses here for the DOMContentLoaded event
