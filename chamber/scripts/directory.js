// DIRECTORY PAGE SCRIPTS

// Get the buttons and the members container
const gridButton = document.querySelector("#grid-directory");
const listButton = document.querySelector("#list-directory");
const membersContainer = document.querySelector("#membersContainer");

// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Load members from the JSON file
  fetch('data/members.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.members && Array.isArray(data.members)) {
        displayMembers(data.members); // Call function to display members
      } else {
        console.error('Invalid members data');
      }
    })
    .catch(error => console.error('Error loading members:', error));

  // Function to display members dynamically based on JSON data
  function displayMembers(members) {
    membersContainer.innerHTML = ''; // Clear existing content

    members.forEach(member => {
      const memberHTML = `
        <section class="directory-section">
          <img src="images/${member.image}" alt="${member.name}" />
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <button class="visit-button" onclick="window.open('${member.website}', '_blank')">Visit Website</button>
          <p>${member.membershipLevel} Member</p>
        </section>
      `;
      membersContainer.insertAdjacentHTML('beforeend', memberHTML);
    });
  }

  // Event listener for grid view
  gridButton.addEventListener("click", () => {
    membersContainer.classList.add("gridDirectory");
    membersContainer.classList.remove("listDirectory");
  });

  // Event listener for list view
  listButton.addEventListener("click", () => {
    membersContainer.classList.add("listDirectory");
    membersContainer.classList.remove("gridDirectory");
  });

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

  // Menu toggle
  const myButton = document.getElementById('myButton');
  const menuLinks = document.querySelector('ul.menuLinks');

  if (myButton && menuLinks) {
    // Toggle the 'open' class when the hamburger button is clicked
    myButton.addEventListener('click', () => {
      menuLinks.classList.toggle('open');
      myButton.classList.toggle('open');
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
});
