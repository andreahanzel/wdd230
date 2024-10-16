const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Function to fetch the prophet data
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

// Function to display the prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');

    // Full name of prophet
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    
    // Birthdate and birthplace information
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Prophet portrait image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // Append the elements to the card section
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    // Add the card to the container
    cards.appendChild(card);
  });
};

getProphetData();
