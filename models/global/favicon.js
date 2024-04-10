function setFavicon(iconPath) {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = iconPath;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// Call the function with the path to your favicon
setFavicon('favicon.png');