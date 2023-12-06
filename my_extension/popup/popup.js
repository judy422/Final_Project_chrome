
// alert("popup.js working");
// var crawlButton = document.getElementById('crawlButton');
// var outputDiv = document.getElementById('output');

// if (crawlButton && outputDiv) {
//   alert("found crawlbutton and outputdiv");

//   // Connect to the native application
//   var port = chrome.runtime.connectNative('com.example.my_extension_python');

//   crawlButton.addEventListener('click', function () {
//     alert('Button clicked'); 

//     // Send a message to the native application
//     port.postMessage({ action: 'startCrawling' });
//   });

//   // Listen for messages from the native application
//   port.onMessage.addListener(function (message) {
//     if (message.action === 'updatePopup') {
//       outputDiv.innerText = JSON.stringify(message.data);
//     }
//   });

//   // Handle disconnection (optional)
//   port.onDisconnect.addListener(function () {
//     if (chrome.runtime.lastError){
//       alert("chrome.runtime.lastError");
//     }
//   });
// } else {
//   alert('Could not find required elements with specified IDs.');
// }

document.addEventListener('DOMContentLoaded', function () {
  alert("popup.js working");
  var crawlButton = document.getElementById('crawlButton');
  var outputDiv = document.getElementById('output');

  if (crawlButton && outputDiv) {
    alert("found crawlbutton and outputdiv");

    // Connect to the native application
    var port = chrome.runtime.connectNative('com.example.my_extension_python');

    crawlButton.addEventListener('click', function () {
      alert('Button clicked');

      // Check if the port is still connected
      if (port.sender.tab) {
        // Send a message to the native application
        port.postMessage({ action: 'startCrawling' });
      } else {
        alert('Port is disconnected.');
      }
    });

    // Listen for messages from the native application
    port.onMessage.addListener(function (message) {
      if (message.action === 'updatePopup') {
        outputDiv.innerText = JSON.stringify(message.data);
      }
    });

    // Handle disconnection (optional)
    port.onDisconnect.addListener(function () {
      if (chrome.runtime.lastError){
        console.error("Disconnection error:", JSON.stringify(chrome.runtime.lastError));
      }
    });
  } else {
    alert('Could not find required elements with specified IDs.');
  }
});
