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
});
