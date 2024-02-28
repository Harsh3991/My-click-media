function redirectToURL() {
    var urlToRedirect = "https://calendly.com/clickkmedia/30min?fbclid=PAAaaV-CAq3Kql6HbhGflDZH9j9cGIfkL0IaUDJGqpORKSvgAh9HQnR4t2M_E&month=2024-02"; // Replace with your desired URL
    window.location.href = urlToRedirect;
}

// Get all elements with the specified class
var elements = document.getElementsByClassName("book-call");

// Attach the click event to each element
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = redirectToURL;
}