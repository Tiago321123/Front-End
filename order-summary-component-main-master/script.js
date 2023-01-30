function Abrir() {
  document.getElementById("all").style.display = "none";
  document.getElementById("page2").style.display = "flex";
}
function Close() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("all").style.display = "flex";
  document.getElementById("h2").innerHTML = "Annual Plan";
  document.getElementById("p").innerHTML = "$59.99/year";
}
function Close2() {
  // hhhaaaaaaaaaaaa tava colocando CLose2 haaaaaaaaa
  document.getElementById("page2").style.display = "none";
  document.getElementById("all").style.display = "flex";
  /*
    document.querySelectorAll("h2")[0].innerText = "Monthly Plan";
    document.querySelectorAll("p")[3].innerText = "$6.99/month";
    */
  document.getElementById("h2").innerHTML = "Monthly Plan";
  document.getElementById("p").innerHTML = "$6.99/month";
}
function Close3() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("all").style.display = "flex";
  document.getElementById("h2").innerHTML = "Vital Plan";
  document.getElementById("p").innerHTML = "$299.99";
}
