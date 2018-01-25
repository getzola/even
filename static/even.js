function initMobile() {
  var $mobileNav = document.getElementById("mobile-navbar");
  var $mobileNavIcon = document.querySelector(".mobile-navbar-icon");

  var slideout = new Slideout({
    "panel": document.getElementById("mobile-panel"),
    "menu": document.getElementById("mobile-menu"),
    "padding": 180,
    "tolerance": 70
  });
  slideout.disableTouch();

  $mobileNavIcon.addEventListener("click", function() {
    slideout.toggle();
  });

  slideout.on("beforeopen", function () {
    $mobileNav.classList.add("fixed-open");
    $mobileNavIcon.classList.add("icon-click");
    $mobileNavIcon.classList.remove("icon-out");
  });

  slideout.on("beforeclose", function () {
    $mobileNav.classList.remove("fixed-open");
    $mobileNavIcon.classList.add("icon-out");
    $mobileNavIcon.classList.remove("icon-click");
  });

  document.getElementById("mobile-panel").addEventListener("touchend", function() {
    slideout.isOpen() && $mobileNavIcon.click();
  })
}

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  initMobile();
} else {
  document.addEventListener("DOMContentLoaded", initMobile);
}
