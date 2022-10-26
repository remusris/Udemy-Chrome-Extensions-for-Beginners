// //Don't need this right now

// browsingHistoryList = [];

// //code example from stackoverflow with the "handshake" idea
// chrome.runtime.sendMessage({data: "getStatus" }, function(response) {
//   console.log(response.data);

// return true;
// });

// //listen to the onMessage request and push to the browsing history list
// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//     sendResponse({data: "request recieved"});
//     browsingHistoryList.push(message);
// }); 







// // Event listner for clicks on links in a browser action popup.
// // Open the link in a new tab of the current window.
// function onAnchorClick(event) {
//   chrome.tabs.create({
//     selected: true,
//     url: event.srcElement.href
//   });
//   return false;
// }

// Given an array of URLs, build a DOM list of those URLs in the
// browser action popup.
function buildPopupDom(divName, data) {
  var popupDiv = document.getElementById(divName);

  var ul = document.createElement('ul');
  popupDiv.appendChild(ul);

  for (var i = 0, ie = data.length; i < ie; ++i) {
    var a = document.createElement('a');
    a.href = data[i];
    a.appendChild(document.createTextNode(data[i]));
    // a.addEventListener('click', onAnchorClick);

    var li = document.createElement('li');
    li.appendChild(a);

    ul.appendChild(li);
  }
};

browsingHistoryList = [];

// Search history to find up to ten links that a user has typed in,
// and show those links in a popup.
function buildTypedUrlList(divName) {
  // To look for history items visited in the last week,
  // subtract a week of microseconds from the current time.
  var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;

  // Track the number of callbacks from chrome.history.getVisits()
  // that we expect to get.  When it reaches zero, we have all results.
  // var numRequestsOutstanding = 0;

  chrome.history.search({
      'text': '',              // Return every history item....
      'startTime': oneWeekAgo,
      'maxResults': 30
      // that was accessed less than one week ago.
    },

    function(historyItems) {
      // For each history item, get details on all visits.
      for (var i = 0; i < historyItems.length; ++i) {
        var url = historyItems[i].url;
        
        browsingHistoryList.push(url); 
    }
  
    if (browsingHistoryList.length == 30) {
      buildPopupDom("typedUrl_div", browsingHistoryList)
    }

    });
  };


//   // Maps URLs to a count of the number of times the user typed that URL into
//   // the omnibox.
//   var urlToCount = {};

//   // Callback for chrome.history.getVisits().  Counts the number of
//   // times a user visited a URL by typing the address.
//   var processVisits = function(url, visitItems) {
//     for (var i = 0, ie = visitItems.length; i < ie; ++i) {
//       // Ignore items unless the user typed the URL.
//       if (visitItems[i].transition != 'typed') {
//         continue;
//       }

//       if (!urlToCount[url]) {
//         urlToCount[url] = 0;
//       }

//       urlToCount[url]++;
//     }

//     // If this is the final outstanding call to processVisits(),
//     // then we have the final results.  Use them to build the list
//     // of URLs to show in the popup.
//     if (!--numRequestsOutstanding) {
//       onAllVisitsProcessed();
//     }
//   };

//   // This function is called when we have the final list of URls to display.
//   var onAllVisitsProcessed = function() {
//     // Get the top scorring urls.
//     urlArray = [];
//     for (var url in urlToCount) {
//       urlArray.push(url);
//     }

//     // Sort the URLs by the number of times the user typed them.
//     urlArray.sort(function(a, b) {
//       return urlToCount[b] - urlToCount[a];
//     });

//     buildPopupDom(divName, urlArray.slice(0, 10));
//   };
// }

// document.addEventListener('DOMContentLoaded', function () {
//   buildTypedUrlList("typedUrl_div");
// });








































// console.log(browsingHistoryList);

// underOrderedList = document.getElementById("underOrderedList");
// underOrderedList.appendChild(browsingHistoryList[0]);

// listItem = document.getElementById("li");

// var cont = document.getElementById('container');
// var ul = document.createElment("ul");


// function createList(arrayName) {
//   for (var i = 0 ; i < arrayName.length; i++) {

//   // var ul = document.createElement("ul");
//   li = document.createElement("li"); 
//   li.innerHTML = browsingHistoryList[i];
//   ul.appendChild(li);

//   };

// };

// cont.appendChild(ul);

// createList(browsingHistoryList);

// document.addEventListener('DOMContentLoaded', function() {
//   unOrderedList = document.getElementById("unOrderList");
//   unOrderedList.appendChild(browsingHistoryList[0]);
// })

// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('clickIt');
//   checkPageButton.addEventListener('click', function() {
//     chrome.tabs.query({active:true}, function(tab) {
//       alert("Hello");
//     });
//   }, false);
// }, false);

// document.addEventListener('DOMContentLoaded', function() {
//   var unOrderedList = document.getElementById('unOrderedList');
//   unOrderedList.appendChild(browsingHistoryList[0]);
// })

// document.addEventListener('DOMContentLoaded', function() {
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// })

// document.addEventListener('DOMContentLoaded', function() {
  
//   var urlObject = browsingHistoryList[0].data
//   var tag = document.createElement("p");
//   var text = document.createTextNode(urlObject);
//   tag.appendChild(text);
//   var element = document.getElementById("new");
//   element.appendChild(tag);
// })

