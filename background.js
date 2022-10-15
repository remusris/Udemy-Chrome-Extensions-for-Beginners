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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method == "getStatus") {
      console.log(request.data)
      sendResponse({ method: "peepee", data: "poopoo" })
  }
});