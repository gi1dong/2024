$(function(){
  $(".menu_btn").click(function(){
    if ($(".menu_btn").hasClass("open") && $(".aside").hasClass("open")) {
      $(this).removeClass("open");
      $(".aside").removeClass("open");
      $(".nav_inner>li>a").removeClass("selected");
      $(".nav_inner>li>a").parent().find("div").stop().animate({ height: "0" });
      $(".nav_inner>li>a .arrow::after").css({transform:"rotate(135deg)"})
      $(".logo").removeClass("open");
      $(".dimed").stop().animate({right: "-100%" }, 300);
    } else {
      $(this).addClass("open");
      $(".aside").addClass("open");
      $(".logo").addClass("open");
      $(".dimed").stop().animate({ right: "0" }, 300);
    }
  });
// 메인 swiper
  const mainSWiper = new Swiper(".main_area .swiper-container", {
  direction: "vertical",
  mousewheel: {
    invert: false,
  },
  speed: 800,
  loop: true,
  pagination: {
    el: ".main_area>.swiper-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".main_area .next_btn",
    prevEl: ".main_area .prev_btn",
    },
  });
TweenMax.staggerFromTo(".txt02 i", 1, {opacity:0, y:-10},{opacity:1,y:0}, 0.9);
  // 메뉴
  $(".aside nav .nav_inner>li>a").click(function () {
    const showSubmenu =$(this).parent().find("ul").outerHeight();
    if($(this).hasClass("selected"))
    {         
      $(this).removeClass("selected");
      $(this).parent().find("div").stop().animate({ height: "0" });
    }else{        
      $(".sub_menu").stop().animate({ height:"0"});
      $(".aside nav .nav_inner>li>a").removeClass("selected");
      $(this).addClass("selected");
      $(this).parent().find("div").stop().animate({ height : showSubmenu });
    }
  });
  const cafe24Swiper = new Swiper(".section03 .mySwiper.cafe24 ", {
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".section03 .swiper-button-next",
      prevEl: ".section03 .swiper-button-prev",
    },
    // centeredSlides: true,
    loop: true,
    pagination: {
      el: ".section03 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  const section11 = new Swiper(".explain_img .mySwiper.swiper", {
    slidesPerView: "auto",
    loop:true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    spaceBetween: 0,
    speed: 5000,
  });
  // aseop
  $(window).scroll(function(){
    const videoTop = $('.section04').offset().top;
    const video = $("video");
    if( $(document).scrollTop() > videoTop ){
    video.get(0).play();
    }
  });
// aside menu 꽃중년
  $(".flower_middle").click(function(){
    $(".aside").removeClass("open");
    $(".menu_btn").removeClass("open");
    $(".nav_inner>li>a").removeClass("selected");
    $(".nav_inner>li>a").parent().find("div").stop().animate({ height: "0" });
    $(".nav_inner>li>a .arrow::after").css({transform:"rotate(135deg)"})
    $(".logo").removeClass("open");
    $(".dimed").stop().animate({right: "-100%" }, 300);
  });
});
