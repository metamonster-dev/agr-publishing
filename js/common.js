const regPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;

$(window).on("load", function () {
  // 상품 Slider
  const productSlider = new Swiper(".prod_slider", {
    slidesPerView: 1.25,
    spaceBetween: 16,
  });

  // 탭 Slider
  const tabSlider = new Swiper(".tab_slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
  });
  const tabSlider02 = new Swiper(".tab_slider02", {
    slidesPerView: "auto",
    spaceBetween: 0,
  });
  $(".tab_area button").on("click", function () {
    $(this).parent().addClass("on").siblings().removeClass("on");
    if ($(".tab_slider").length > 0)
      tabSlider.slideTo($(this).parent().index());
    if ($(".tab_slider02").length > 0)
      tabSlider02.slideTo($(this).parent().index());
  });

  // input 비밀번호 보기/숨기기
  $(".input_pw_area button").on("click", function () {
    if ($(this).prev("input").attr("type") === "password") {
      $(this).prev("input").attr("type", "text");
      $(this).addClass("on").find("span").text("비밀번호 숨기기");
    } else {
      $(this).prev("input").attr("type", "password");
      $(this).removeClass("on").find("span").text("비밀번호 보기");
    }
  });
});
