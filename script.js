function openYT(){
  window.open("https://www.youtube.com");
}
function openIG(){
  window.open("https://www.instagram.com");
}
function openX(){
  window.open("https://www.twitter.com");
}
let menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', function(){
  let sideNavAnimation;
  sideNavAnimation = document.getElementById('sideNav');
  sideNavAnimation.classList.add('sideNavShow')
  sideNavAnimation.classList.remove('sideNavClose')
})
let closeButton= document.getElementById('closeButton');
closeButton.addEventListener('click', function(){
  let sideNavAnimationClose;
  sideNavAnimationClose = document.getElementById('sideNav');
  sideNavAnimationClose.classList.add('sideNavClose')                 
  sideNavAnimationClose.classList.remove('sideNavShow')
})
