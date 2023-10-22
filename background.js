/* chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
  chrome.action.setBadgeText({text: 'ON'});
}); */

chrome.action.onClicked.addListener((tab) => {
  // Ensure we have a valid tab ID
  if (tab.id !== undefined) {
    chrome.tabs.get(tab.id, (currentTab) => {
      if (currentTab.url.includes('youtube.com/watch?v=')) {
        const videoID = new URL(currentTab.url).searchParams.get('v');
        if (videoID) {
          const newURL = 'https://piped.video/watch?v=' + videoID;
          chrome.tabs.update(currentTab.id, { url: newURL });
        } else {
          alert("This doesn't seem to be a valid YouTube video URL.");
        }
      } else {
        alert("Please navigate to a YouTube video before clicking the extension icon.");
      }
    });
  }
});

