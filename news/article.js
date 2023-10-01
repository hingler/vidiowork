(function() {
  window.addEventListener("load", main);

  function main() {
    setTimeout(showPaywall, 2400);
  }

  function showPaywall() {
    document.getElementById("paywall").classList.remove("hidden");
  }

})();