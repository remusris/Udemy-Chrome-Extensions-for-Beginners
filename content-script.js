// function injectedFunction() {
//     document.body.style.backgroundColor = 'orange';
//   }
  
//   chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: injectedFunction
//     });
//   });

/* this code works, basic test of the TagName listener */
// var Anchors = document.getElementsByTagName("a");

// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", 
//         function (event) {
//             event.preventDefault();
//             if (confirm('Are you sure?')) {
//                 window.location = this.href;
//             }
//         }, 
//         false);
// }

/* No need to have this here because chrome.tabs.query doesn't work in the content-script */
// chrome.tabs.query(
//     {active: true, currentWindow: true}, function(tabs) {
//         var activeTab = tabs[0];
//         var activeTabURL = activeTab.url;
//     }  
// )

/* Second test to validate the "window.location" query */
// var Anchors = document.getElementsByTagName("a");

// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", 
//         function (event) {
//             event.preventDefault();
//             if (confirm('Are you sure?')) {
//                 window.location = this.href;
//             }

//             chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//                 currentTab = tabs[0].url
//                 chrome.tabs.sendMessage({message: currentTab});
//             });

//         }, 
//         false);
// }


// document.getElementByTagName("a").addEventListener("click", async () => {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         currentTab = tabs[0].url
//         chrome.tabs.sendMessage({message: currentTab});
//     });

// });

/* this works, chrome.tabs.query doesn't work in a content-script */
// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", async () => {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             currentTab = JSON.stringify(tabs[0].url);
//             chrome.tabs.sendMessage({message: currentTab});
//         });
//     })
// };

// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", async () => {
//             chrome.tabs.sendMessage({message: "test"});
//     })
// };


// document.getElementByTagName("a").addEventListener("click",
// function consoleLog() { 
//     chrome.runtime.sendMessage({message: "test"})
// }
// )

// window.onload = function () {
//     document.getElementByTagName("a").addEventListener("click", consoleLog, false

// }


/* this works */
// window.onload = function() {
//     chrome.runtime.sendMessage({message: "test"})
// };



// document.addEventListener('click', (event) => {
//     if (event.target.tagName === "a") {
//         // chrome.runtime.sendMessage({message: "test"});
//         const currentURL = window.location.href;
//         console.log(currentURL)
//         const targetURL = event.target.href;
//         console.log(targetURL)
//     }

// })


/* this works */
// var Anchors = document.getElementsByTagName("a");

// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", 
//         function (event) {
//             const currentURL = window.location.href;
//             const targetURL = event.target.href;
//             console.log(currentURL);
//             console.log(targetURL);
//         }, 
// )}



/* this works VERY WELL */
// const anchorTags = document.querySelectorAll('a');

// window.onload = function () {
//     anchorTags.forEach((tag) => {
//         tag.addEventListener('click', (event) => {
            
//             const currentURL = JSON.stringify(window.location.href);
//             const targetURL = JSON.stringify(event.target.href);
//             chrome.runtime.sendMessage({message: currentURL});
//             chrome.runtime.sendMessage({message: targetURL});

//         });
//       });
// }

/* this doesn't work */
// window.onload = function () {

//     window.addEventListener('hashchange', (event) => {
    
//         const preHashedURL = JSON.stringify(window.location.href);
//         const postHashedURL = JSON.stringify(event.target.href);
//         chrome.runtime.sendMessage({message: preHashedURL});
//         chrome.runtime.sendMessage({message: postHashedURL});
//         });

// }

/* this didn't work */
// window.addEventListener('popstate', function(event) {
//     const prePopURL = JSON.stringify(window.location.href);
//     chrome.runtime.sendMesage({message: prePopURL});
// }  



/* this didn't work */
// window.addEventListener('locationchange', function () {
//     chrome.runtime.sendMessage({message: "test"})
// });


/* this works with youtube thumbnail clicks but it does not work with "control + click" when it opens in a new tab*/
//https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
// var oldHref = document.location.href;

// window.onload = function() {
//     var bodyList = document.querySelector("body")

//     var observer = new MutationObserver(function(mutations) {
//         mutations.forEach(function(mutation) {
//             if (oldHref != document.location.href) {
//                 // oldHref = document.location.href;
//                 chrome.runtime.sendMessage({message: "url change"});
//             }
//         });
//     });
    
//     var config = {
//         childList: true,
//         subtree: true
//     };
    
//     observer.observe(bodyList, config);
// };


// const observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//       if (mutation.type === 'childList') {
//         // Bind the click event to any new child nodes
//         mutation.addedNodes.forEach(function(node) {
//           node.addEventListener('click', function(event) {
//             chrome.runtime.sendMessage({message: "test"});
//           });
//         });
//       }
//     });
//   });
  
// /* Start observing the target node for new child nodes */
//   observer.observe(targetNode, { childList: true });


/* this didn't work */
// window.addEventListener('popstate', function(e){
//     chrome.runtime.sendMessage({message: "test"});
//     });t


/* https://stackoverflow.com/questions/53303519/detect-an-url-change-in-a-spa */
let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href !== previousUrl) {
      previousUrl = location.href;
    //   console.log(`URL changed to ${location.href}`);
    
    timeOfURL = JSON.stringify((new Date).getTime());
    // chrome.runtime.sendMessage({message: `${location.href}`});
    chrome.runtime.sendMessage({message: "url time", contents: timeOfURL});
    

    }
});
const config = {subtree: true, childList: true};
observer.observe(document, config);




 
/* Create a mutation observer */
// var observer = new MutationObserver(function(mutations) {
//     // Loop through the mutations that have occurred
//     mutations.forEach(function(mutation) {
//         // Loop through the nodes that have been added
//         mutation.addedNodes.forEach(function(node) {
//             // Check if the node is an element
//             if (node.nodeType === 1) {
//                 // The node is an element, so bind a click event to it
//                 node.addEventListener('click', function(event) {
//                     // Do something here when the element is clicked
//                     // For example, you could check if the URL has changed
//                     if (window.location.href !== currentUrl) {
//                         // The URL has changed, so do something here
//                         // For example, you could update the current URL
//                         currentUrl = window.location.href;
//                     }

//                     targetURL = event.target.href

//                     chrome.runtime.sendMessage({message: "test"});
//                 });
//             }
//         });
//     });
// });

/* Start observing the DOM for changes */
// observer.observe(document, {
//     childList: true, // Observe changes to the children of the DOM
//     subtree: true    // Observe changes to the entire DOM tree
// });

/* didn't work */
// const observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//       if (mutation.type === 'childList') {
//         // Bind the onclick event to the newly added elements
//         mutation.addedNodes.forEach(function(node) {
//           if (node.nodeType === Node.ELEMENT_NODE) {
//             node.addEventListener('click', function() {
//               // Handle the click event
//               chrome.runtime.sendMessage({message: "test"});
//             });
//           }
//         });
//       }
//     });
//   });
  
/* Start observing the entire document */
//   observer.observe(document, {
//     childList: true,
//     subtree: true,
//   });



// document.addEventListener('click', function(evt) {
//     // alert(evt.target.tagName);

//     let previousUrl = '';

//     const observer = new MutationObserver(function(mutations) {
//       if (location.href !== previousUrl) {
//       previousUrl = location.href;
//       console.log(`URL changed to ${location.href}`);
      
//     //   chrome.runtime.sendMessage({message: `${location.href}`});
//       chrome.runtime.sendMessage({message: "test"});

//         }
//     });

//     const config = {subtree: true, childList: true};
    
//     observer.observe(document, config);

//     // chrome.runtime.sendMessage({message: "test"});
// }, false);


/* testing whether a click event on a window sends a message via chrome.sendMessage,
will need to bind the mutation observer to this click function
*/


// window.onload

// window.addEventListener('DOMContentLoaded', (event) => {
//     const currentURL = JSON.stringify(window.location.href);
// })

// window.addEventListener("click", function() {

//     chrome.runtime.sendMessage({message: "test"});

// })


// chrome.webNavigation.onHistoryStateUpdated.addListener(
//     function (historyStateObject) {

//         const NEXTurl = JSON.stringify(historyStateObject.url);
//         const tabID = JSON.stringify(historyStateObject.tabId);
        
//         // chrome.runtime.sendMessage({type: "tabID", contents: tabID});
//         chrome.runtime.sendMessage({contents: NEXTurl});

//         // console.log(NEXTurl);
//         // console.log(tabID);
//     }
// );


// let previousUrl = document.location.href;

// const observer = new MutationObserver(function(mutations) {
//   mutations.forEach(function(mutation) {
//     if (previousUrl !== document.location.href) {
//       // URL has changed
//       previousUrl = document.location.href;
//       // Take necessary action
//       chrome.runtime.sendMessage({contents: "url changed"})
//     }
//   });
// });

// observer.observe(document.location, {
//   attributes: true,
//   attributeFilter: ['href']
// });


/* These don't work at all */
// window.addEventListener('popstate', function () {
//     chrome.runtime.sendMessage({contents: "popstate"});
// });

// window.addEventListener('pushstate', function () {
//     chrome.runtime.sendMessage({contents: "pushstate"});
// });


// document.addEventListener('click', function(event) {
//     if (event.target.tagName === 'a') {
//       chrome.runtime.sendMessage({message: "anchor"})
//     }
// });



// let previousUrl = '';
// const observer = new MutationObserver(function(mutations) {
  
  
//     if (location.href !== previousUrl) {
//       previousUrl = location.href;
     
      
//       chrome.runtime.sendMessage({message: `${location.href}`});
    

//     }
// });
// const config = {subtree: true, childList: true};
// observer.observe(document, config);


/* This works but it's not particularly useful */

// window.addEventListener("click", function() {

//     chrome.runtime.sendMessage({message: "test"});

// });



