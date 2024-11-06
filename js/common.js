const regPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;

$(window).on("load", function () {
  // 상품 slider
  const productSlider = new Swiper(".prod_slider", {
    slidesPerView: 1.25,
    spaceBetween: 16,
  });

  // 탭 slider
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

  // select custom
  $(document).on("click", ".select_custom button", function () {
    const expanded = $(this).parent().attr("aria-expanded") === "true";
    $(this).parent().attr("aria-expanded", !expanded);
    $(this).parent().toggleClass("active");
  });
  $(document).on("keydown", ".select_custom button", function (e) {
    const expanded = $(this).parent().attr("aria-expanded") === "true";

    if (e.key === "Enter") {
      e.preventDefault();
      $(this).parent().attr("aria-expanded", !expanded);
      $(this).parent().toggleClass("active");
    } else if (expanded && e.key === "ArrowDown") {
      e.preventDefault();
      $(this).parent().find("ul li").first().focus();
    } else if (expanded && (e.key === "Tab" || e.key === "Escape")) {
      e.preventDefault();
      $(this).parent().attr("aria-expanded", false).removeClass("active");
      $(this).focus();
    }
  });
  $(document).on("click", ".select_custom ul li", function () {
    $(this)
      .parents(".select_custom")
      .attr("aria-expanded", false)
      .removeClass("active");
    $(this)
      .parents(".select_custom")
      .find("button")
      .text($(this).text())
      .focus();
  });
  $(document).on("keydown", ".select_custom ul li", function (e) {
    e.preventDefault();
    if (e.key === "Enter") {
      $(this)
        .parents(".select_custom")
        .attr("aria-expanded", false)
        .removeClass("active");
      $(this)
        .parents(".select_custom")
        .find("button")
        .text($(this).text())
        .focus();
    } else if (e.key === "ArrowDown") {
      $(this).next().length && $(this).next().focus();
    } else if (e.key === "ArrowUp") {
      $(this).prev().length && $(this).prev().focus();
    } else if (e.key === "Tab" || e.key === "Escape") {
      $(this)
        .parents(".select_custom")
        .attr("aria-expanded", false)
        .removeClass("active");
      $(this).parents(".select_custom").find("button").focus();
    }
  });
});
