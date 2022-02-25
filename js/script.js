$(document).ready(function () {
  var labItem = $(".content-lab--item");
  var meetingIitem = $(".content-meeting--item");
  var eventItem = $(".content-event--item");
  var whcIitem = $(".content-whc--item");

  meetingIitem.hover(function () {
    if (!$(this).hasClass("upDown1")) {
      $(this).addClass("upDown1");
      meetingIitem.animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown1");
      meetingIitem.animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  labItem.hover(function () {
    if (!$(this).hasClass("upDown")) {
      $(this).addClass("upDown");
      meetingIitem.animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown");
      meetingIitem.animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  eventItem.hover(function () {
    if (!$(this).hasClass("upDown1")) {
      $(this).addClass("upDown1");
      eventItem.animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown1");
      eventItem.animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  whcIitem.hover(function () {
    if (!$(this).hasClass("upDown")) {
      $(this).addClass("upDown");
      eventItem.animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown");
      eventItem.animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  // click lên xuống

  if (
    ($(".nl-item--images").css("opacity", "0"),
    $(".nl-item--images").css("opacity", "0"))
  ) {
    $(".content-nl--item").mouseover(function () {
      $(".nl-item--images").css("opacity", "1");
      $(".nl-item--background").css("opacity", "0.9");
    });
  } else $(".nl-item--images").css("opacity", "1");
  {
    $(".content-nl--item").mouseout(function () {
      $(".nl-item--images").css("opacity", "0");
      $(".nl-item--background").css("opacity", "0");
    });
  }

  $(".content-nl--item").hover(function () {
    if (!$(this).hasClass("upDown")) {
      $(this).addClass("upDown");
      $(this).animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown");
      $(this).animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  if (
    ($(".cntt-item--images").css("opacity", "0"),
    $(".cntt-item--images").css("opacity", "0"))
  ) {
    $(".content-cntt--item").mouseover(function () {
      $(".cntt-item--images").css("opacity", "1");
      $(".cntt-item--background").css("opacity", "0.9");
    });
  } else $(".cntt-item--images").css("opacity", "1");
  {
    $(".content-cntt--item").mouseout(function () {
      $(".cntt-item--images").css("opacity", "0");
      $(".cntt-item--background").css("opacity", "0");
    });
  }

  $(".content-cntt--item").hover(function () {
    if (!$(this).hasClass("upDown")) {
      $(this).addClass("upDown");
      $(this).animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown");
      $(this).animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  if (
    ($(".dn-item--images").css("opacity", "0"),
    $(".dn-item--images").css("opacity", "0"))
  ) {
    $(".content-dn--item").mouseover(function () {
      $(".dn-item--images").css("opacity", "1");
      $(".dn-item--background").css("opacity", "0.9");
    });
  } else $(".dn-item--images").css("opacity", "1");
  {
    $(".content-dn--item").mouseout(function () {
      $(".dn-item--images").css("opacity", "0");
      $(".dn-item--background").css("opacity", "0");
    });
  }

  $(".content-dn--item").hover(function () {
    if (!$(this).hasClass("upDown")) {
      $(this).addClass("upDown");
      $(".content-cntt--item").animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown");
      $(".content-cntt--item").animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

  if (
    ($(".tt-item--images").css("opacity", "0"),
    $(".tt-item--images").css("opacity", "0"))
  ) {
    $(".content-tt--item").mouseover(function () {
      $(".tt-item--images").css("opacity", "1");
      $(".tt-item--background").css("opacity", "0.9");
    });
  } else $(".tt-item--images").css("opacity", "1");
  {
    $(".content-tt--item").mouseout(function () {
      $(".tt-item--images").css("opacity", "0");
      $(".tt-item--background").css("opacity", "0");
    });
  }

  $(".content-tt--item").hover(function () {
    if (!$(this).hasClass("upDown")) {
      $(this).addClass("upDown");
      $(".content-nl--item").animate(
        {
          margin: "-35px 0px 0px 0px",
        },
        500
      );
    } else {
      $(this).removeClass("upDown");
      $(".content-nl--item").animate(
        {
          margin: "18px 0px 0px 0px",
        },
        500
      );
    }
  });

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
  }, 3500);
});
