chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === 'com.example.my_extension_python');

  port.onMessage.addListener(function (message) {
    if (message.action === 'startCrawling') {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        var currentUrl = currentTab.url; 
        alert(currentUrl);// 獲取當前標籤的 URL
        startCrawling(port, currentUrl);
      });
    }
  });
});

function startCrawling(port, currentUrl) {
  alert('Received startCrawling message. Current URL:', currentUrl);
  
  // 使用從參數中獲取的當前 URL
  chrome.runtime.sendNativeMessage('com.example.my_extension_python', { url: currentUrl }, function (response) {
    alert('Received response:', response);
    if (response && response.success) {
      port.postMessage({ action: 'updatePopup', data: response.data });
    }
  });
}

