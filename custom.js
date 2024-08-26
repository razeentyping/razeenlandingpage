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
 

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const callBtn = document.getElementById('callBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const locationBtn = document.getElementById('locationBtn');

    // Initialize the state
    let isVisible = true;

    toggleBtn.addEventListener('click', function () {
        if (isVisible) {
            callBtn.classList.add('hide');
            whatsappBtn.classList.add('hide');
            locationBtn.classList.add('hide');
            toggleBtn.querySelector('.toggle-icon').textContent = '➡️'; // Update the arrow icon
        } else {
            callBtn.classList.remove('hide');
            whatsappBtn.classList.remove('hide');
            locationBtn.classList.remove('hide');
            toggleBtn.querySelector('.toggle-icon').textContent = '⬅️'; // Update the arrow icon
        }
        isVisible = !isVisible;
    });
});
