 // Milliseconds to days constant
 const msToDays = 86400000;

 // Function to check and display the visit message
 function displayVisitMessage() {
     const visitMessageElement = document.getElementById('visitMessage');

     // Ensure that localStorage is available
     if (typeof(Storage) === "undefined") {
         console.error("LocalStorage is not available in this browser.");
         visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
         return;
     }

     const now = new Date();
     const lastVisit = localStorage.getItem('lastVisit');

     // If no last visit, it's the user's first visit
     if (!lastVisit) {
         visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
     } else {
         const lastVisitDate = new Date(lastVisit);

         // Check if the last visit date is valid
         if (isNaN(lastVisitDate.getTime())) {
             console.error("Invalid date retrieved from localStorage.");
             visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
         } else {
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
     }

     // Save the current visit in localStorage
     localStorage.setItem('lastVisit', now);
 }

 // Call the function to display the message on page load
 displayVisitMessage();
