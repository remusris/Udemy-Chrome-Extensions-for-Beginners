//code example from chrome docs
// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
  

// chrome.runtime.sendMessage({
//   msg: "something_completed", 
//   data: {
//       subject: "Loading",
//       content: "Just completed!"
//   }
// });

// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//   //alert(message.data);
//     chrome.runtime.sendMessage({data: "hello"},function(response){
//       console.log(message);
//         });
//         });


const millisecondsPerWeek = 1000 * 60 * 60 *24 * 7; 
const oneWeekAgo = (new Date).getTime() - millisecondsPerWeek;

//the current code that works best
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.data == "getStatus") {
      console.log(request.data)
      sendResponse({ data: "validation" })

      chrome.history.search({
        text: '',
        startTime: oneWeekAgo,
        maxResults: 8
        },  
    
        function(data) {
            data.forEach(function(page) {
                // browsingHistoryList.push(page.lastVisitTime);
                // var timeInMilliseconds = page.lastVisitTime;
                // let newDate = new Date(timeInMilliseconds);
                // browsingHistoryList.push(newDate);
                chrome.runtime.sendMessage(
                    {data: page.url}, function(response) {
                            // console.log(response.data);
                            // console.log(page.url);
                    }
                );
        });
    });      
  }
});

