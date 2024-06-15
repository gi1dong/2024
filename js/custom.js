$(function(){

  $(".menu_btn").click(function(){
    if ($(".menu_btn").hasClass("open")) {
      $(this).removeClass("open");
      $(".aside").removeClass("open");
      $(".logo").removeClass("open");
      // $(".aside nav .nav_inner>li").removeClass("selected");
        $(".dimed").stop().animate({right: "-100%" }, 300);
    } else {
      $(this).addClass("open");
      $(".aside").addClass("open");
      $(".logo").addClass("open");
      // $(".aside nav .nav_inner>li").addClass("selected");
      $(".dimed").stop().animate({ right: "0" }, 300);
    }
  // if($(this).hasClass("open")){
  //   $(".menu_bg").animate({"left":"-100%"},500);
  //   $(".menu_btn").removeClass("open");
  // }else{
  //   $(".menu_bg").animate({"left":"0"},500);
  //   $(".menu_btn").addClass("open");
  // }
  });

  // $(".gnb	li").hover(function(){
  //   $(".gnb	li").addClass("no_active")
  // $(this).addClass("active")
  // $(".sub_menu").addClass("on")
  // }, function(){
  //   $(".gnb	li").removeClass("active")
  // $(this).removeClass("active")
  // $(".sub_menu").removeClass("on")
  //   });
// 메인 swiper
  var swiper = new Swiper(".main_area>.swiper-container", {
  direction: "vertical",
  speed: 800,
  loop: true,
  pagination: {
    el: ".main_area>.swiper-pagination",
    type: "fraction",
    },
    navigation: {
    nextEl: ".main_area>.next_btn",
    prevEl: ".main_area>.prev_btn",
    },
    mousewheel: {
      invert: false,
    },
  });

  // $(".gnb ul li").click(function(){
  // swiper.slideTo($(this).index());
  //   $(".menu_bg").animate({"left":"-100%"},500);
  // $(".menu_btn").removeClass("open");
  // });

  // $(".gnb>ul>li>a").click(function(){
  //   // swiper.slideTo($(this).index());
  //   const showSubmenu =$(this).parent().find("ul").outerHeight();
  //   if($(this).hasClass("on"))
  //   { 
  //     $(this).removeClass("on");
  //     $(this).parent().find("div").stop().animate({ height: "0" });
  //   }else{
  //     $(".sub_menu").stop().animate({ height:"0"});
  //   $(this).addClass("on");
  //   $(this).parent().find("div").stop().animate({ height : showSubmenu });
  //   }
  //   });
  
TweenMax.staggerFromTo(".txt02 i", 1, {opacity:0, y:-10},{opacity:1,y:0}, 0.9);
  
  // slidesPerView: "auto",
  // spaceBetween: 30,
  // freeMode: true,
  // mousewheel: {
  //   invert: false,
  // },
  // autoplay: {
  //   speed: 1000,
  //   delay:2500,
  //   disableOnInteraction: false,
  // },

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

  var cafe24Swiper = new Swiper(".section03 .mySwiper.cafe24 ", {
    spaceBetween: 30,
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 3500,
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

  
  
//   $('#loading').hide();
//   $(".sub_menu li>a").click(function(){
//     setTimeout(function(){
//       $('#loading').show();
//       $('#loading').fadeOut(600);
//     })
//   return true;
// });

});

  
// var swiperOptions = {
//   loop: true,
//   autoplay: {
//   delay: 1,
//   speed: 1000,
//   disableOnInteraction: false},
//   slidesPerView: "auto",
//   speed: 15000,
//   grabCursor: true,
//     spaceBetween: 30,
//   mousewheelControl: true,
//   keyboardControl: true,
// };

// var project = new Swiper(".swiper-slide.section03 .main_intro_wrap .swiper-container.cafe24 ", swiperOptions);

 
// function Loading() {
//   var maskHeight = $(document).height();
//   var maskWidth  = window.document.body.clientWidth;
   
//   var mask       = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
//   var loadingImg ='';
   
//   loadingImg +=" <div id='loadingImg'>";
//   loadingImg +=" <img src='${pageContext.request.contextPath}/img/Spinner2.gif' style='position:absolute; z-index:9500; text-align:center; display:block; margin-top:300px; margin-left:750px;'/>";
//   loadingImg += "</div>";  

//   $('body')
//       .append(mask)

//   $('#mask').css({
//           'width' : maskWidth,
//           'height': maskHeight,
//           'opacity' :'0.3'
//   });
  
//   $('#mask').show();

//   $('.loadingImg').append(loadingImg);
//   $('#loadingImg').show();
// }

// function closeLoading() {
//   $('#mask, #loadingImg').hide();
//   $('#mask, #loadingImg').remove(); 
// }

// $(function() {

// Loading();	
// setTimeout("closeLoading()", 3000);

// });

// console.clear();

// gsap.registerPlugin(MorphSVGPlugin);

// const original = gsap.utils.toArray("#original path");
// const morphStretched = gsap.utils.toArray("#morph-stretched path");
// const morphStretchedBold = gsap.utils.toArray("#morph-stretched-bold path");
// const morphStretchedBolder = gsap.utils.toArray("#morph-stretched-bolder path");

// gsap
//   .timeline({
//   repeat: -1,
//   repeatDelay: 0.2,
//   defaults: {
//     duration: 1.5,
//     ease: "elastic.inOut",
//     stagger: 0.1,
//     delay: 0.05,
//   }
// })
//   .to("#original path", {
//   morphSVG: (i) => morphStretched[i]
// })
//   .to("#original path", {
//   stagger: 0.04,
//   morphSVG: (i) => morphStretchedBold[i]
// })
//   .to("#original path", {
//   stagger: 0.08,
//   morphSVG: (i) => morphStretchedBolder[i]
// })
//   .to("#original path", {
//   stagger: 0.08,
//   morphSVG: (i) => original[i]
// });