// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the footer
document.getElementById("modDate").textContent = lastModified;
