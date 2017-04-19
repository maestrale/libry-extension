function isInjected(tabId) {
  return chrome.tabs.executeScriptAsync(tabId, {
    code: `var injected = window.reactExampleInjected;
      window.reactExampleInjected = true;
      injected;`,
    runAt: 'document_start'
  });
}

function loadScript(name, tabId, cb) {
  if (process.env.NODE_ENV === 'production') {
    chrome.tabs.executeScript(tabId, { file: `/js/${name}.bundle.js`, runAt: 'document_end' }, cb);
  } else {
    // dev: async fetch bundle
    fetch(`http://localhost:3000/js/${name}.bundle.js`)
    .then(res => res.text())
    .then((fetchRes) => {
      // Load redux-devtools-extension inject bundle,
      // because inject script and page is in a different context
      const request = new XMLHttpRequest();
      request.open('GET', 'chrome-extension://lmhkpmbekcpmknklioeibfkpmmfibljd/js/redux-devtools-extension.js');  // sync
      request.send();
      request.onload = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
          chrome.tabs.executeScript(tabId, { code: request.responseText, runAt: 'document_start' });
        }
      };
      chrome.tabs.executeScript(tabId, { code: fetchRes, runAt: 'document_end' }, cb);
    });
  }
}

/* DEACTIVATE FOR http://localhost:3001/#/  & libry.com afterwards or CSS classes conflict */
const arrowURLs =  ['^https://github\\.com'];
const arrowURLs2 = ['^localhost:3001/#/\\.com']; 

const libryPage = "http://localhost:3001/#/";

/* 1., before being edited by me: */
/*|| !tab.url.match(arrowURLs.join('|'))*/
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'loading' || tab.url.match(arrowURLs2.join('|'))) return;
    console.log(tab.url);
    if ( tab.url.match(libryPage)){ 
      console.log(tab.url);
      console.log('On Libry localhost, Extension wont run');
      return;
    }

  const result = await isInjected(tabId);
  if (chrome.runtime.lastError || result[0]) return;

  /* here's where is injecting inject file containing React InjectApp */
  loadScript('inject', tabId, () => console.log('load inject bundle success!'));
});


/* 2. Take Screenshot and send it back to inject -- captureVisibletab  */
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log('FRIDAY listener for captureVisibleTab in background/inject.js');
        chrome.tabs.captureVisibleTab(
          null,
          {},
            function(dataUrl)
            {
                sendResponse({imgSrc:dataUrl, done:'sendResponse done!'});
            }
        ); //remember that captureVisibleTab() is a statement
        return true;
    }
);
