
// otherBrowsingHistoryList = []

// const millisecondsPerWeek = 1000 * 60 * 60 *24 * 7; 
// const oneWeekAgo = (new Date).getTime() - millisecondsPerWeek;

// chrome.history.search({
// text: '',
// startTime: oneWeekAgo,
// maxResults: 30
// },  

// function(historyItems) {
//     historyItems.forEach(function(historyItem) {
//         otherBrowsingHistoryList.push(historyItem.url);
//         var historyObject = historyItem

//         function(historyObject) {
//             webPage.forEach(function(historyObject) {
//                 console.log(historyObject)
//             })
//         };
//     });
// });      



// otherBrowsingHistoryList = []
// // console.log(otherBrowsingHistoryList.length);

// const millisecondsPerWeek = 1000 * 60 * 60 *24 * 7; 
// const oneWeekAgo = (new Date).getTime() - millisecondsPerWeek;

// //the current code that works best
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.data == "getStatus") {
//       console.log(request.data)
//       sendResponse({ data: "validation" })

//       chrome.history.search({
//         text: '',
//         startTime: oneWeekAgo,
//         maxResults: 30
//         },  
    
//         function(data) {
//             data.forEach(function(page) {
//                 // browsingHistoryList.push(page.lastVisitTime);
//                 // var timeInMilliseconds = page.lastVisitTime;
//                 // let newDate = new Date(timeInMilliseconds);
//                 // browsingHistoryList.push(newDate);
//                 otherBrowsingHistoryList.push(page.url);
//                 chrome.runtime.sendMessage(
//                     page.url, function(response) {
//                             // console.log(page.url);
//                     }
//                 );
//         });
//     });      
//   }
// });



//my previous code

var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
var microsecondsPerDay = 1000 * 60 * 60 * 24;
var microsecondsPerHour = 1000 * 60 * 60;
var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
var oneHourAgo = (new Date).getTime() - microsecondsPerHour;
var visitItemsList = [];

chrome.history.search({
    'text': '',              
    'startTime': oneHourAgo  
    },
    function(historyItems) {
    for (var i = 0; i < historyItems.length; ++i) {
        var url = historyItems[i].url;
        var processVisitsWithUrl = function(url) {
        // We need the url of the visited item to process the visit.
        // Use a closure to bind the  url into the callback's args.
        return function(visitItems) {
            processVisits(url, visitItems);
            // console.log(url);
            // console.log(visitItems);
        };
        };
        chrome.history.getVisits({url: url}, processVisitsWithUrl(url));
        console.log(visitItemsList);
    }
    // console.log(visitItemsList[1])
});




var processVisits = function(url, visitItems) {
    for (var i = 0, ie = visitItems.length; i < ie; ++i) {
        visitItemsList.push(url)
        visitItemsList.push(visitItems[i].transition)
        }
    }



