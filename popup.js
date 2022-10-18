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
    // console.log(message.data);
    browsingHistoryList.push(message);
}); 

console.log(browsingHistoryList);

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

