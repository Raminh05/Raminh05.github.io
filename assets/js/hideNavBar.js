let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos || currentScrollPos <= 20) {
    document.getElementById("mainNavbar").style.top = "0";
  }
  else {
    document.getElementById("mainNavbar").style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
}