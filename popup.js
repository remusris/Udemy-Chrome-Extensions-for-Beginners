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

//listen to the onMessage request and push to the browsing history list
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	// str = JSON.stringify(message.data);
    sendResponse({data: "request recieved"});
    // browsingHistoryList.append(message.data);
    console.log(message.data);
    browsingHistoryList.push(message);
}); 

console.log(browsingHistoryList);

listItem = document.getElementById("li");

var ul = document.createElement("ul");

function createList(arrayName) {
  for (var i = 0 ; i < arrayName.length; i++) {

  li = document.createElement("li"); 
  li.innerHTML = i;
  ul.appendChild(i);

  };
  
  

};

createList(browsingHistoryList)