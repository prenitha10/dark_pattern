// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'highlighter.js'
  });
});
chrome.runtime.onInstalled.addListener(function() {
  console.log('Extension installed or updated');
});

// Listen for when a message is received from the content script or popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log('Message received:', message);
  // Add your logic here based on the received message
});

// Example of background tasks or event listeners
// You can add more functionality as needed
