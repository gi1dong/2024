window.onload = function(){
  gsap.registerPlugin(ScrollTrigger);
  let screenWidth = $(window).width();
  
  if (screenWidth > 1220) {
    // 화면 크기 1220px 이상일 경우
  $(".centerItemClick").mouseenter(function(){
    $(".menu1>ul>li").addClass("active");
    $("header").addClass("active");
    $(".menuWrap").addClass("active");
    $(".logoImg").addClass("active");
    $(".dimmedBg").addClass("active");
  });
  $("header").mouseleave(function(){
    $(".menu1>ul>li").removeClass("active");
    $("header").removeClass("active");
    $(".menuWrap").removeClass("active");
    $(".logoImg").removeClass("active");
    $(".dimmedBg").removeClass("active");
  });
// 스크롤 내리면 헤더 사라짐
  $(window).scroll(function () {
    const headerNone = $(window).scrollTop();
    const mainStart = $(".section02").offset().top;
    if (headerNone >= mainStart) {$("header").hide();} 
    else {$("header").show();}
  });

 // 상자 호버시 넓이 변화
 let $leftBox = document.querySelector(".leftLayout");
 let $rightBox =document.querySelector(".rightLayout");
 let $rightTop = document.querySelector(".rightTop");
 let $rightBotm = document.querySelector(".rightBottom");
 // left box mouseenter
$leftBox.addEventListener('mouseenter', function mousenterLeft(){
 $leftBox.style.width= "55%";
 $rightBox.style.width= "45%";
});
 // left box mouseleave
$leftBox.addEventListener('mouseleave', function mouseleaveLeft(){
 $leftBox.style.width= "50%";
 $rightBox.style.width= "50%";
});
//  right box top mouseenter
$rightTop.addEventListener('mouseenter', function mouseenterRightT(){
 $leftBox.style.width= "45%";
 $rightBox.style.width= "55%";
 $rightTop.style.transformY = "scale(0.5)";
 $rightBotm.style.transformY = "scale(1)";
});
//  right box top mouseleave
$rightTop.addEventListener('mouseleave', function mouseleaveRightT(){
  $leftBox.style.width= "50%";
  $rightBox.style.width= "50%";
  $rightTop.style.transformY = "scale(1)";
  $rightBotm.style.transformY = "scale(1)";
});
//  right box bottom mouseenter
$rightBotm.addEventListener('mouseenter', function mouseenterRightB(){
 $rightBox.style.width= "55%";
 $leftBox.style.width= "45%";
 $rightTop.style.transformY = "scale(1)";
 $rightBotm.style.transformY = "scale(0.5)";
});
//  right box bottom mouseleave
$rightBotm.addEventListener('mouseleave', function mouseleaveRightB(){
  $rightBox.style.width= "50%";
  $leftBox.style.width= "50%";
  $rightTop.style.transformY = "scale(1)";
  $rightBotm.style.transformY = "scale(1)";
});
  // 상자 호버시 넓이 변화 끝
  } 
  else if (screenWidth >= 980 && screenWidth < 1220)
     {
  // 상자 호버시 넓이 변화
  let $leftBox = document.querySelector(".leftLayout");
  let $rightBox =document.querySelector(".rightLayout");
  let $rightTop = document.querySelector(".rightTop");
  let $rightBotm = document.querySelector(".rightBottom");
  // left box mouseenter
 $leftBox.addEventListener('mouseenter', function mousenterLeft(){
  $leftBox.style.width= "55%";
  $rightBox.style.width= "45%";
 });
  // left box mouseleave
 $leftBox.addEventListener('mouseleave', function mouseleaveLeft(){
  $leftBox.style.width= "50%";
  $rightBox.style.width= "50%";
 });
 //  right box top mouseenter
 $rightTop.addEventListener('mouseenter', function mouseenterRightT(){
  $leftBox.style.width= "45%";
  $rightBox.style.width= "55%";
  $rightTop.style.transformY = "scale(0.5)";
  $rightBotm.style.transformY = "scale(1)";
 });
 //  right box top mouseleave
 $rightTop.addEventListener('mouseleave', function mouseleaveRightT(){
   $leftBox.style.width= "50%";
   $rightBox.style.width= "50%";
   $rightTop.style.transformY = "scale(1)";
   $rightBotm.style.transformY = "scale(1)";
 });
 //  right box bottom mouseenter
 $rightBotm.addEventListener('mouseenter', function mouseenterRightB(){
  $rightBox.style.width= "55%";
  $leftBox.style.width= "45%";
  $rightTop.style.transformY = "scale(1)";
  $rightBotm.style.transformY = "scale(0.5)";
 });
 //  right box bottom mouseleave
 $rightBotm.addEventListener('mouseleave', function mouseleaveRightB(){
   $rightBox.style.width= "50%";
   $leftBox.style.width= "50%";
   $rightTop.style.transformY = "scale(1)";
   $rightBotm.style.transformY = "scale(1)";
 });
   // 상자 호버시 넓이 변화 끝
  // support 영역 박스 3개
/* mo three depth menu */
var menuWrap = {
  click : function (target, speed) {
    var _self = this,
        $target = $(target);
    _self.speed = speed || 500; 
    $target.each(function(){
      if(findChildren($(this))) {
        return;
      }
      $(this).addClass('noDepth');
    });
    function findChildren(obj) {
      return obj.find('> ul').length > 0;
    }
    $target.on('click','a', function(e){
        e.stopPropagation();
        var $this = $(this),
            $depthTarget = $this.next(),
            $siblings = $this.parent().siblings();
      
      $this.parent('li').find('ul li').removeClass('on');
      $siblings.removeClass('on');
      $siblings.find('ul').slideUp(250);
      
      if($depthTarget.css('display') == 'none') {
        _self.activeOn($this);
        $depthTarget.slideDown(_self.speed);
      } else {
        $depthTarget.slideUp(_self.speed);
        _self.activeOff($this);
      }
    })
  },
  activeOff : function($target) {
    $target.parent().removeClass('on');
  },
  activeOn : function($target) {
    $target.parent().addClass('on');
  }
};
// Call lnbUI
$(function(){
  menuWrap.click('.threeDepthMenu li', 500)}(jQuery));
  }
  else
  {
    // mo 
    let $leftBox = document.querySelector(".leftLayout");
    let $rightBox =document.querySelector(".rightLayout");
    $rightBox.style.width= "100%";
    $leftBox.style.width= "100%";

    /* mo three depth menu */
var menuWrap = {
  click : function (target, speed) {
    var _self = this,
        $target = $(target);
    _self.speed = speed || 500; 
    $target.each(function(){
      if(findChildren($(this))) {
        return;
      }
      $(this).addClass('noDepth');
    });
    function findChildren(obj) {
      return obj.find('> ul').length > 0;
    }
    $target.on('click','a', function(e){
        e.stopPropagation();
        var $this = $(this),
            $depthTarget = $this.next(),
            $siblings = $this.parent().siblings();
      $this.parent('li').find('ul li').removeClass('on');
      $siblings.removeClass('on');
      $siblings.find('ul').slideUp(500);
      
      if($depthTarget.css('display') == 'none') {
        _self.activeOn($this);
        $depthTarget.slideDown(_self.speed);
      } else {
        $depthTarget.slideUp(_self.speed);
        _self.activeOff($this);
      }
    })
  },
  activeOff : function($target) {
    $target.parent().removeClass('on');
  },
  activeOn : function($target) {
    $target.parent().addClass('on');
  }
};
// Call lnbUI
$(function(){
  menuWrap.click('.threeDepthMenu li', 500)}(jQuery));
};
// 전체 적용 JS
// 좌측에서부터 나오는 메뉴 닫기 버튼 클릭시 open 클래스 사라지며, 바디 영역 내 y축 스크롤이 생겨라
$(".fullMenu .close").click(function(){
  if ($(".fullMenu").hasClass("open"))
  {
    $(".fullMenu").removeClass("open");
   $(".dimmedBg").removeClass("active");
  }
  else
  {
    $(".fullMenu").addClass("open");
    $(".dimmedBg").addClass("active");
  }
});
 // menuBtn을 클릭시 우측에서부터 바디 전체 넓이 차지하는 메뉴가 열려라
 $(".hamburger").click(function (){
  if ($(".fullMenu").hasClass("open"))
  {
    $(".dimmedBg").removeClass("active");
    $(".fullMenu").removeClass("open");
    // $("body, html").css("background", "transparent");
  }
  else 
  {
    $(".fullMenu").addClass("open");
    $(".dimmedBg").addClass("active");
  }
});
  var section06 = new Swiper(".section06.inner .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    }, 
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".section06.inner .swiper-pagination",
      clickable: true
    },
    breakpoints: {
    1023: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true
  }},
    navigation: {
      nextEl: ".section06.inner .swiper-button-next",
      prevEl: ".section06.inner .swiper-button-prev"
    }
  });
// 탭메뉴
  $(".click>ul>li").click(function(){
    var indexNumber = $(this).index()+1;
    $(".tab div").removeClass("on");
    $("#tab0" + indexNumber).addClass("on");
    $(".click>ul>li").removeClass("on");
    $(this).addClass("on");
    // console.log(indexNumber)
  });
// 탭메뉴 내 엑스 버튼 클릭시 탭메뉴 사라져라
  $("header .productSearchArea .close span").click(function(){
    if($(".productSearchArea").hasClass("on")){
      $(".productSearchArea").removeClass("on");
    }
    else
    {
      $(".productSearchArea").addClass("on");
    }
  });
// news area
  var newsSlide = new Swiper(".section04 .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".section04 .swiper-pagination",
    },
    breakpoints: {
      1280: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
      },
      780: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
          centeredSlides: true
      }
  }
  });
    // 제품찾기 누르면 위에서 아래로 메뉴가 내려와라
  $(".productSearch").click(function(){
    if($(".productSearchArea").hasClass("on"))
    {
      $(".productSearchArea").removeClass("on");
      $(".dimmedBg").removeClass("active");
    }
    else
    {
      $(".productSearchArea").addClass("on");
      $("body .dimmedBg").addClass("active");
    }
  });
  // 패밀리 사이트
  $("footer .ftFamily .siteButton").click(function(){
    if($("footer .ftFamily .familyListWrap").hasClass("open"))
    {
      $("footer .ftFamily .familyListWrap").removeClass("open")
    }
    else
    {
      $("footer .ftFamily .familyListWrap").addClass("open");
    }
  });
  // support 영역 박스 3개
  gsap.to(".boxWrap", {
    scrollTrigger: {
      trigger: ".section03",
      // markers: true,
      start: "top"
    },    stagger: .3, opacity: 1, y: 0, duration: .5
  });
};
