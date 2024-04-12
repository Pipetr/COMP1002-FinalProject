// This code snippet is solely used to load the header and footer

function loadHeaderAndFooter() {
    let nameFileHtml = window.location.href.split('/').pop();
    let isIndex = nameFileHtml === 'index.html' || nameFileHtml === '';
    let path = isIndex ? 'views/' : '';
    let nameHeader = `${path}header.html`;
    let nameFooter = `${path}footer.html`;
    fetch(nameHeader)
        .then(response => response.text())
        .then(headerHTML => {
            document.querySelector('header').innerHTML = headerHTML;
        });

    fetch(nameFooter)
        .then(response => response.text())
        .then(footerHTML => {
            document.querySelector('footer').innerHTML = footerHTML;
        });
}

loadHeaderAndFooter();
