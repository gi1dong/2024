window.onload = function(){
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
      //  function mainTxt(){ TweenMax.staggerFromTo(".txt02 i", 1,{opacity:0},{opacity:1}, 0.5);
      // }
      myTween2 = new TweenMax.to('.box2', 2, {opacity:1},{repeat:-1},{yoyo:true},{paused:true});
    myTween2.resume();
 
        var mainSWiper = new Swiper(".main_area .swiper-container", {
        direction: "vertical",
        speed: 800,
        loop: true,
        mousewheel: {
          invert: false
        },
        pagination: {
          el: ".main_area>.swiper-pagination",
          type: "fraction"
          },
          navigation: {
          nextEl: ".main_area .next_btn",
          prevEl: ".main_area .prev_btn"
          }
        });
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
        var cafe24Section03 = new Swiper(".section03 .mySwiper", {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          scrollbar: {
            el: ".section03 .swiper-scrollbar",
            hide: false
          },
          breakpoints: {
            1300: {
              slidesPerView: 4.5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            680: {
              slidesPerView: 2,
              centeredSlides: true,
              spaceBetween: 30
            },
            450: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 0
            }
          }
        });
        // aseop
        $(window).scroll(function(){
          let videoTop = $('.section04').offset().top;
          let video = $("video");
          if( $(document).scrollTop() > videoTop ){
          video.get(0).play();
          }
        });

          // header color change
  $(window).scroll(function(){
    var headWrap = $(".header");

    //현재문서의 전체높이
    // 그럼 현재스크롤바의 퍼센테이지를 구해내는 함수는 다음과같이 정의할수있다 .
    
    // function colorChang(){
    // return ((scrollVal +scrollH) / (scrollBody * 100))
    // };


    // if(scrollVal>scrollH||scrollVal>scrollBody){
    //   headWrap.addClass("open"); 
    // }else{
    //   headWrap.removeClass("open");
    // }
  });
}
