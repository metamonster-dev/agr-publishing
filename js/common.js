const regOnlyNumber = /^[0-9]+$/;
const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;

// ===== HEADER 메뉴 열기/닫기 click
const menuOpenClick = () => {
  $("#m_menu").addClass("show");
  $("#m_menu a, #m_menu button").eq(0).focus();
};
const menuCloseClick = () => {
  $("#m_menu").removeClass("show");
  $("#contents a, #contents button, #contents input").eq(0).focus();
};

// toast
const notyf = new Notyf({
  position: {
    x: "center",
    y: "bottom",
  },
  types: [
    {
      type: "text",
      background: "rgba(75,79,88,0.9)",
      duration: 3000,
      dismissible: true,
    },
    {
      type: "icon",
      background: "rgba(75,79,88,0.9)",
      duration: 3000,
      dismissible: true,
      icon: true,
    },
  ],
});
$(".notyf-announcer").css("outline", "none"); // outline: 0px; 웹접근성 오류

// modal show/hide
const onModalShow = (modalId) => {
  $(`#${modalId}`).addClass("active");
  $(`#${modalId} button, #${modalId} a`).first().focus();
};
const onModalHide = (modalId, btnId) => {
  $(`#${modalId}`).removeClass("active");
  if (btnId) $(`#${btnId}`).focus();
};

// scroll move
const onScrollMove = (id) => {
  const offset = -56;
  const elH = $(`#${id}`).offset().top + offset;
  $("html, body").animate({ scrollTop: elH }, 500);
  $(`#${id}`).focus();
};

$(window).one("load", function () {
  // header init
  const index = $("body")
    .attr("class")
    .split(" ")
    .filter((className) => className.startsWith("hd_type"))
    .map((className) => className.slice(-1));
  setTimeout(() => {
    $(`#header:not(:nth-of-type(${index}))`).remove();
    $("#header").css("display", "block");
  }, 100);
});

$(window).on("load", function () {
  // ===== HEADER
  // depth01 focus & click
  $("#m_menu .gnb > ul > li > button").on("click focus", function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // 메뉴 Tab 이동 제어
  $("#contents a, #contents button, #contents input")
    .eq(0)
    .on("keydown", function (e) {
      if (
        $("#m_menu").css("display") === "block" &&
        e.shiftKey &&
        e.key === "Tab"
      ) {
        e.preventDefault();
        $("#header .menu_btn").focus();
      }
    });
  $("#header .menu_btn").on("keydown", function (e) {
    if (!$("#m_menu").hasClass("show") && !e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      if ($(".sticky_menu .tab_area").length > 0)
        $(".sticky_menu .tab_area button, .sticky_menu .tab_area a")
          .first()
          .focus();
      else $("#contents a, #contents button, #contents input").eq(0).focus();
    }
  });
  $("#m_menu .back_btn").on("keydown", function (e) {
    if (e.shiftKey && e.key === "Tab") {
      e.preventDefault();
      $("#m_menu .gnb > ul > li")
        .last()
        .addClass("active")
        .siblings()
        .removeClass("active");
      $("#m_menu .gnb > ul > li > button").last().focus();
    }
  });
  $("#m_menu a, #m_menu button")
    .last()
    .on("keydown", function (e) {
      if (!e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        $("#m_menu .back_btn").focus();
      }
    });

  // 상품 slider
  const productSlider = new Swiper(".prod_slider", {
    slidesPerView: 1.25,
    spaceBetween: 16,
  });

  // tab slider
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

  // img 크게/작게 보기
  const onImgZoom = (_this) => {
    const areaEl = _this.parent();
    if (areaEl.hasClass("show_large")) {
      areaEl.removeClass("show_large");
      areaEl.find(".img_area").attr("aria-label", "이미지 크게 보기");
    } else {
      areaEl.addClass("show_large");
      areaEl.find(".img_area").attr("aria-label", "이미지 작게 보기");
    }
  };
  $(
    ".list_area.list_style04 .img_area, .list_area.list_style08 .rv_img_area .img_area"
  ).on("click", function () {
    onImgZoom($(this));
  });
  $(
    ".list_area.list_style04 .img_area, .list_area.list_style08 .rv_img_area .img_area"
  ).on("keypress", function (e) {
    if (e.key === "Enter") onImgZoom($(this));
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

  // tooltip show/hide
  $(document).on("click", ".tooltip_wrap .i_btn", function () {
    const tooltip = $(this).parents(".tooltip_wrap");
    if (!tooltip.hasClass("show")) {
      tooltip.addClass("show");
      tooltip.find(".x_btn").focus();
    } else {
      tooltip.removeClass("show");
    }
  });
  $(document).on("click", ".tooltip_wrap .x_btn", function () {
    const tooltip = $(this).parents(".tooltip_wrap");
    tooltip.removeClass("show");
    tooltip.find(".i_btn").focus();
  });

  // modal event
  $(document).on("click", ".modal_wrap", function (e) {
    const modal = $(e.target).parents(".modal_wrap");
    if (!modal.hasClass("modal_wrap")) {
      $(".modal_wrap").removeClass("active");
    }
  });
  $(document).on(
    "keydown",
    ".modal_wrap.middle.active, .modal_wrap.bottom.active",
    function (e) {
      if (e.key === "Escape") $(this).removeClass("active");
    }
  );
  $(document).on(
    "keydown",
    ".modal_wrap.active button, .modal_wrap.active a, .modal_wrap.active input",
    function (e) {
      const focusEls = $(
        ".modal_wrap.active button, .modal_wrap.active a, .modal_wrap.active input"
      );
      if ($(this).is(focusEls.last()) && !e.shiftKey && e.key === "Tab") {
        e.preventDefault();
        focusEls.first().focus();
      } else if (
        $(this).is(focusEls.first()) &&
        e.shiftKey &&
        e.key === "Tab"
      ) {
        e.preventDefault();
        focusEls.last().focus();
      }
    }
  );

  // toggle item
  $(document).on(
    "click",
    ".toggle_area button.tg_tit, .list_toggle_area button.tg_tit, .list_area.list_style08 .tg_tit",
    function () {
      if ($(this).parent().hasClass("active"))
        $(this).parent().find(".tg_cont").stop(false, false).slideUp();
      else $(this).parent().find(".tg_cont").stop(false, false).slideDown();
      $(this).parent().toggleClass("active");
    }
  );

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
    if ($(this).attr("data-value") === "etc")
      $(this).parents(".select_custom").next().removeClass("d_none");
    else $(this).parents(".select_custom").next().addClass("d_none");
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
      if ($(this).attr("data-value") === "etc")
        $(this).parents(".select_custom").next().removeClass("d_none");
      else $(this).parents(".select_custom").next().addClass("d_none");
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
