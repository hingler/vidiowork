(function() {
  window.addEventListener("load", main);

  function main() {
    setTimeout(showPaywall, 1100);
  }

  function showPaywall() {
    document.getElementById("paywall").classList.remove("hidden");
  }

})();