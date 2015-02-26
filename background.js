chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    var url = info.url.replace("people.iitr.ernet.in", "channeli.in").replace("/Notices/", "/notices/");
    return {redirectUrl: url};
  },
  {
    urls: [
      "*://people.iitr.ernet.in/Notices/*"
    ],
    types: ["main_frame"]
  },
  // extraInfoSpec
  ["blocking"]
);