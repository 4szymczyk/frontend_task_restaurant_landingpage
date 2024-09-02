document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.getElementById("menu-icon");
   const navLinks = document.getElementById("nav-links");

   menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      document.body.style.overflowY = navLinks.classList.contains("active") ? "hidden" : "auto";
      menuIcon.textContent = navLinks.classList.contains("active") ? "close" : "menu";
      window.scrollTo(0, 0);
   });
});
