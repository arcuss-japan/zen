$(function () {
  $(".btn-trigger").on("click", function () {
    $(this).toggleClass("active");
    $(".l-header-menu").fadeToggle();
    return false;
  });
});
$('a[href*="#"]').on("click", function () {
  $(".l-header-menu").fadeOut();
});

const breakPoint = 768;
let mySwiper;
let mySwiper2;

window.addEventListener(
  "load",
  () => {
    if (breakPoint > window.innerWidth) {
      mySwiper = false;

      createSwiper2();
      mySwiper2 = true;
    } else {
      createSwiper();
      mySwiper = true;

      mySwiper2 = false;
    }
  },
  false
);

const createSwiper = () => {
  mySwiper = new Swiper(".p-top-mainVisual__slide", {
    slidesPerView: 1,
    loop: true,
    speed: 1000, // 少しゆっくり(デフォルトは300)
    autoplay: {
      // 自動再生
      delay: 1500, // 1.5秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
const createSwiper2 = () => {
  mySwiper2 = new Swiper(".p-top-sec2__listWrap", {
    slidesPerView: 1.1,
    spaceBetween: 6,
    centeredSlides: true,
  });
};

const thumbnail = new Swiper(".thumbnail", {
  slidesPerView: 1,
  autoHeight: true,
  allowTouchMove: false,
  effect: "fade",
  lazy: true,
  fadeEffect: {
    crossFade: true,
  },
});

const swiper2 = new Swiper(".menu-slider", {
  slidesPerView: 1.5,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
  centeredSlides: true,
  spaceBetween: 30,
  lazy: true,

  pagination: {
    //ページネーション（ドット）
    el: ".swiper-pagination1",
    clickable: true,
  },
  navigation: {
    //ナビゲーション（矢印）
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  controller: {
    control: thumbnail,
    inverse: false,
    by: "slide",
  },
});

thumbnail.controller.control = swiper2;

$(function () {
  var topBtn = $("#page_top");

  //ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      // 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    } else {
      // 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "ja",
      layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
    },
    "google_translate_element"
  );
}

$(".lang-select").click(function () {
  var lang = $(this).attr("data-lang");
  window.location = $(this).attr("href");
  location.reload();
});

$("#translate").click(function () {
  $(".lang-list").toggle();
});
