// popup.js

document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the crop button
    document.getElementById("cropButton").addEventListener("click", function() {
        safari.extension.dispatchMessage("cropVideoMessage", {});
    });
});
