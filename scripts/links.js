// Define base URL and links URL
const baseURL = "https://github.com/andreahanzel/wdd230/";
const linksURL = `${baseURL}data/links.json`; // Reference to JSON data

// Function to fetch links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      displayLinks(data.weeks);
    } else {
      console.error('Failed to fetch links.');
    }
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

// Function to dynamically display links
const displayLinks = (weeks) => {
  const ul = document.querySelector('.card1 ul'); // Target the <ul> in card1
  ul.innerHTML = ''; // Clear out the static HTML content

  // Loop through the weeks and generate the link structure dynamically
  weeks.forEach((week) => {
    let li = document.createElement('li'); // Create a new list item for each week
    li.innerHTML = `${week.week}: `; // Add the week title (e.g., "Week 01")

    // Loop through each link for the week and add them to the list
    week.links.forEach((link, index) => {
      let a = document.createElement('a');
      a.href = link.url; // Set the URL for the link
      a.textContent = link.title; // Set the text for the link
      if (index < week.links.length - 1) {
        a.innerHTML += ' | '; // Add a separator if it's not the last link
      }
      li.appendChild(a); // Append each link to the list item
    });

    ul.appendChild(li); // Append the list item to the <ul>
  });
};

// Call the function to fetch and display the links
getLinks();
