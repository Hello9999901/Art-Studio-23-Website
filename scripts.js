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
  document.getElementById('loaderWrapper').style.visibility = 'visible';
  document.getElementById('loader').style.visibility = 'visible';
  document.getElementById('awardsWrapper').style.visibility = 'visible';
  setTimeout(function () {
    console.log("waiting");
  }, 3000);
  document.getElementById('loaderWrapper').style.visibility = 'hidden';
  document.getElementById('loader').style.visibility = 'hidden';
};