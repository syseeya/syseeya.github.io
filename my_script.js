function ask_for_x_n_y() {
  var x = prompt("Enter x value");
  var y = prompt("Enter y value");
  var z = compute_x_plus_y(x,y);
  document.getElementById("demo").innerHTML = z;
}

function compute_x_plus_y(x,y) {
  x = parseInt(x);
  y = parseInt(y);
  var z = x + y;
  return z;
}
