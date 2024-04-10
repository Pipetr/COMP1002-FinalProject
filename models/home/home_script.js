document.addEventListener('DOMContentLoaded', function () {
    // Displaying the hidden Newsletter section of the homepage after the user clicks the button.
    document.getElementById("showNewsletterButton").addEventListener("click", function() {
        document.getElementById("hiddenContent").style.display = "block"; // Display the hidden content.

        // Check if user is already subscribed or not.
        const isSubscribed = false; // Set to true if subscribed, false by default.

        // Get the subscription button element.
        const subscribeButton = document.getElementById('subscribe-button');

        // Get the subscription text element.
        const subscribeText = document.getElementById('subscribe-text');

        // If the user is not subscribed, show the subscribe button.
        if (!isSubscribed) {
            subscribeButton.style.display = 'block';
        }

        // If the user is subscribed, hide the subscribe button and display 'you have already subscribed' text.
        if (isSubscribed) {
            subscribeButton.style.display = 'none';
            subscribeText.innerHTML = "You have already subscribed!";
        }

        // Event listener for subscribe button.
        subscribeButton.addEventListener('click', function () {
            // Code to handle subscription.
            alert("Thank you for subscribing! Welcome to the club!"); // Thanking the user.
            // There should be code here to send sub info to the site's server.
            subscribeButton.style.display = 'none'; // Hiding the subscribe button after subscription.
            // Changing subscribe text.
            subscribeText.innerHTML = "Subscribed!";
        });
    });
});