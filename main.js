// when window is resized the func will run
window.onresize = screen;
// when window has finished loading the func will run
window.onload = screen;

function screen() {
  //variable shows the width of the window screen
  let myWidth = window.innerWidth;

  document.getElementById("size").innerHTML = "Width: " + myWidth;
}
