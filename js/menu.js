$(document).ready(function() {

  // 변수:'='는 앞에 글자로 뒤에 것을 대신 부른다는 뜻 
  var container = $('.menubar-container');
  var btn = $('.btn-menubar');
  var menubar = $('.menubar');
  var btn_menubar = $('.btn-menubar, .menubar');
  var menu = $('.main-menu');
  var last = $('.last-menu');

  btn_menubar.click(function() {
    container.toggleClass('menubar-act');
    menu.toggleClass('menu-act');
    if (menu.hasClass('menu-act')) {
      btn.text('메인메뉴 닫기');
    } else {
      btn.text('메인메뉴 열기');
    }
  });
  last.focusout(function() {
    menu.removeClass('menu-act');
  });
});