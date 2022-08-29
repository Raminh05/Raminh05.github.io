/* Simple script to hide the navbar upon scroll */

// Previous scroll position
let prevScrollpos = window.scrollY;

// onscroll event
window.onscroll = function() {
  // Fetches current scroll position
  let currentScrollPos = window.scrollY;
    
  // If scroll position is at the top or if the user scrolled back up, show the navbar
  if (prevScrollpos > currentScrollPos || currentScrollPos <= 20) {
    document.getElementById("mainNavbar").style.top = "0";
  }

  // Hide the navbar if scrolling down
  else {
    document.getElementById("mainNavbar").style.top = "-100px";
  }
  
  // Updates current scroll position
  prevScrollpos = currentScrollPos;
}