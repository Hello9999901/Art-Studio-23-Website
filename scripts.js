var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || $(window).scrollTop() <= 0) {
    document.getElementById("topBar").style.top = "0";
  } else {
    document.getElementById("topBar").style.top = "-122px";
  }
  prevScrollpos = currentScrollPos;
}

window.onload = (event) => {
  document.getElementById('awardsWrapper').style.visibility = 'visible';
};