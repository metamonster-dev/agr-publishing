const regOnlyNumber = /^[0-9]+$/;
const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,16}$/;

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

// modal
const onModalShow = (modalId) => {
  $(`#${modalId}`).addClass("active");
  $(`#${modalId} button, #${modalId} a`).first().focus();
};
const onModalHide = (modalId, btnId) => {
  $(`#${modalId}`).removeClass("active");
  if (btnId) $(`#${btnId}`).focus();
};

$(window).on("load", function () {
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

  // modal
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
      if (e.key === "Escape") {
        $(this).removeClass("active");
      }
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
