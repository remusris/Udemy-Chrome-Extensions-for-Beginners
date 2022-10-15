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

chrome.runtime.sendMessage({ method: "getStatus", data: "xxx" }, function (res) {
  // document.getElementById("popupElement1").innerText = res.method;
  // document.getElementById("popupElement2").innerText = res.data;
  console.log(res.method);
  console.log(res.data);

return true;
});