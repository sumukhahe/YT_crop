// background.js

safari.application.addEventListener("command", function(event) {
    if (event.command === "cropVideo") {
        // Handle 'command + c' to crop video
        // Send message to content script to initiate cropping
        safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("cropVideoMessage", {});
    }
});
