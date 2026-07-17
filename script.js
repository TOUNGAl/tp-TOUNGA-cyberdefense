// TOUNGA CYBERDÉFENSE — comportements partagés
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.querySelector(".form-status");
      if (status) {
        status.textContent = "Message envoyé. Notre équipe SOC vous répond sous 24h ouvrées.";
        status.classList.add("visible", "ok");
      }
      form.reset();
    });
  }
});
