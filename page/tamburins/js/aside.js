$(function(){
  $(".back_btn").click(function () {
    $(".main_menu_list").removeClass("disabled");
    $(".sub_menu_box").removeClass("active");
    // $(".sub_menu_box").css({visibility: 'hidden', right:'-100%', height:'0',  opacity:'0', transition: 'opacity ease .5s'});
    // $("#sub0"+idx).css({visibility: 'hidden', height:'0', opacity:'0', transition: 'opacity ease .5s' });
  });

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
      // $("#sub_menu").css({visibility:'hidden', opacity:'0',height:'0' , transition: 'opacity ease .5s'});
      // $("#sub0"+idx).css({display:'grid', visibility: 'visible', opacity:'1', transition: 'opacity ease .5s'});
    }
  });

    // 햄버거 클릭 시 메뉴 
    $(".humbuger, .close").click(function () {
      $(".main_menu_list").removeClass("disabled");
      $(".sub_menu_box").removeClass("active");
        $(".sub_menu").addClass("open");
  
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
  
    
});