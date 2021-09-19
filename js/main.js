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

  logSelfEsteem();
});


const logSelfEsteem = () => {
  let message = 'Самооценка задания: 150 баллов\n';
  message += '- вёрстка валидная +10\n';
  message += 'В коде страницы присутствуют семантические теги и заголовки (10 шт. по 2 балла): header, main, footer, nav, aside, section, article, h1, h2, h3\n';
  message += '- для оформления СV используются css-стили +10\n';
  message += '- контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10\n';
  message += '- вёрстка адаптивная +10\n';
  message += '- есть адаптивное бургер-меню +10\n';
  message += '- на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10\n';
  message += '- контакты для связи и перечень навыков оформлены в виде списка ul > li +10\n';
  message += '- CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10\n';
  message += '- CV содержит пример вашего кода с подсветкой кода. +10\n';
  message += '- CV содержит изображения-ссылки на выполненные вами проекты. +10\n';
  message += '- CV выполнено на английском языке +10\n';
  message += '- выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка +10\n';
  message += '- есть видеорезюме автора CV на английском языке. +0\n';
  message += '- дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10\n';
  console.info(message);
};
