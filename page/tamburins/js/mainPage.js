$(function(){  
  // var path = document.querySelector(".path");
  // var total_length = path.getTotalLength();
        // alert(total_length);
  
     // use a script tag or an external JS file
    document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    });

    // $('#video').click(function showcontrol() {
    //   if(!this.hasAttribute("controls")) {
    //       this.setAttribute("controls", "controls");
    //   }
    // });

    // const disabledVid =document.querySelector('.pc');
    // const moVid =document.querySelector('.mo>.wrap');

    // disabledVid.disabled = true;
    // moVid.disabled = true;

   // screenWidth 따라 차이
  var screenWidth = $(window).width();
    if (screenWidth < 1280) {
    // 1280--------------------------------------------------------------------------------------------------------------------
    // 화면 너비가 1280px보다 작을 때 실행할 코드

    // $("#header").unbind('mouseover  mouseenter mouseout mouseleave');
    // $("#header").unbind('mouseover  mouseenter mouseout mouseleave');
    // $(".category_li.sub").unbind('mouseover  mouseenter mouseout mouseleave');

    var prdImg = new Swiper(".prd-img.mo .mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".prd-img.mo .swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
    autoplay: {
      delay: 2500,
    },
    // on: {
    //   autoplayTimeLeft(s, time, progress) {
    //     progressCircle.style.setProperty("--progress", 1 - progress);
    //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //   }   $('#header').css({background: '#fff', color:'#333', border:'#333'});
    // }
    });

    // store location tab
    $('ul.tab-menu li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tab-menu li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

    }  
    else 
    {

    // 1024--------------------------------------------------------------------------------------------------------------------
    // 화면 너비가 1024px 이상일 때 실행할 코드

    // $(window).scroll(function(){
    //   var sec3Top = $("#header").offset().top;
    //   var sec3Bottom = sec3Top + $("#header").height();
    //   if(this.scrollTop.scrollTop()> 50 ){
    //     $('#header').css({background: '#fff', color:'#1d1d1d', border:'#1d1d1d'});
    //     }
    //   else{
    //     $('#header').css({background: 'transparent', color:'#fff', border:'#fff'});
    //     $('#top').css({background: 'transparent', color:'#fff', border:'#fff'});
    //   }
    // });

    // 마우스 호버 시 header, nav 색상 변경
    // $("#header").hover(
    // function(){ 
    //   // $(".category_li.sub").addClass("active");
    //   // $(".dimmed_bg").addClass("active");
    //   $("#header").addClass("down");
    // });

    // $("#top").mouseenter(
    // function(){
    //   $(".category_li.sub").addClass("active");
    //   $(".dimmed_bg").addClass("active");
    // })

    // $(".category_li.sub").mouseleave(
    // function(){ 
    // $(".category_li.sub").removeClass("active");
    // $(".dimmed_bg").removeClass("active");
    // });

    //best seller 
    var info = new Swiper(".prd-img.pc .mySwiper", {
    breakpoints: {
      1379: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
      },
      759: {
        slidesPerView: 1,
      },
    },
    freeMode: true,
    });

    // 홍보센터
    var prdImg = new Swiper(".prdimg .mySwiper", {
      pagination: {
        el: ".prdimg .swiper-pagination",
      },
      spaceBetween: 40, 
      breakpoints: {
        1379: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 2,
        },
        759: {
          slidesPerView: 1,
        },
      }
    });

    // 영농정보
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

  }

  // aside menu
  $("#right_menu .main_menu_list>.list_items").click(function () {
    idx = $(this).index() + 1;
    $("#right_menu .sub_menu_box>div").removeClass("open");
    if( $("#right_menu .sub_menu_box").hasClass("active")){
      $(".main_menu_list").addClass("disabled");
      // $(".sub_menu_box>div").removeClass("open");
    }
    else{
      $("#right_menu .main_menu_list").removeClass("disabled");
      $("#right_menu .sub_menu_box").addClass("active");
      $("#right_menu #sub0"+idx).addClass("open");
      // $("#sub0"+idx).addClass("open");
      // $("#sub_menu").css({visibility:"hidden", opacity:"0",height:"0" , transition: "opacity ease .5s"});
      // $("#sub0"+idx).css({display:"grid", visibility: "visible", opacity:"1", transition: "opacity ease .5s"});
    }
  });

  var storeSwiper = new Swiper(".store-img .mySwiper", {
    scrollbar: {
      el: ".store-img .swiper-scrollbar",
      hide: true,
    },
  });

$(window).scroll(function(){
  var headWrap = $("#header");
  var offset = $(".prd-info").offset().top;
  var scrollPosition = window.scrollY || window.pageYOffset; 
  
  // console.log(scrollPosition)
  if(scrollPosition > offset ) { //특정 div(#section1)가 있는 곳을 지날 때
    headWrap.addClass("down"); 
     
  } else if(scrollPosition > 850) {  //스크롤이 850 이상에 위치할 때
    headWrap.addClass("down"); 
  } else {  // 그 외
    headWrap.removeClass("down");
  }
  
  });

  var rightMenu = new Swiper(".pc_menu .mySwiper", {
    navigation: {
      nextEl: ".pc_menu .swiper-button-next",
      prevEl: ".pc_menu .swiper-button-prev",
    },
  });

  // 햄버거 클릭 시 메뉴 
  $(" .humbuger, #right_menu .close").click(function () {
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
      // $("#right_menu").stop().animate({ right: 0 }, 200);
    }
  });
  
    // 검색
    $(".hd-wrap .all-menu.sec , .mo-header .search-box").click(function () {
      $(".search_cont").removeClass("active");
  
      if ( $(".search_cont").hasClass("active")) {
        $(".search_cont").removeClass("active");
        $(".dimmed_bg").removeClass("active");
        $(".contents").css({overflow: "auto", height: "100%" });
      } else {
        $(".search_cont").addClass("active");
        $(".dimmed_bg").addClass("active");
        $(".contents").css({overflow: "hidden", height: "100vh" });
        // $("#right_menu").stop().animate({ right: 0 }, 200);
      }
    });

    $(".search_cont .close").click(function () {
      if ( $(".search_cont").hasClass("active")) {
        $(".search_cont").removeClass("active");
        $(".dimmed_bg").removeClass("active");
        $(".contents").css({overflow: "auto", height: "100%" });
      } else {
        $(".search_cont").addClass("active");
        $(".dimmed_bg").addClass("active");
        $(".contents").css({overflow: "hidden", height: "100vh" });
        // $("#right_menu").stop().animate({ right: 0 }, 200);
      }
    });

  // 뒤로 가기 버튼
  $(".back_btn").click(function () {
      $(".main_menu_list").removeClass("disabled");
      $(".sub_menu_box").removeClass("active");
      // $(".sub_menu_box").css({visibility: "hidden", right:"-100%", height:"0",  opacity:"0", transition: "opacity ease .5s"});
      // $("#sub0"+idx).css({visibility: "hidden", height:"0", opacity:"0", transition: "opacity ease .5s" });
  });

  // 팝업 스토어 영역
  // if($(document).find('.object-fit').length > 0){    
  //   var objectFitImg = new App.ObjectFit();
  //   objectFitImg.init('.object-fit');
  // }  

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

  var rightSwiper = new Swiper(".right .mySwiper", {
    loop: true,
    slidesPerView: 2,
    autoplay: {
      delay: 4500,
    },
    breakpoints: {
      1379: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 2,
      },
      759: {
        slidesPerView: 2,
      },
    },
    freeMode: true,
    watchSlidesProgress: true,
  });
  
  var leftSwiper2 = new Swiper(".left .mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".left .swiper-button-next",
      prevEl: ".left .swiper-button-prev",
    }, 
  thumbs: {
      swiper: rightSwiper,
    },
  });
  
  // 헤더 내 언어
  $("header .kor").click(function () {
    var hei = $(this).parent().find("ul").outerHeight(); 

    if ($("header .wrap").hasClass("open")) {
      $(".wrap").removeClass("open");
      $(".kor").parent().find("div").stop().animate({ height: "0" });
    } else {
      $("header .wrap").addClass("open");
      $(".kor").parent().find("div").stop().animate({ height: hei });
    }
    });

  $("footer .kor").click(function () {
    var hei2 = $(this).parent().find("ul").outerHeight(); 

    if ($("footer .wrap").hasClass("open")) {
      $(".wrap").removeClass("open");
      $(".triangle").removeClass("up");
      $(".kor").parent().find("div").stop().animate({ height: "0" });
      $(".triangle").addClass("down");
    } else {
      $("footer .wrap").addClass("open");
      $(".triangle").removeClass("down");
      $(".triangle").addClass("up");
      $(".kor").parent().find("div").stop().animate({ height: hei2 });
    }
  });

  window.onload = function() {
    // URL의 앵커를 가져옵니다.
    var hash = window.location.hash;
    // 앵커가 존재하는 경우 해당 앵커로 자동으로 이동합니다.
    if (hash) {
    var element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // 스크롤 부드럽게 이동
    }
    }
  };

  $("#go-bottom span").click(function(){
    $('html, body').scrollTop( $(document).height() );
  });
    
});
