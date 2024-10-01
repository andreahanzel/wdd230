// Get references to the input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn');  // Updated to reference the button by ID
const list = document.querySelector('#list');

// 1️⃣ Initialize display element variable for number of visits
const visitsDisplay = document.querySelector(".visits");

// Declare array to hold the chapters (load from localStorage if available)
let chaptersArray = getChapterList() || [];

// Populate the list with saved chapters (if any exist in localStorage)
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Function to retrieve chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Add event listener for the button click
button.addEventListener('click', () => {
    // Ensure the input isn't blank
    if (input.value !== '') {
        // Call the function to display the new chapter
        displayList(input.value);

        // Add the chapter to the array
        chaptersArray.push(input.value);

        // Update localStorage
        setChapterList();

        // Clear the input field and focus on it
        input.value = '';
        input.focus();
    } else {
        input.focus(); // If the input is blank, just return focus to it
    }
});

// Function to display a chapter in the list
function displayList(chapter) {
    // Create new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the text content of the list item and delete button
    li.textContent = chapter;
    deleteButton.textContent = '❌';

    // Set the aria-label for accessibility
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    // Append the delete button to the list item
    li.append(deleteButton);

    // Append the list item to the list
    list.append(li);

    // Add delete functionality
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Function to save chapters to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to remove a chapter from the list and update localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the ❌ from the text
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove the chapter from the array
    setChapterList(); // Update localStorage
}

// New Code for Tracking Number of Visits
// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
