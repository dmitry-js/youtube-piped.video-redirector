const button = document.createElement('button');
button.id = 'redirectBtn';
button.innerText = 'Watch on Piped.video';
button.classList.add('main-button');

button.addEventListener('click', function() {
  const videoID = window.location.search.match(/v=([a-zA-Z0-9_-]+)/);

  if (videoID && videoID[1]) {
    const newURL = 'https://piped.video/watch?v=' + videoID[1];
    window.location.href = newURL;
  } else {
    alert("This doesn't seem to be a valid YouTube video URL.");
  }
});

function insertButtonIfTargetExists() {
  const targetElement = document.getElementById('masthead').querySelector('ytd-topbar-menu-button-renderer');
  if (targetElement && targetElement.parentElement) {
    targetElement.parentElement.insertBefore(button, targetElement);
    // If found and added, disconnect the observer
    observer.disconnect();
  }
}

const observer = new MutationObserver(insertButtonIfTargetExists);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
