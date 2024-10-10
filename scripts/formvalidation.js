document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const rangeValue = document.getElementById("rangevalue");
    const ratingInput = document.getElementById("rating");
    const message = document.getElementById("formmessage");
    const togglePassword = document.getElementById("togglePassword");

    // Validate password match on form submission
    form.addEventListener("submit", function (event) {
        if (password.value !== confirmPassword.value) {
            // Show error message and apply red background
            message.textContent = "❗Passwords do not match!";
            message.classList.add("active");
            password.classList.add("mismatch");
            confirmPassword.classList.add("mismatch");

            // Shake the fields to indicate an error
            password.classList.add("shake");
            confirmPassword.classList.add("shake");

            // Clear both fields
            password.value = "";
            confirmPassword.value = "";

            // Focus back to the first password field
            password.focus();
            
            event.preventDefault(); // Prevent form submission
        }
    });

    // Remove red background when typing and check if passwords match
    confirmPassword.addEventListener("input", function () {
        if (password.value === confirmPassword.value) {
            // If passwords match, reset to white background
            password.classList.remove("mismatch");
            confirmPassword.classList.remove("mismatch");
            message.classList.remove("active");
        } else {
            // If passwords do not match, keep background red
            confirmPassword.classList.add("mismatch");
        }
    });

    // Remove the shake class after animation ends
    password.addEventListener("animationend", function () {
        password.classList.remove("shake");
    });

    confirmPassword.addEventListener("animationend", function () {
        confirmPassword.classList.remove("shake");
    });

    // Toggle password visibility
    togglePassword.addEventListener("change", function () {
        const type = togglePassword.checked ? "text" : "password";
        password.setAttribute("type", type);
        confirmPassword.setAttribute("type", type);
    });

    // Update range value dynamically
    ratingInput.addEventListener("input", function () {
        rangeValue.textContent = ratingInput.value;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", function (event) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        
        // Check if email matches the byui.edu pattern
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid byui.edu email address.";
            emailError.classList.add("active"); // Show error message
            email.classList.add("mismatch");    // Highlight the field
            email.focus();
            event.preventDefault(); // Prevent form submission
        }
    });

    // Clear the error message when the user starts typing a valid email
    email.addEventListener("input", function () {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (emailPattern.test(email.value)) {
            emailError.textContent = "";          // Clear error message
            emailError.classList.remove("active"); // Hide the error message
            email.classList.remove("mismatch");   // Remove highlight
        }
    });
});

