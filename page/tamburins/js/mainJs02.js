$(function(){
    // 햄버거 클릭 시 메뉴 
    $(".humbuger,.close_btn").click(function () {
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
      slidesPerView: 1.4,
      spaceBetween: 10,
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
  


  // 스크롤에 따른 header 배경, 네비 색상 변경
    $(window).scroll(function(){
      
      // e: Touch Object
      const offset = e.target.getBoundingClientRect()
      const offsetX = e.touches[0].clientX - offset.x
      const offsetY = e.touches[0].clientY - offset.y
      
      var secTop = $("#header").offset().top;
      var sec3Bottom = secTop + $(".main-vis").height();
  
      if(offsetY > secTop /* && $(this).scrollTop() < sec3Bottom */){
        $('#header').css({background: '#fff', color:'#333', border:'#333'});
      }else{
        $('#header').css({background: 'transparent', color:'#fff', border:'#fff'});
      }
    })

    // 마우스 호버 시 header, nav 색상 변경
  $(document).ready(function(){
      $("#header").hover(
      function(){  $(".category_li.sub").slideDown(1000)});
      
      $(".category_li").mouseleave(
      function(){ 
        $(".category_li.sub").slideUp(1000); 
        $("#header").css({background:'transparent'},{color:'#333'});
      }
      )
  });

  // 마우스 호버 시 슬라이드 네비
  $(document).ready(function(){
    $(".category_li.sub").hover(
    function(){  $("#header").css('background','#fff')})
    $("#header").mouseleave(
    function(){ $(".category_li.sub").slideUp(1000);}
    )
  });

});

$(function(){
  var $header = $('#header'); //헤더를 변수에 넣기
  var $page = $('.prd-info '); //색상이 변할 부분
  var $window = $(window);
  var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
  
  $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    pageOffsetTop = $page.offset().top;
  });
  
  $window.on('scroll', function(){ //스크롤시
    var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
    $header.toggleClass('down', scrolled); //클래스 토글
  });
  
});


