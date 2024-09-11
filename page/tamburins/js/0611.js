document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  });
window.onload = function(){
    // page layout 
    const main = function (){
      // URL의 앵커를 가져옵니다.
      var hash = window.location.hash;
      // 앵커가 존재하는 경우 해당 앵커로 자동으로 이동합니다.
      if (hash) {
      var element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // 스크롤 부드럽게 이동
      }
      }
    }
    main();

    // header kor
    $("#header .kor").click(function () {
      var hei = $(this).parent().find("ul").outerHeight(); 
      if ($("#header .wrap").hasClass("open")) {
        $(".wrap").removeClass("open");
        $(".kor").parent().find("div").stop().animate({ height: 0 });
      } else {
        $("#header .wrap").addClass("open");
        $(".kor").parent().find("div").stop().animate({ height: hei });
      }
      });

    $("footer .kor").click(function () {
      var hei2 = $(this).parent().find("ul").outerHeight(); 
      if ($("footer .wrap").hasClass("open")) {
        $("footer .wrap").removeClass("open");
        $("footer .triangle").removeClass("up");
        $("footer .kor").parent().find("div").stop().animate({ height: "0" });
        $("footer .triangle").addClass("down");
      } else {
        $("footer .wrap").addClass("open");
        $("footer .triangle").removeClass("down");
        $("footer .triangle").addClass("up");
        $("footer .kor").parent().find("div").stop().animate({ height: hei2 });
      }
    });
  
// 비디오
    $('#video').click(function showcontrol() {
      if(!this.hasAttribute("controls")) {
        this.setAttribute("controls", "controls");
      }
    });
    
  // store location tab
  $('ul.tab-menu li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tab-menu li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });
  $("#go-bottom span").click(function(){
    $('html, body').scrollTop( $(document).height() );
  });
  var storeSwiper = new Swiper(".tab_img .mySwiper", {
    scrollbar: {
      el: ".tab_img .swiper-scrollbar",
      hide: false
    }
  });
    // 상품 이미지 카드 영역
    $(".flip").each(function () {
      shadowEff = gsap.timeline({
          scrollTrigger: {
            trigger: ".farming-wrap",
            start: "top center",
          },
          boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.67)",
        })
        .to(this, {
          boxShadow: "5px 2px 15px 2px rgba(0, 0, 0, 0.3)",
          delay: $(this).data("d"),
        })
        .to(this, {
          boxShadow: "5px 2px 15px 2px rgba(0, 0, 0, 0)",
        })
      });

   // screenWidth 따라 차이
  let screenWidth = $(window).width();
    if (screenWidth < 1280) {
    // 1280--------------------------------------------------------------------------------------------------------------------
    // 화면 너비가 1280px보다 작을 때 실행할 코드
    
    // aside menu
    $(".main_menu_list>.list_items").click(function () {
      idx = $(this).index() + 1;
      $(".sub_menu_box>div").removeClass("open");
      if( $(".sub_menu_box").hasClass("active")){
        $(".main_menu_list").addClass("disabled");
        // $(".sub_menu_box>div").removeClass("open");
      }
      else{
        $(".main_menu_list").removeClass("disabled");
        $(".sub_menu_box").addClass("active");
        $("#sub0"+idx).addClass("open");
      }
    });

    // 햄버거 클릭 시 메뉴 
    $(" .humbuger, .close").click(function () {
      $(".main_menu_list").removeClass("disabled");
      $(".sub_menu_box").removeClass("active");
      $(".sub_menu").addClass("open");

      if ( $("#right_menu").hasClass("active")) {
        $("#right_menu").removeClass("active");
        $(".dimmed_bg").removeClass("active");
        $(".contents").css({overflow: "auto", height: "100%" });
      } else {
        $("#right_menu").addClass("active");
        $(".dimmed_bg").addClass("active");
        $(".contents").css({overflow: "hidden", height: "100vh" });
      }
    });
    // 뒤로 가기 버튼
    $(".back_btn").click(function () {
        $(".main_menu_list").removeClass("disabled");
        $(".sub_menu_box").removeClass("active");
    });
    var prdImg = new Swiper(".prd-img.mo .mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".prd-img.mo .swiper-pagination",
      clickable: true,
      type: "progressbar"
    },
    autoplay: {
      delay: 2500,
    }
    });
    // store location tab
    $('ul.tab-menu li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('ul.tab-menu li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    });
    }  
    else 
    {
    // pc 1024--------------------------------------------------------------------------------------------------------------------
    // 화면 너비가 1024px 이상일 때 실행할 코드
    $(".kor").click(function () {
    var hei = $(this).parent().find("ul").outerHeight(); 
    if ($(".wrap").hasClass("open")) {
      $(".wrap").removeClass("open");
      $(".kor").parent().find("div").stop().animate({ height: "0" });
    } else {
      $(".wrap").addClass("open");
      $(".kor").parent().find("div").stop().animate({ height: hei });
    }
    });
    //best seller 
    var info = new Swiper(".prd-img.pc .mySwiper", {
      breakpoints: {
        1379: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        759: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      freeMode: true
    });
    // 홍보센터
    var prdImg = new Swiper(".prdimg .mySwiper", {
      pagination: {
        el: ".prdimg .swiper-pagination"
      },
      spaceBetween: 40, 
      breakpoints: {
        1379: {
          slidesPerView: 4
        },
        1024: {
          slidesPerView: 2
        },
        759: {
          slidesPerView: 1
        }
      }
    });
    // 영농정보
    $(".flip").each(function () {
    shadowEff = gsap.timeline({
        scrollTrigger: {
          trigger: ".farming-wrap",
          start: "top center"
        },
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.67)"
      })
      .to(this, {
        boxShadow: "5px 2px 15px 2px rgba(0, 0, 0, 0.3)",
        delay: $(this).data("d")
      })
      .to(this, {
        boxShadow: "5px 2px 15px 2px rgba(0, 0, 0, 0)"
      })
    });
    $(".ftbtn a").click(function(){
    if(($(this).hasClass("on")) && ($(".ftmore-pageul").hasClass("on"))){
      $(this).removeClass("on");
      $(".ftbtn a::after").hide();
      $(".ftmore-pageul").removeClass("on");}else{
        $(this).addClass("on"); 
        $(".ftbtn a::after").show();
      $(".ftmore-pageul").addClass("on");}
    });
    }
    // width 따라 다르게 적용 js 끝

  // 신상품 
  var experience = new Swiper(".new-launch-prd .mySwiper.prd-slide", {
    slidesPerView: 1,
    autoplay: {
      loop: true, 
      effect:'fade',
      direction: "vertical",
      delay: 3200,
      disableOnInteraction: false 
    },
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: ".new-launch-prd .swiper-pagination",
      clickable: true
    }
  });
  // loop slide 한정 특가 영역
  function loopSlide()  {
        $('.loop.swiper').each(function(index) {
        t = $(this);
        t.addClass('swiepr-' + index);
        let swiperLoop = new Swiper( t, {
        autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
        },
        speed: 5000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 5,
        breakpoints: {
          1379: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          759: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      });
    })
  }
  loopSlide();

  // header color change
  $(window).scroll(function(){
    var headWrap = $("#header");
    var headWrapMo = $(".mo-header");
    const scrollVal = window.scrollY;
    //현재 스크롤된값
    const scrollH =   window.innerHeight;
    //현재보여지는 viewport 높이
    const scrollBody =  window.clientHeight;
    //현재문서의 전체높이
    // 그럼 현재스크롤바의 퍼센테이지를 구해내는 함수는 다음과같이 정의할수있다 .
    
    // function colorChang(){
    // return ((scrollVal +scrollH) / (scrollBody * 100))
    // };
    if(scrollVal>scrollH||scrollVal>scrollBody){
      headWrap.addClass("down"); 
      headWrapMo.addClass("down"); 

    }else{
      headWrapMo.removeClass("down");
      headWrap.removeClass("down");
    }
  });
}


