// This code snippet is solely used to load the header and footer

function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(headerHTML => {
            document.querySelector('header').innerHTML = headerHTML;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(footerHTML => {
            document.querySelector('footer').innerHTML = footerHTML;
        });
}

loadHeaderAndFooter();
