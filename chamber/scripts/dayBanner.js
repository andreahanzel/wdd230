document.addEventListener("DOMContentLoaded", function () {
    const dayBanner = document.getElementById("dayBanner");
    const bannerOverlay = document.querySelector(".banner-overlay");
    const closeBanner = document.getElementById("closeBanner");

    // Function to show the banner and overlay
    function showBanner() {
        dayBanner.style.display = "flex";
        bannerOverlay.style.display = "block";
        dayBanner.style.opacity = "1";
        bannerOverlay.style.opacity = "1";
    }

    // Function to close the banner and overlay
    function hideBanner() {
        dayBanner.style.opacity = "0";
        bannerOverlay.style.opacity = "0";
        setTimeout(() => {
            dayBanner.style.display = "none";
            bannerOverlay.style.display = "none";
        }, 300); // Wait for transition to complete
    }

    // Show banner on page load (you can adjust this to specific days or conditions)
    showBanner();

    // Close banner and overlay on close button click
    closeBanner.addEventListener("click", hideBanner);
});
