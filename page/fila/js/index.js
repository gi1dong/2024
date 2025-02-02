(function() {
  var main_vis = new Swiper(".main_vis .mySwiper", {
    speed:800,
    effect:"fade",
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".main_vis .swiper-button-next",
      prevEl: ".main_vis .swiper-button-prev",
    },
    pagination: {
      el: ".main_vis .swiper-pagination",
      clickable: false
    }
  });

  $(".swiper-control").click(function () {
    if ($(this).hasClass("hi")) {
      $(this).removeClass("hi");
      main_vis.autoplay.start();
      return false;
    } else {
      $(this).addClass("hi");
      main_vis.autoplay.stop();
      return false;
    }
  });

  // $(".main_vis .swiper-control").click(function () {
  //   return false;
  //   });

  /* 인기상품 영역*/
  var product = new Swiper(".product .mySwiper", {
  autoplay: {
  delay: 2600,
  disableOnInteraction: true,
    loop: true,
    autoHeight: true,
  },
    pagination: {
      el: ".product .swiper-pagination.show",
    }
  });

  /*스와이퍼 슬라이드 재생 멈춤 기능*/
  $(".product .stop").click(function () {
    product.autoplay.stop();
    return false;
  });
  $(".product .play").click(function () {
    product.autoplay.start();
    return false;
  });

  $(".menu_3").click(function () {
    $(this).addClass("on");
  });
  var ft_info = new Swiper(".ft_info .mySwiper", {
    loop: false,
    slidesPerView: "1",
    spaceBetween: 6,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  // tab menu men
  var categoryMen = new Swiper(".category_tab .mySwiper.men", {
    pagination: {
      el: ".mySwiper.men .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    }
  });
  // tab menu women
  var categoryWomen = new Swiper(".category_tab .mySwiper.women", {
    pagination: {
      el: ".mySwiper.women .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }
  });
  /*tab menu area*/
  $(".tab> ul> li").click(function () {
    idx = $(this).index() + 1;
    $(".con div").removeClass("on");
    $("#cont0" + idx).addClass("on");
    $(".tab> ul> li").removeClass("on");
    $(this).addClass("on");
  });

// awards_tab
  var awards_tab = new Swiper(".awards_tab .mySwiper", {
    slidesPerView: 2.3,
    spaceBetween: 30,
    clickable: true,
    pagination: {
      loop: true,
      clickable: true,
      el: ".awards_tab .swiper-pagination",
    }
  });

  $("#menu_btn").click(function (){
    if ($("#menu_btn").hasClass("on")) {
      $(this).removeClass("on");
      $("#right_menu").stop().animate({ right: "- 100%" }, 300);
    } else {
      $(this).addClass("on");
      $(".dimmed_bg").addClass("on");
      $("#container").addClass("close");
      $("#right_menu").stop().animate({ right: 0 }, 300);
    }
  });
  $(".close_btn").click(function () {
    $(".dimmed_bg").removeClass("on");
    $("#container").removeClass("close");
    $("#right_menu").stop().animate({right: "-100%"}, 400 );
    $("#menu_btn").removeClass("on");
  });
  /*우측 하단*/
  $(".top_btn").click(function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 500);
  });
  /*우측 아코디언 메뉴*/
  $(".list_items .ctg_name").click(function(){
    var ctgHeught = $(this).parent().find("ul").outerHeight();
    if ($(this).hasClass("opentab")){
      $(this).removeClass("opentab");
      $(this).parent().find("div").stop().animate({ height: "0" });}
      else{
        $(this).addClass("opentab");
        $(".sub_menu").stop().animate({ height: "0" });
        $(this).parent().find("div").stop().animate({ height : ctgHeught });
      }
  });
  $(".bd_item .item_tit").click(function () {
    let ft_menu = $(this).parent().find("ul").outerHeight();
    if ($(this).hasClass("color")) {
      $(this).removeClass("color");
      $(this).parent().find("div").stop().animate({ height: "0" });
    } else {
      $(this).addClass("color");
      $(this).parent().find("div").stop().animate({ height: ft_menu });
    }
  });
  $(".header .hd_icon .fa-search").click(function () {
    if ($(".sr_inner").hasClass("inn")) {
      $(".sr_inner").removeClass("inn");
      document.getElementById("#container").style.display = "none";
    } else {
      $(".sr_inner").addClass("inn");
      document.getElementById("#container").style.display = "block";
    }
  });

  $(window).scroll(function () {
    scrTop = $(window).scrollTop();
    contentAreaTop = $(".content").offset().top;
    if (scrTop >= contentAreaTop) {
      $(".top_btn").addClass("om");
    } else {
      $(".top_btn").removeClass("om");
    }
  });
  
  /*about fila*/
  $(".awards_tab .swiper-slide").click(function(){
    let awd_idx = $(this).index() + 1;
    // console.log(awd_idx);
    $("div[class^=txt0]").removeClass("on");
    $(".txt0" + awd_idx).addClass("on"); 
  });

  const controller = new ScrollMagic.Controller();
	const scene1 = new ScrollMagic.Scene({
		triggerElement : '#trigger1',
    offset: 600,
		triggerHook : .8	//'onEnter' = 1, 'onCenter' = 0.5, 'onLeave' = 0
	})
	.setClassToggle('#animate3', 'visible')
	.addTo(controller)
	// .addIndicators();

	const staggerElement = $('.animation2');
	for(var i=0; i<staggerElement.length; i++){
		var scene2 = new ScrollMagic.Scene({
			triggerElement : staggerElement[i],
		offset: 150,
			triggerHook : .9
		})	
		.setClassToggle(staggerElement[i], 'visible')
		.addTo(controller)
		// .addIndicators();
	}
}());

