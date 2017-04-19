/* the chain is as follows:
      -> background.html is rendered 
      -> brings in background.js (this file)
      -> which in turn brings in inject.js (in background folder)
      -> which in turn brings in inject.js which contains
          the InjectApp React app.

      -> let's try add some fontAwesome CSS to background.html
*/

/* this work too */
chrome.runtime.onMessage.addListener( 
  function(request, sender, sendResponse) {
    console.log('Listener for the hello/goodbye string exchange ')
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye, it works"});
    return true;
   });                                            

const bluebird = require('bluebird');

global.Promise = bluebird;

function promisifier(method) {
  // return a function
  return function promisified(...args) {
    // which returns a promise
    return new Promise((resolve) => {
      args.push(resolve);
      method.apply(this, args);
    });
  };
}

function promisifyAll(obj, list) {
  list.forEach(api => bluebird.promisifyAll(obj[api], { promisifier }));
}

// let chrome extension api support Promise
promisifyAll(chrome, [
  'tabs',
  'windows',
  'browserAction',
  'contextMenus'
]);
promisifyAll(chrome.storage, [
  'local',
]);

require('./background/contextMenus');
require('./background/inject');
require('./background/badge');
