document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();

  let toggleBtn = document.querySelector(".main-header__toggle");
  let header = document.querySelector(".main-header");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      header.classList.toggle("main-header--opened");
    });
  }

  let links = document.querySelectorAll('.main-nav__link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove("main-header--opened");
    })
  });
});
