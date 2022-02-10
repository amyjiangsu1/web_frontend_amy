// EXAMINING AND CHANGING THE DOCUMENT  //
console.log("Hello from scripts.js!");

// add a click event listener for map and close links
document.addEventListener("click", handleClicks);

function handleClicks(e) {
  if (e.target.matches(".map") || e.target.matches(".closer")) {
    document.querySelector("body").classList.toggle("showme");
    e.preventDefault();
  }
}

// this part allows user switch style sheet
function swapStyleSheet(sheet) {
  document.getElementById("page_style").setAttribute("href", sheet);
}

function initiate() {
  var theme1 = document.getElementById("theme1");
  var theme2 = document.getElementById("theme2");
  var theme3 = document.getElementById("theme3");
  var notheme = document.getElementById("notheme");

  theme1.onclick = function () {
    swapStyleSheet("css/ver1_styles.css");
  };
  theme2.onclick = function () {
    swapStyleSheet("css/ver2_styles.css");
  };
  theme3.onclick = function () {
    swapStyleSheet("css/styles.css");
  };
  notheme.onclick = function () {
    swapStyleSheet("");
  };
}

window.onload = initiate;
