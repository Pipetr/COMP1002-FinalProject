document.addEventListener('DOMContentLoaded', function () {
    const newsletterPrompt = document.querySelector('.newsletter-prompt');

    // Check if the user has already subscribed (you can use cookies or local storage for this)
    const isSubscribed = false; // Set to true if subscribed, false otherwise

    // If user is not subscribed and hasn't dismissed the prompt, show the newsletter prompt after 5 seconds
    if (!isSubscribed && !localStorage.getItem('newsletterDismissed')) {
        setTimeout(function () {
            newsletterPrompt.classList.add('show');
        }, 5000);
    }

    // Close the newsletter prompt when clicking the cancel button
    const cancelButton = newsletterPrompt.querySelector('#cancel-button');
    cancelButton.addEventListener('click', function () {
        newsletterPrompt.classList.remove('show');
        localStorage.setItem('newsletterDismissed', 'true');
    });

    // Close the newsletter prompt and set subscription flag when clicking the subscribe button
    const subscribeButton = newsletterPrompt.querySelector('#subscribe-button');
    subscribeButton.addEventListener('click', function () {
        // Code to handle subscription
        alert("Thank you for subscribing!");
        newsletterPrompt.classList.remove('show');
        localStorage.setItem('newsletterDismissed', 'true');
    });

    // Stay fixed at the bottom when scrolling all the way down
    window.addEventListener('scroll', function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            newsletterPrompt.classList.add('bottom-fixed');
        } else {
            newsletterPrompt.classList.remove('bottom-fixed');
        }
    });
});