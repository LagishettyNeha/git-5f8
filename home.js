// Log a message when the page is loaded
console.log("Home page loaded");

// Alert the user when they click on a link
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        alert("You clicked on: " + event.target.textContent);
    });
});

