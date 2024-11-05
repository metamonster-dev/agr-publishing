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
});
