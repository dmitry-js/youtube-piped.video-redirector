document.getElementById('redirectBtn').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentTab = tabs[0];
    var videoID = currentTab.url.match(/watch\?v=([a-zA-Z0-9_-]+)/);

    if(videoID && videoID[1]) {
      var newURL = 'https://piped.video/watch?v=' + videoID[1];
      chrome.tabs.update(currentTab.id, {url: newURL});
    } else {
      alert("This doesn't seem to be a valid YouTube video URL.");
    }
  });
});
