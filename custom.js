 // Get the button
 var scrollBtn = document.getElementById("scrollBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         scrollBtn.style.display = "block";
     } else {
         scrollBtn.style.display = "none";
     }
 };

 // When the user clicks on the button, scroll to the top of the document
 function scrollToTop() {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 }
 

 document.addEventListener("DOMContentLoaded", function() {
    // Initially show the icons
    const iconBox = document.querySelector('.icon-box');
    const toggleBtn = document.getElementById('toggleBtn');
    const iconButtons = document.querySelectorAll('.fixed-button:not(#toggleBtn)');
    const toggleIcon = document.querySelector('.toggle-icon');

    iconBox.style.display = 'flex'; // Show the icons on page load

    toggleBtn.addEventListener('click', function() {
        if (iconButtons[0].style.display !== 'none') {
            iconButtons.forEach(button => button.style.display = 'none'); // Hide all icons except the toggle button
            toggleIcon.textContent = '➡️'; // Change the arrow to right
        } else {
            iconButtons.forEach(button => button.style.display = 'block'); // Show all icons
            toggleIcon.textContent = '⬅️'; // Change the arrow to left
        }
    });
});

