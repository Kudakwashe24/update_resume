const pEl = document.getElementById('parallax');
const nav = document.getElementById('logo');
const cta = document.getElementsByTagName('cta-child');
const whole = document.getElementById('nav');
window.addEventListener("scroll", function() {
  var offset = window.pageYOffset;
  var offsetRatio = offset / (this.window.innerHeight * .9);
  
  pEl.style.transform = "translateY(" + (offset * .4) + "px)";
  if (offset >= 4) {
    whole.classList.add('back');
    document.getElementById("up").style.opacity = "1";
  } else {
    whole.classList.remove('back');
    document.getElementById("up").style.opacity = "0";  }

});
