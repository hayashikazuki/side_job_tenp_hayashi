$(function() {
    
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
  
  var pagetop = $('.top-btn');
    // ボタン非表示
    pagetop.hide();
    // 300px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
     });
    
    $('.top-btn').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
        return false;
    });
    
});