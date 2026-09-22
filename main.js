(function () {
  var toggle = document.getElementById("nav-toggle");
  var header = document.querySelector(".site-header");
  var year = document.getElementById("year");

  function setHeaderHeight() {
    if (!header) return;
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  function syncMenu() {
    if (!toggle) return;
    var open = toggle.checked;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle) {
    toggle.addEventListener("change", syncMenu);
    document.querySelectorAll("#site-nav a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var href = link.getAttribute("href");
        var target = href && href.charAt(0) === "#" ? document.querySelector(href) : null;
        if (!target) return;
        event.preventDefault();
        toggle.checked = false;
        syncMenu();
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        if (history.pushState) history.pushState(null, "", href);
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.checked) {
        toggle.checked = false;
        syncMenu();
        toggle.focus();
      }
    });
    syncMenu();
  }

  if (year) year.textContent = String(new Date().getFullYear());
  setHeaderHeight();
  window.addEventListener("resize", setHeaderHeight);
})();
