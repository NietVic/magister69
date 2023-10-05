var isCSPDisabled = false;


var disableCSP = function () {
  isCSPDisabled = true;

  chrome.browsingData.remove({}, { serviceWorkers: true }, function () {});
};

var enableCSP = function () {
  isCSPDisabled = false;
};

var onHeadersReceived = function (details) {
  if (isCSPDisabled) {
    for (var i = 0; i < details.responseHeaders.length; i++) {
      if (details.responseHeaders[i].name.toLowerCase() === 'content-security-policy') {
        details.responseHeaders[i].value = '';
      }
    }
    return {
      responseHeaders: details.responseHeaders
    };
  }
};

// Add the headers received listener
var onHeaderFilter = { urls: ['*://*/*'], types: ['main_frame', 'sub_frame'] };
chrome.webRequest.onHeadersReceived.addListener(
  onHeadersReceived, onHeaderFilter, ['blocking', 'responseHeaders']
);

enableCSP();

disableCSP();

var toggleCSP = function () {
  if (isCSPDisabled) {
    enableCSP();
  } else {
    disableCSP();
  }
};

chrome.browserAction.onClicked.addListener(function (tab) {
  toggleCSP();
  updateUI(tab.id);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  updateUI(activeInfo.tabId);
});

var updateUI = function (tabId) {
  var iconName = isCSPDisabled ? 'on' : 'off';
  var title = isCSPDisabled ? 'uit' : 'aan';

  chrome.browserAction.setIcon({ path: 'images/icon38-' + iconName + '.png' });
  chrome.browserAction.setTitle({ title: 'CSP is ' + title});
};
