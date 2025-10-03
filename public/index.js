document.addEventListener('DOMContentLoaded', function() {
    console.log('Index.js loaded');
    var nav = document.getElementById("nav");
    var content = document.getElementById("content");

    // Load pages from page.json
    fetch('/page.json')
        .then(response => response.json())
        .then(pages => {
            content.innerHTML = pages[0].html; // Default to Home page
            pages.forEach(function(page, index) {
                var link = document.createElement("button");
                link.href = "#";
                link.innerText = page.name;
                link.style.marginRight = "10px";
                link.onclick = function(e) {
                    e.preventDefault();
                    content.innerHTML = page.html;
                };
                nav.appendChild(link);
            });
        })
        .catch(err => {
            content.innerHTML = '<p>Error loading pages.</p>';
            console.error(err);
        });
});