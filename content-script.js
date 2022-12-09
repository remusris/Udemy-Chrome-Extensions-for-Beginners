// function injectedFunction() {
//     document.body.style.backgroundColor = 'orange';
//   }
  
//   chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: injectedFunction
//     });
//   });

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

// chrome.tabs.query(
//     {active: true, currentWindow: true}, function(tabs) {
//         var activeTab = tabs[0];
//         var activeTabURL = activeTab.url;
//     }  
// )


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


//this works
// window.onload = function() {
//     chrome.runtime.sendMessage({message: "test"})
// };

// window.onload = function() {        
//         chrome.runtime.sendMessage({message: "test"});
// }

// document.addEventListener('click', (event) => {
//     if (event.target.tagName === "a") {
//         // chrome.runtime.sendMessage({message: "test"});
//         const currentURL = window.location.href;
//         console.log(currentURL)
//         const targetURL = event.target.href;
//         console.log(targetURL)
//     }

// })


// var Anchors = document.getElementsByTagName("a");

// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", 
//         function (event) {
//             const currentURL = window.location.href;
//             const targetURL = event.target.href;
//             console.log(currentURL);
//             console.log(targetURL);
//         }, 
// }




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

// window.onload = function () {

//     window.addEventListener('hashchange', (event) => {
    
//         const preHashedURL = JSON.stringify(window.location.href);
//         const postHashedURL = JSON.stringify(event.target.href);
//         chrome.runtime.sendMessage({message: preHashedURL});
//         chrome.runtime.sendMessage({message: postHashedURL});
//         });

// }


window.addEventListener('popstate', function(event) {
    const prePopURL = JSON.stringify(window.location.href);
    chrome.runtime.sendMesage({message: prePopURL});
}  




