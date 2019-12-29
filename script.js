let okButton = document.getElementById("ok-button");
let paragraph = document.getElementById("paragraph");

okButton.addEventListener('click', function() {
  paragraph.innerText = 'Button Clicked';
});
