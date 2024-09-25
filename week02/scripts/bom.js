// Get references to the input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add event listener for the button click
button.addEventListener('click', () => {
    // Ensure the input isn't blank
    if (input.value !== '') {
        // Create new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text content of the list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Set the aria-label for accessibility
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Append the delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Add delete functionality
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field and focus on it
        input.value = '';
        input.focus();
    } else {
        input.focus(); // If the input is blank, just return focus to it
    }
});
