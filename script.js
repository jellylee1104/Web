function change_color() {
   var r = Math.floor(Math.random() * 255 + 1);

   var g = Math.floor(Math.random() * 255 + 1);

   var b = Math.floor(Math.random() * 255 + 1);

  document.body.style.background = "rgba("+ r + "," + g +","+ b +", 0.5)";
}

setInterval(change_color,1000);
