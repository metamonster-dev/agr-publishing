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
  $(".tab_area button").on("click", function () {
    $(this).parent().addClass("on").siblings().removeClass("on");
    tabSlider.slideTo($(this).parent().index());
  });
});
