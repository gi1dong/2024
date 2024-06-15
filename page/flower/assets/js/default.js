

const adminMenuHandler = () => {
    if (!document.getElementById("adminNavBtn")) {
        return;
    }
    const menuBtnEl = document.getElementById("adminNavBtn");
    const menuBoxEl = document.getElementById("adminNavBox");
    let menuCheck = false;

    menuBtnEl.addEventListener("click", function(){
        if(!menuCheck){
            menuBoxEl.style.display="block";
            menuCheck = true;
            return;
        }

        menuBoxEl.style.display="none";
        menuCheck = false;
    })
}

const memberMenuHandler = () => {
    if (!document.getElementById("memberNavBtn")) {
        return;
    }
    const menuBtnEl = document.getElementById("memberNavBtn");
    const menuBoxEl = document.getElementById("memberNavBox");
    let menuCheck = false;

    menuBtnEl.addEventListener("click", function(){
        if(!menuCheck){
            menuBoxEl.style.display="block";
            menuCheck = true;
            return;
        }

        menuBoxEl.style.display="none";
        menuCheck = false;
    })
}

var mobileNavEventHandler = function() {
    var checkbox = document.getElementById("check");
    var mobileNav = document.getElementById("mobileNav");

    var mobileMenu = document.querySelectorAll('.first-nav a')

    mobileMenu.forEach(function(e){
        e.addEventListener("click",function (){
            checkbox.checked = false;
            mobileNav.style.display = "none"
        })
    })

    // 이벤트 설정
    checkbox.addEventListener("click", function(){
        checkbox.checked ?
            mobileNav.style.display = "block" : mobileNav.style.display = "none";
    });
}


const defaultInit = () => {
    adminMenuHandler();
    memberMenuHandler();
    mobileNavEventHandler();
}

window.onload = function(){
    defaultInit();
}


