/* 윤리경영 실천강령 */
$(function(){
  $(".seoGeumWon_item").click(function(){
    var subMenuH =  $(this).find("ul").outerHeight();
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      $(this).find(".subMenu").stop().animate({height : "0"},400);
  }else{
      $(".subMenu").stop().animate({height : "0"},400);
      // $(this).addClass("on");
      $(this).find(".subMenu").stop().animate({height : subMenuH},400);
  }
});

// .tab .menu
// $(".tab .menu").click(function(){
//   var subMenu =  $(this).find("ul").outerHeight();
//   if($(this).hasClass("on")){
//     $(this).removeClass("on");
//     $(this).find(".subMenu").stop().animate({height : "0"},400);
// }else{
//     $(".seoGeumWon_item ").removeClass("on");
//     // $(".subMenu").stop().animate({height : "0"},400);
//     $(this).addClass("on");
//     $(this).find(".subMenu").stop().animate({height : subMenu},400);
// }
// });


  // 회원 가입 처리
  $('#join-submit').click(function(e){
      e.preventDefault();
      if($("#inputName").val() ==''){
          alert('이름을 입력하세요');
          $("#inputName").focus();
          return false;
      }
      var email = $('#InputEmail').val();
      if(email == ''){
          alert('이메일을 입력하세요');
          $("#InputEmail").focus();
          return false;
      } else {
          var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (!emailRegex.test(email)) {
              alert('이메일 주소가 유효하지 않습니다. ex)abc@gmail.com');
              $("#inputEmail").focus();
              return false;
          }
      }
      if($("#inputPassword").val() ==''){
          alert('비밀번호를 입력하세요');
          $("#inputPassword").focus();
          return false;
      }

      if($("#inputPasswordCheck").val() ==''){
          alert('비밀번호를 다시 한번 더 입력하세요');
          $("#inputPasswordCheck").focus();
          return false;
      }
      if($("#inputPassword").val()!== $("#inputPasswordCheck").val()){
          alert('비밀번호를 둘다 동일하게 입력하세요');
          return false;
      }

      if($("#inputMobile").val() ==''){
          alert('휴대폰 번호를 입력하세요');
          $("#inputMobile").focus();
          return false;
      }
      
      if($("#agree").is(":checked") == false){
          alert('약관에 동의하셔야 합니다');
          return false;      
      }
      
      $.ajax({
          url: 'register.php',
          type: 'POST',
          data: {
              name:$("#inputName").val(),
              userID:$('#InputEmail').val(),
              email:$('#InputEmail').val(),
              password:$('#inputPassword').val(),
              telNO:$("#inputtelNO").val(),
              mobileNO:$("#inputMobile").val()
          },
          dataType: "json",
          success: function (response) {
              if(response.result == 1){
                  alert('가입 완료');
                  location.replace('../index.php'); // 화면 갱신
              } else if(response.result == 0){
                  alert('이미 가입된 아이디입니다');
              } else if(response.result == -2){
                  alert('입력된 값이 없습니다');
              } else {
                  alert('등록중에 에러가 발생했습니다');
              }
          },
          error: function(jqXHR, textStatus, errorThrown){
              alert("arjax error : " + textStatus + "\n" + errorThrown);
          }
      });        
      
  });
  
  $(document).ready(function(){
    $("#fileInput").on('change', function(){  // 값이 변경되면
      if(window.FileReader){  // modern browser
        var filename = $(this)[0].files[0].name;
      } else {  // old IE
         var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
      }
  
       // 추출한 파일명 삽입
      $("#userfile").val(filename);
    });

});

});