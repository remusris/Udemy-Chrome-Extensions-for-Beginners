
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
var historyItemsList = [];
var urlList = [];
var currentDate =(new Date).getTime()
console.log(currentDate);

chrome.history.search({
    'text': '',              
    'startTime': oneDayAgo  
    },
    function(historyItems) {
    for (var i = 0; i < historyItems.length; ++i) {
        var url = historyItems[i];
        // this code is redundant
        // visitItemsList.push(historyItems[i].id);
        historyItemsList.push(url)
        urlList.push(url.url)
        var processVisitsWithUrl = function(url) {
        // We need the url of the visited item to process the visit.
        // Use a closure to bind the  url into the callback's args.
        return function(visitItems) {
            processVisits(url, visitItems);
            // console.log(url);
            // console.log(visitItems);
        };
        };
        chrome.history.getVisits({url: url.url}, processVisitsWithUrl(url));
        // console.log(visitItemsList);
    }
    console.log(visitItemsList);
    // // console.log(otherList);
    // console.log(historyItems.length);
    // console.log(urlList);
    console.log(historyItemsList)
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
        if (visitItems[i].visitTime >= oneDayAgo) {
                // visitItemsList.push(url);
                visitItemsList.push(visitItems[i]);
                // visitItemsList.push(visitItems[i].id);
                // visitItemsList.push(visitItems[i].transition);
                // visitItemsList.push(visitItems[i].referringVisitId)
        } else {
                otherList.push(url)
                // otherList.push(visitItems[i]);
                // otherList.push(visitItems[i].id);
                // otherList.push(visitItems[i].transition);
                // otherList.push(visitItems[i].referringVisitId)
        }
        
        // visitItemsList.push(visitItems[i])
        
        }
    }


// chrome.webNavigation.onBeforeNavigate.addListener(
//     function(objectBeforeNavigate) {
//         console.log(objectBeforeNavigate.url)
//         console.log(objectBeforeNavigate.tabId)
//     }    
// )

// chrome.webNavigation.onCommitted.addListener(
//     function(objectOnCommited) {
//         console.log(objectOnCommited.url)
//         console.log(objectOnCommited.tabId)
//     }
// )

// chrome.webNavigation.onHistoryStateUpdated.addListener(
//     function(objectHistoryStateUpdated) {
//         console.log(objectHistoryStateUpdated.url)
//         console.log(objectHistoryStateUpdated.tabId) 
//     }
// )



// var Anchors = document.getElementsByTagName("a");

// for (var i = 0; i < Anchors.length ; i++) {
//     Anchors[i].addEventListener("click", 
//         function (event) {
//             event.preventDefault();
//             if (confirm('Are you sure?')) {
//                 window.location = this.href;
//             }
//         }, 
//         false);
// }

// function injectedFunction() {
//     document.body.style.backgroundColor = 'orange';
//   }
  
//   chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       func: injectedFunction
//     });
//   });


chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    // console.log(new Date(message.contents))

    URLdate = new Date(parseInt(message.contents));

    // console.log(URLdate)

    // if (message.type === "url type" ) {
    //     chrome
    // }
    // chrome.tabs.query(function (tabs) {
    //     tabURL = tabs.highlighted;
    //     console.log(tabURL);
    // })
});


/* This didn't work */
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
    // if (message.type === "tabID") {
    //     console.log(message.contents)
    // }

    // if (message.type === "nextURL") {
    //     console.log(message.contents)
    // }

});



/* This worked */
// chrome.webNavigation.onHistoryStateUpdated.addListener(
//     function (historyStateObject) {

//         const NEXTurl = JSON.stringify(historyStateObject.url);
//         const tabID = JSON.stringify(historyStateObject.tabId);
        
//         // chrome.runtime.sendMessage({type: "tabID", contents: tabID});
//         // chrome.runtime.sendMessage({type: "nextURL", contents: NEXTurl});

//         console.log(NEXTurl);
//         console.log(tabID);
//     }
// )

// chrome.webNavigation.onBeforeNavigate.addListener(
//     function (onBeforeUpdateObject) {
//         const curURL = JSON.stringify(onBeforeUpdateObject.url);
//         console.log(curURL);
//     }
// )


/* This is going to be the major function of how parse out the active tabID with the history listener all in real-time */
// chrome.history.onVisited.addListener(
//     function (onVisitedItem) {
//         visitTimeOfURL = onVisitedItem.lastVisitTime
//         chrome.history.getVisits(onVisitedItem, function (getVisitObject) {
//             if (getVisitObject.visitTime > visitTimeOfURL) {

//             } 
//         })
//     }
// );

// visitFilter = function



// chrome.tabs.query({"active": true, "highlighted": true}, function (tabs) {
//     tabURL = tabs[0].url;
//     console.log(tabURL);
// })

/* It seems that the chrome.history.onVisited event listener is creating multiple entries 
before it actually gets recognized as an official history item that's makes this process
much harder than it needs to be  */

realTimeURLs = []

/* This code block is absolutely imperative */

chrome.history.onVisited.addListener(
    function (historyObject) {
        timeOfURLVisit = new Date(parseInt(historyObject.lastVisitTime));
       
        console.log(historyObject);
        // console.log(timeOfURLVisit);
        

        // chrome.tabs.query({'lastFocusedWindow': true}, function(tabs) {
        //     // Sort the tabs by their lastAccessed property in descending order
        //     tabs.sort(function(a, b) {
        //       return b.lastAccessed - a.lastAccessed;
        //     });
        //     // The tab that was last focused will be the first tab in the sorted array
        //     var tab = tabs[0];
        //     var tab2 = tabs[1];
        //     console.log(tab.url);
        //     console.log(tabs.length);
        //   });

        chrome.tabs.query({'lastFocusedWindow': true}, function(tabs) {
            // Sort the tabs by their index in descending order
            tabs.sort(function(a, b) {
              return b.index - a.index;
            });
            // The second most recently created tab will be the second tab in the sorted array
            var tab = tabs[1];
            var tab2 = tabs[0]
            // console.log(tab.url);
            // console.log(tab2.url);

          });
          

        // chrome.tabs.query({active: true},function (tab) {
        //     console.log(tab[tab.length-1].openerTabId)
        //     tabID = tab[tab.length-1].openerTabId

        //     function tabID () {
        //         chrome.tabs.get(tabID, function (output) {
        //             console.log(output)
        //         }) 
        //     }

        //     return tabID 
        // });

        // chrome.tabs.query({active: true},function (tab) {
        //     console.log("previousURL")
        //     console.log(tab[tab.length-2])
        // });

        // chrome.tabs.query({active: true},function (tab) {
        //     console.log("current URL")
        //     console.log(tab[tab.length-1])
        // })

        // chrome.tabs.query({active: true}, function (tabs) {
        //     for (var i = 0; i < tabs.length; i++) {
        //         console.log(tabs[i])
        //     }
        // })

        // chrome.tabs.getCurrent(
        //     function (tab) {
        //         console.log(tab[0])
        //     }
        // )

        // chrome.tabs.query({active: true, highlighted: true, currentWindow: true}, function (tab) {
        //     console.log("active + currentWindow --- true")
        //     console.log(tab[0])
        // })

        chrome.history.getVisits({url: historyObject.url}, function (visitItems) {
            for (var i = 0, ie = visitItems.length; i < ie; ++i) {
                if (visitItems[i].visitTime >= timeOfURLVisit) {
                    realTimeURLs.push(visitItems[i])
                    console.log(visitItems[i])

                    // if (visitItems[i].transtion === "link" && visitItems[i].referringVisitId === "0") {

                    // }
                }
            }
        })
    }
);


// chrome.webNavigation.onHistoryStateUpdated.addListener(
//     function (webNavObject) {
//         console.log(webNavObject)
//     }
// )

// chrome.history.onVisited.addListener(
//     function (historyObject) {
//         timeOfURLVisit = historyObject.lastVisitTime
//         // console.log(historyObject);
//         console.log("onVisited " + historyObject.lastVisitTime);

// });
 
randoList = []

// chrome.history.onVisited.addListener(
//     function (historyObject) {
//         timeOfURLVisit = historyObject.lastVisitTime
//         console.log(historyObject)
//         console.log(new Date(timeOfURLVisit))
        
//         // chrome.history.search({
//         //     'text': '',              
//         //     'startTime': timeOfURLVisit  
//         //     },
//         //     function(historyItems) {
//         //     for (var i = 0; i < historyItems.length; ++i) {
//         //         var url = historyItems[i];
//         //         // this code is redundant
//         //         // visitItemsList.push(historyItems[i].id);
//         //         historyItemsList.push(url)
//         //         urlList.push(url.url)
//         //         var processVisitsWithUrl = function(url) {
//         //         // We need the url of the visited item to process the visit.
//         //         // Use a closure to bind the  url into the callback's args.
//         //         return function(visitItems) {
//         //             processVisits(url, visitItems);
//         //             // console.log(url);
//         //             // console.log(visitItems);
//         //         };
//         //         };
//         //         chrome.history.getVisits({url: url.url}, processVisitsWithUrl(url));
//         //         // console.log(visitItemsList);
//         //     }
//         //     // console.log(visitItemsList);
//         //     // // console.log(otherList);
//         //     // console.log(historyItems.length);
//         //     // console.log(urlList);
//         //     // console.log(historyItemsList)
//         // });
// });

// chrome.history.search({"text":"", "startTime":     }, function (object) {
//     for (var i; i < object.length; ++i) {
//         console.log(object[i]);   
//     }
// });


/* this does not seem to be working the way it should */
// chrome.webNavigation.onDOMContentLoaded.addListener(
//     function (DOMObject) {
//         console.log("DOMContentLoaded " + DOMObject.timeStamp)
//     }
// );

/* this updates too late it appears */
// chrome.webNavigation.onHistoryStateUpdated.addListener(
//     function (historyStateObjectUpdated) {
//         console.log("historyStateObjectUpdated " + historyStateObjectUpdated.timeStamp)
//     }
// )

/* too many requests */
// chrome.webNavigation.onCommitted.addListener(
//     function(onCommitedObject) {
//         console.log(onCommitedObject)
//     }
// )


/* this was not optimal either */
// chrome.webNavigation.onCompleted.addListener(
//     function(onCompletedObject) { 
//         console.log(onCompletedObject);
//     }
// )

/* This wasn't optimal */
// chrome.webNavigation.onCreatedNavigationTarget.addListener(
//     function(NavigationObject) {
//         console.log(NavigationObject)
//     }    
// )

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     console.log(JSON.stringify(tab))
// })

/* This is going to show each visitItem on each url */
// chrome.history.onVisited.addListener(
//     function (historyObject) {
//         console.log(historyObject)
//         console.log(historyObject.url)
//         urlDetail = JSON.stringify(historyObject.url)
//         chrome.history.getVisits({url:urlDetail},
//             function (urlDetail) {
//                 console.log(urlDetail)
//             }
//         )
//     }
// )


// chrome.tabs.onCreated.addListener( function (tab) {
//     console.log("onCreated")
//     console.log(tab)
// })

// chrome.tabs.onUpdated.addListener( function (tabID, changeInfo, tab) {
//     // console.log(tabID);
//     // console.log(changeInfo);
//     console.log("onUpdated")
//     console.log(tab);
// })

/* This is it!!!!! This is going to work!!!!!! Now we need to make an index of most recently activated tabs with newly created tabs */

chrome.tabs.onActivated.addListener(function(activeInfo) {
    console.log("The user changed to tab with id: " + activeInfo.tabId);
  });
  
  chrome.tabs.onCreated.addListener(function(tab) {
    console.log("A new tab was created with id: " + tab.id);
  });