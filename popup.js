//code example from chrome docs
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if (request.greeting === "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//       if (request.msg === "something_completed") {
//           //  To do something
//           console.log(request.data.subject)
//           console.log(request.data.content)
//       }
//   }
// );


// chrome.runtime.sendMessage({data:"Handshake"},function(response){
	
// });
// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
// str = JSON.stringify(message.data);
// console.log(message);
// });

browsingHistoryList = [];

//code example from stackoverflow with the "handshake" idea
chrome.runtime.sendMessage({data: "getStatus" }, function(response) {
  console.log(response.data);

return true;
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	// str = JSON.stringify(message.data);
    sendResponse({data: "request recieved"});
    // browsingHistoryList.append(message.data);
    console.log(message.data);
    
}); 