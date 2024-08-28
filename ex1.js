function F_Euro() {
  var somme = document.getElementById("FR").value;
  document.getElementById("EURO").value = (somme / 6.3).toFixed(2);
}

function Euro_F() {
  var somme = document.getElementById("EURO").value;
  document.getElementById("FR").value = (somme * 6.3).toFixed(2);
}
