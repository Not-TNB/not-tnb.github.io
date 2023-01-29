AOS.init({
  duration: 800,
  offset: 200,
})

var emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
var options = { loop: false };

var emblaCarousels = emblaNodes.map(function(emblaNode) {
  return EmblaCarousel(emblaNode, options);
});

if (window.matchMedia("(max-width: 700px)").matches) {
  var nv = document.getElementById('navbarAlt')
} else {
  var nv = document.getElementById('navbar')  
}

var titleScr = document.getElementById('title')

document.getElementsByTagName('body')[0].onscroll = function() {
  scrollAmt = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  titleHeight = titleScr.offsetTop + titleScr.offsetHeight

  // show navbar bg
  if (scrollAmt > titleHeight/4) { nv.style.backgroundColor = 'var(--bgD)' }
  else { nv.style.backgroundColor = 'transparent' }
}

// Signature stuff
function isVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
var sign = document.getElementById('signature')
addEventListener('scroll', () => {
  if (isVisible(sign) == true) {
    sign.style.animationPlayState = 'running'
  }  
});