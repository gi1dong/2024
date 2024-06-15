


  // document.getElementsByTagName("video").load();
  // document.getElementsByTagName("video").play();
  // document.getElementsByTagName("video").pause();
$(function(){
// header 배경, 네비 색상 변경
// $(window).scroll(function(){
//   var sec3Top = $("#header").offset().top;
//   var sec3Bottom = sec3Top + $("#header").height();
  
//   if($(this).scrollTop()> 50 ){
//     $('#header').css({background: '#fff', color:'#333', border:'#333'});
//     $('#top').css({background: '#fff', color:'#333', border:'#333'});
//     }
//   else{
//     $('#header').css({background: 'transparent', color:'#fff', border:'#fff'});
//     $('#top').css({background: 'transparent', color:'#fff', border:'#fff'});
//       }
// })

// $('#headr').mouseover(function(){
//   $('#header').addClass("active");
//   $(".category_li.sub").addClass('open');
// });

// $('#headr').mouseleave(function(){
//   $('#header').addClass("active");
//   $(".category_li.sub").removeClass('open');
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

  // 스크롤 시 header fade-in
  // $(document).on('scroll', function(){
  // if($(window).scrollTop() > 50){
  //   $("#header").removeClass("deactive");
  //     $("#header").addClass("active");
  // }else{
  //     $("#header").removeClass("active");
  //     $("#header").addClass("deactive");
  // }
  // });

  // 햄버거 클릭 시 메뉴 
  $(".humbuger, .close").click(function () {
    $(".main_menu_list").removeClass("on");

    $(".sub_menu_box").css({visibility: 'hidden', opacity:'0', transition: 'opacity ease .5s' });
    $("div[class^=sub_menu0]").css({visibility: 'hidden', height:'0', opacity:'0', transition: 'opacity ease .5s'});

    if ( $("#right_menu").hasClass("active")) {
      $("#right_menu").removeClass("active");
      $('.dimmed_bg').removeClass("active");
      $(".contents").css({overflow: 'unset', height: '100%' });
    } else {
      $("#right_menu").addClass("active");
      $('.dimmed_bg').addClass("active");
      $(".contents").css({overflow: 'hidden', height: '100vh' });
      // $("#right_menu").stop().animate({ right: 0 }, 200);
    }
  });

  // aside menu 활성화 시 스크롤 비활성화
  // if(("#right_menu").hasClass("active")){
  //   $(html).css({overflow: 'hidden', height: '100%' });
  // }else{
  //   $(html).css({overflow: 'hidden', height: '100%' });
  // }

 // aside menu
  $(".main_menu_list>li").click(function () {
    idx = $(this).index() + 1;

    if( $(".main_menu_list").hasClass("on")){
      // $(".main_menu_list>li").css('display','none');
      $(".main_menu_list").removeClass("on");
      $(this).addClass("on");
      $(".sub_menu_box").css({visibility: 'hidden', opacity:'0', transition: 'opacity ease .5s' });
      $("div[class^=sub_menu0]").css({visibility: 'hidden', height:'0', opacity:'0', transition: 'opacity ease .5s'});
}
    else{
      $(".sub_menu_box").css({visibility: 'visible' , right:'0', opacity:'1', transition: 'opacity ease .5s' });
      $(".sub_menu0"+idx).css({visibility: 'visible', right:'0', height:'100%', opacity:'1', transition: 'opacity ease .5s' });
    }
  });

  $(".back_btn").click(function () {
      $(".main_menu_list").removeClass("on");
      $(".sub_menu_box").css({visibility: 'hidden', right:'-100%',  opacity:'0', transition: 'opacity ease .5s'});
      $(".sub_menu0"+idx).css({visibility: 'hidden', right:'-100%', height:'0', opacity:'0', transition: 'opacity ease .5s' });
  });

  // 메인 비주얼 pc
  var mainVis = new Swiper(".main-vis .swiper-container", {
    pagination: {
      el: ".main-vis .swiper-pagination",
    },
  });

    // 메인 비주얼 mo
  var mainMo = new Swiper(".vid_mo .mySwiper", {
    pagination: {
      el: ".vid_mo .swiper-pagination",
    },
  });

  // 제품 정보
  var info = new Swiper(".prd-img .mySwiper", {
    breakpoints: {
      1379: {
        slidesPerView: 1.4,
        spaceBetween: 10,
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
  var prdImg = new Swiper('.prdimg .mySwiper', {
    pagination: {
      el: '.prdimg .swiper-pagination',
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

  // 신상품
  $('.itemWrap').mouseover(function(){
  $(this).css('opacity','1');
    $('.itemWrap:not(:hover)').css('opacity','0.4');});
    $('.itemWrap').mouseout(function(){
    $('.itemWrap').css({'opacity':'1'});
  });

  $('.itemWrap').mouseover(function(){
    $(this).css('transform','scale(1)');
    $('.itemWrap:not(:hover)').css('transform','scale(0.88)');});
    $('.itemWrap').mouseout(function(){
    $(this).css('transform','scale(0.88)');
  });

  var newPrd = new Swiper(".new-product .mySwiper",{
    slidesPerView: 1,
    slidesPerColumn: 2,
    grid: {
      rows: 1,
    },
 slidesPerColumnFill: "row",
//  slidesPerGroup: 1,
    spaceBetween: 0,
    pagination: {
      el: '.new-product .swiper-pagination',
      clickable: true,
    },
  });
  
  // 영농정보
  $('.flip').each(function () {
    shadowEff = gsap.timeline({
        scrollTrigger: {
          trigger: '.farming-wrap',
          start: 'top center',
        },
        // boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.67)',
      })
      .to(this, {
        boxShadow: '5px 2px 15px 2px rgba(0, 0, 0, 0.3)',
        delay: $(this).data('d'),
      })
      .to(this, {
        boxShadow: '5px 2px 15px 2px rgba(0, 0, 0, 0)',
      })
  });

  $('.ftbtn a').click(function(){
    if(($(this).hasClass('on')) && ($('.ftmore-pageul').hasClass('on'))){
      $(this).removeClass('on');
      $('.ftbtn a::after').hide();
      $('.ftmore-pageul').removeClass('on');}else{
        $(this).addClass('on'); 
        $('.ftbtn a::after').show();
      $('.ftmore-pageul').addClass('on');}
    });
  });