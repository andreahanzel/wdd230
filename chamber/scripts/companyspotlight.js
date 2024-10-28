document.addEventListener("DOMContentLoaded", () => {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            if (data.members && Array.isArray(data.members)) {
                // Step 1: Filter members with silver or gold membership levels
                const eligibleMembers = data.members.filter(member => 
                    member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
                );

                // Step 2: Randomly select 2-3 members from the filtered list
                const selectedMembers = getRandomMembers(eligibleMembers, 3);

                // Step 3: Generate HTML and display spotlight members
                displaySpotlights(selectedMembers);
            } else {
                console.error('Invalid members data');
            }
        })
        .catch(error => console.error('Error loading members:', error));
});

// Function to randomly select `count` number of members from an array
function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Return first `count` elements
}

// Function to display spotlight members
function displaySpotlights(members) {
    const container = document.getElementById("companySpotlightContainer");
    container.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberHTML = `
            <div class="company-item">
                <div class="company-item-inner">
                    <!-- Front of the card -->
                    <div class="company-item-front">
                        <img src="images/${member.image}" alt="${member.name}">
                    </div>
                    <!-- Back of the card -->
                    <div class="company-item-back">
                        <h3>${member.name}</h3>
                        <p>${member.description}</p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', memberHTML);
    });
}
