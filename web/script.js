const homeButton = document.querySelector('.navbar-button:nth-child(1)');
const customizeButton = document.querySelector('.navbar-button:nth-child(2)');
const profileButton = document.querySelector('.navbar-button:nth-child(3)');

const homeContent = document.getElementById('homeContent');
const customizeContent = document.getElementById('customizeContent');
const profileContent = document.getElementById('profileContent');

function showContent(contentElement) {
  // Hide all content elements
  const allContentElements = document.querySelectorAll('.tab-content');
  allContentElements.forEach(element => {
    element.style.display = 'none';
  });
  
  // Show the selected content element
  contentElement.style.display = 'block';
}

// Show the home content by default
showContent(homeContent);

homeButton.addEventListener('click', function() {
  showContent(homeContent);
});

customizeButton.addEventListener('click', function() {
  showContent(customizeContent);
});

profileButton.addEventListener('click', function() {
  showContent(profileContent);
});

// Navigate to the customize tab when the plus button is clicked
const createPresenceButton = document.getElementById('createPresenceButton');
createPresenceButton.addEventListener('click', function() {
  showContent(customizeContent);
});