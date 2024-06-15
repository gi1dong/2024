$(function(){  
    
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
        // $("#sub0"+idx).addClass("open");
        // $("#sub_menu").css({visibility:"hidden", opacity:"0",height:"0" , transition: "opacity ease .5s"});
        // $("#sub0"+idx).css({display:"grid", visibility: "visible", opacity:"1", transition: "opacity ease .5s"});
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

    var storeSwiper = new Swiper(".store-img .mySwiper", {
      scrollbar: {
        el: ".store-img .swiper-scrollbar",
        hide: true,
      },
    });

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

    // 헤더 내 언어
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

});
  // $(window).scroll(function(){
  // const conBox = document.querySelector('.contents');
  // const headBox = document.getElementById('header');

  // conBox.addEventListener('scroll', function() {
  //   headBox.innerText = this.scrollTop;
  //   if(this.scrollTop > 10 ){
  //     $('#header').css({background: '#fff', color:'#333', border:'#333'});
  //     }
  //   else{
  //     $('#header').css({background: 'transparent', color:'#fff', border:'#fff'});
  //     $('#top').css({background: 'transparent', color:'#fff', border:'#fff'});
  //       }
  //   })


  // })
  


$(function(){
  var headHeight = $('#header').offset().top; //헤더를 변수에 넣기
  var $page = $('.prd-info'); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기, - 문서 끝부터 선택한 요소까지의 거리
  var scrolled = $window.scrollTop()

  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  // $window.on('scroll', function(){ //스크롤시
  //   if(headHeight> ){

  //   }
  //   >= pageOffsetTop; //스크롤된 상태; true or false
  //   $header.toggleClass('down', scrolled); //클래스 토글
  // });
  const element = document.getElementsByClassName('#header');
  const height = element.offsetHeight;
console.log('높이:', height, '픽셀');
});





  // // $window.on("scroll", function(){ //스크롤시
  // window.addEventListener('scroll', function() {
  //   // 마우스 호버 시 슬라이드 네비
  //   let headerTop = $("#header"); //헤더를 변수에 넣기
  //   let changeColor = $(".prd-info "); //색상이 변할 부분
  //   // let windowView = $(window);
  //   let pageOffsetTop = changeColor.offset().top;//색상 변할 부분의 top값 구하기

  //   // var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
  //   // $header.toggleClass("down", scrolled); //클래스 토글

  //   if($header.scrollTop()> pageOffsetTop ){
  //     $header.addClass("down")
  //     console.log('sadiufhwuis')
  //   }else{
  //     $header.removeClass("down")
  //   }
  // });

