 // Calendar Variables
 const currentMonthEl = document.getElementById('current-month');
 const calendarBody = document.getElementById('calendar-body');
 const prevMonthBtn = document.getElementById('prev-month');
 const nextMonthBtn = document.getElementById('next-month');

 let today = new Date();
 let currentMonth = today.getMonth();
 let currentYear = today.getFullYear();

 // Function to generate the calendar days
 function generateCalendar(month, year) {
     calendarBody.innerHTML = ''; // Clear previous calendar body
     const firstDay = new Date(year, month).getDay();
     const daysInMonth = new Date(year, month + 1, 0).getDate();

     // Update the month display
     const monthNames = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"];
     currentMonthEl.textContent = `${monthNames[month]} ${year}`;

     // Create the days grid
     let date = 1;
     for (let i = 0; i < 6; i++) { // 6 rows to cover all possible weeks in a month
         const row = document.createElement('tr');

         for (let j = 0; j < 7; j++) { // 7 columns for the days of the week
             const cell = document.createElement('td');

             if (i === 0 && j < firstDay) {
                 cell.textContent = ''; // Empty cells before the first day of the month
             } else if (date > daysInMonth) {
                 break; // Stop when we've reached the end of the month
             } else {
                 cell.textContent = date;
                 cell.classList.add('calendar-day'); // Add class to each day
                 cell.addEventListener('click', () => alert(`You clicked on ${monthNames[month]} ${date}, ${year}`)); // Click event for each day

                 // Highlight today's date
                 if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                     cell.classList.add('current-day');
                 }
                 date++;
             }
             row.appendChild(cell);
         }
         calendarBody.appendChild(row);
     }
 }

 // Function to switch months
 function switchMonth(change) {
     currentMonth += change;

     if (currentMonth === 12) {
         currentMonth = 0;
         currentYear++;
     } else if (currentMonth === -1) {
         currentMonth = 11;
         currentYear--;
     }

     generateCalendar(currentMonth, currentYear);
 }

 // Add event listeners only if buttons exist
 if (prevMonthBtn && nextMonthBtn) {
     prevMonthBtn.addEventListener('click', () => switchMonth(-1));
     nextMonthBtn.addEventListener('click', () => switchMonth(1));
 }

 // Initial Calendar Display
 generateCalendar(currentMonth, currentYear);

