document.addEventListener('DOMContentLoaded', function() {
  const shareBtn = document.querySelector('.share-btn');
  const sharePopup = document.querySelector('.share-popup');

  shareBtn.addEventListener('click', function() {
    // Toggle active class on button
    this.classList.toggle('active');
    
    // Toggle active class on popup
    sharePopup.classList.toggle('active');
  });

  // Close popup when clicking outside
  document.addEventListener('click', function(e) {
    if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
      shareBtn.classList.remove('active');
      sharePopup.classList.remove('active');
    }
  });
});