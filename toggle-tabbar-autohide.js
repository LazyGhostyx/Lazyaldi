// ==UserScript==
// @name        Toggle Vertical Tabbar Auto-Hide
// @version     1.0.0
// @description Toggle the "autohide-tabs" class on #browser
// ==/UserScript==

(function(){
  const B = document.getElementById("browser");
  if (!B) return;

  const CLASS = "autohide-tabs";

  if (B.classList.contains(CLASS)) {
    B.classList.remove(CLASS);
    console.log("Tabbar auto-hide: OFF");
  } else {
    B.classList.add(CLASS);
    console.log("Tabbar auto-hide: ON");
  }
})();
