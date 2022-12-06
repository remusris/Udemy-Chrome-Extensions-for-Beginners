
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
var microsecondsPerQuarterHour = 1000 * 60 * 60 * 0.25;
var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
var oneHourAgo = (new Date).getTime() - microsecondsPerHour;
var oneDayAgo = (new Date).getTime() - microsecondsPerDay;
var fifteenMinutesAgo = (new Date).getTime() - microsecondsPerQuarterHour;
var visitItemsList = [];
var otherList = [];
var currentDate =(new Date).getTime()
console.log(currentDate);

chrome.history.search({
    'text': '',              
    'startTime': oneHourAgo  
    },
    function(historyItems) {
    for (var i = 0; i < historyItems.length; ++i) {
        var url = historyItems[i].url;
        // this code is redundant
        // visitItemsList.push(historyItems[i].id);
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
        // console.log(visitItemsList);
    }
    console.log(visitItemsList);
    console.log(otherList);
    console.log(historyItems.length);
});




// var processVisits = function(url, visitItems) {
//     for (var i = 0, ie = visitItems.length; i < ie; ++i) {
//         visitItemsList.push(url)
        
//         if (visitItems[i].visitTime >= oneHourAgo) {
//             visitItemsList.push(visitItems[i].transition)
//         }
//         // visitItemsList.push(visitItems[i])
//         }
//     }

    // for (var i = 0, ie = visitItems.length; i < ie; ++i) {
    //         visitItemsList.push(url)

    //         if (visitItems[i].visitTime >= oneHourAgo) {
    //             pass
    //         } else {
    //             visitItemsList.push(visitItems[i].transition)
    //         }
    //     }
    // }

// var convertDateToEpoch = function(date) {
//     return Date.parse(date)
// }


var processVisits = function(url, visitItems) {
    for (var i = 0, ie = visitItems.length; i < ie; ++i) {
        if (visitItems[i].visitTime >= oneHourAgo) {
                visitItemsList.push(url);
                visitItemsList.push(visitItems[i]);
        //     visitItemsList.push(visitItems[i].id);
        //     visitItemsList.push(visitItems[i].transition);
        //     visitItemsList.push(visitItems[i].referringVisitId)
        } else {
                otherList.push(url)
                otherList.push(visitItems[i]);
        //     otherList.push(visitItems[i].id);
        //     otherList.push(visitItems[i].transition);
        //     otherList.push(visitItems[i].referringVisitId)
        }
        
        
        // visitItemsList.push(visitItems[i])
        
        }
    }