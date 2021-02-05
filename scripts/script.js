// Скрытие хэдера при скролле вниз и отображение при скролле вверх
var prevScrollpos = window.pageYOffset;
$(window).on("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".header").css('top', '0')
  } else {
    $(".header").css('top', '-70px')
  }
  prevScrollpos = currentScrollPos;
});

// Добавление непрозрачного фона хэдеру при скролле ниже ста пикселей
// Добавление прозрачного фона и отображение хэдера при нахождении наверху страницы
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("bg-color");
    } else {
       $(".header").removeClass("bg-color");
       $(".header").css('top', '0')
    }
});

function closeCookieBanner() {
  $(".cookie-banner").css('display', 'none');
}