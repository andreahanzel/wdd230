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
