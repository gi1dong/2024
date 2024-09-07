window.onload = function(){
    document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    });
    $('#video').click(function showcontrol() {
      if(!this.hasAttribute("controls")) {
          this.setAttribute("controls", "controls");
      }
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
    })

    var storeSwiper = new Swiper(".store-img .mySwiper", {
      scrollbar: {
        el: ".store-img .swiper-scrollbar",
        hide: true
      },
    });
    }  
    else 
    {
    // 1024--------------------------------------------------------------------------------------------------------------------
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

  // 신상품 
  var experience = new Swiper(".new-launch-prd .mySwiper.prd-slide", {
    direction: "vertical",
    slidesPerView: 1,
    autoplay: {
      delay: 5500,
    },
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".new-launch-prd .swiper-pagination",
      clickable: true,
    },
  });
 }
  var headHeight = $('#header').offset().top; //헤더를 변수에 넣기
  var $page = $('.prd-info'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기, - 문서 끝부터 선택한 요소까지의 거리
  var scrolled = $window.scrollTop();
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  const element = document.getElementsByClassName('#header');
  const height = element.offsetHeight;
});
};
