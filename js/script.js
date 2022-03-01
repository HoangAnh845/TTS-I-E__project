
$(document).ready(function () {

  new WOW().init();
  /*Sự kiện onscroll*/
  var backToTop = $(".back-to-top");
  window.onscroll = function () {
    let position = window.scrollY;
    if (position >= 100) {
      backToTop.css("opacity", "1");
      setTimeout(function () {
        backToTop.addClass("show");
      }, 600);
    } else {
      backToTop.removeClass("show");
      setTimeout(function () {
        backToTop.css("opacity", "0");
      }, 600);
    }
  };

  /* Hành động khi click vào nút back-to-top */
  $("#scrollup").click(function (e) {
    e.preventDefault();
    let scrollToTop = setInterval(function () {
      let position = window.scrollY;
      position -= 20;
      window.scrollTo(0, position);
      if (position <= 0) {
        clearInterval(scrollToTop);
      }
    }, 7);
  });

  setTimeout(function () {  
     $(".preLoader").css("opacity", "0");
    $(".preLoader").css("transform","translate(0, -1999px)");
  }, 2000);

  // Menu
  $('.header__top-bar').click(function(){
    $('.header__top-menu').slideToggle();
  });
});

