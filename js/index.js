var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("closeBtn")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  var content = dropdown.querySelector(".dropdown-content2");
  content.classList.toggle("show");
}
function selectOption(event, id) {
  event.preventDefault();
  var dropdown = document.getElementById(id);
  var dropbtn = dropdown.querySelector(".dropbtn2");
  var clickedLink = event.target;
  var oldButtonText = dropbtn.textContent;

  dropbtn.textContent = clickedLink.textContent;

  clickedLink.textContent = oldButtonText;

  var content = dropdown.querySelector(".dropdown-content2");
  content.classList.remove("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
