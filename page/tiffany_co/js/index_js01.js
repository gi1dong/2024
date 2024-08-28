AOS.init();
(function () {
  $(".hamburger").click(function () {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".dimmed_bg").addClass("on");
      $("#left_menu").stop().animate({ left: "-100%" }, 600);
    } else {
      $(this).removeClass("on");
      $(".dimmed_bg").removeClass("on");
      $("#left_menu").stop().animate({ left: "0" }, 600);
    }
  });
  $(".close_btn").click(function () {
    $("#left_menu").stop().animate({ left: "-100%" }, 600);
  });

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
			triggerHook: 'onLeave',
			duration: '100%',
		}
  });

  /*움직이는 txt*/
  let txt_ani01 = TweenMax.to(".ani_wrap01 .ani_txt01", 0.5, { x: "-10%" });
  let txt_ani02 = TweenMax.to(".ani_wrap01 .ani_txt02", 0.5, { x: "40%" });
  let scene01 = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    triggerElement: ".ani_wrap01",
    duration: "100%",
  })
  .setTween(txt_ani01)
  .addTo(controller)

  let scene02 = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    triggerElement: ".ani_wrap01",
    duration: "100%",
  })
  .setTween(txt_ani02)
  .addTo(controller)

  /*tiffany note*/
  let scene03 = new ScrollMagic.Scene({
    triggerElement: "#container3",
    
  })
  .setPin("#container3", { pushFollowers: false })
  .addTo(controller)
	// .addIndicators();

  /*bg change*/
  let tween1 = TweenMax.to("main", 0.08, {
    backgroundColor: "#b3f2f1",
  });

  let scene04 = new ScrollMagic.Scene({
    triggerElement: ".ani_wrap01",
    duration: "200%",
  })
  .setTween(tween1)
  .addTo(controller)
}());

