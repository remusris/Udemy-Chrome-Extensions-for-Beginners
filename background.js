
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

