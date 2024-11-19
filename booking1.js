document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const modal = document.getElementById("confirmationModal");
    const closeButton = document.querySelector(".close-button");
    const spinner = document.getElementById("loadingSpinner");
    const availabilityMessage = document.getElementById("availability-message");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Show loading spinner
        spinner.style.display = "block";

        setTimeout(() => {
            spinner.style.display = "none";
            modal.style.display = "block"; // Show confirmation modal after simulated delay
            bookingForm.reset();
        }, 2000); // Simulate a 2-second delay for processing
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Availability check based on date
    document.getElementById("date").addEventListener("change", checkAvailability);
    function checkAvailability() {
        const date = document.getElementById("date").value;
        if (date === "2024-11-25") { // Example unavailable date
            availabilityMessage.innerText = "Sorry, no tables are available on this date.";
        } else {
            availabilityMessage.innerText = "Tables are available!";
        }
    }
});


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // Array of gradient color combinations
        const gradients = [
            'linear-gradient(45deg, #ff6b6b, #f7b7a3)', // Red to Peach
            'linear-gradient(45deg, #ff8c00, #f6b93b)', // Orange to Yellow
            'linear-gradient(45deg, #00bcd4, #8e44ad)', // Blue to Purple
            'linear-gradient(45deg, #9b59b6, #ff6347)', // Purple to Tomato
            'linear-gradient(45deg, #1abc9c, #2ecc71)', // Green to Light Green
            'linear-gradient(45deg, #f39c12, #d35400)', // Yellow to Dark Orange
            'linear-gradient(45deg, #2980b9, #8e44ad)', // Blue to Violet
            'linear-gradient(45deg, #c0392b, #f39c12)', // Red to Yellow
            'linear-gradient(45deg, #e74c3c, #16a085)', // Red to Teal
            'linear-gradient(45deg, #34495e, #2ecc71)'  // Dark Gray to Green
        ];

        // Randomly pick a gradient from the array
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

        // Apply the new gradient to the card's background
        this.style.background = randomGradient;

        // Optionally, apply a change to the border and shadow on click
        this.style.borderColor = 'transparent';
        this.style.boxShadow = `0px 6px 15px rgba(0, 0, 0, 0.2)`;
    });
});