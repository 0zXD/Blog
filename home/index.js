// Get the checkbox element
const colorModeToggle = document.getElementById('color_mode');

// Add an event listener for the checkbox's change event
colorModeToggle.addEventListener('change', function() {
  // Check if the checkbox is checked
  if (this.checked) {
    // Add the 'dark-mode' class to the body element
    document.body.classList.add('light-mode');
  } else {
    // Remove the 'dark-mode' class from the body element
    document.body.classList.remove('light-mode');
  }
});

