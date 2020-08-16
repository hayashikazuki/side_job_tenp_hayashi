$(document).ready(function() {



$('.bg-slider').bgSwitcher({
        images: ['./profile-img/back1.jpeg','./profile-img/back2.jpeg'], // 切り替える背景画像を指定
    });
    
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
    
 // 画面下からどの程度の位置でエフェクトするかの設定
  var works_EffectH = 900;
  // どのくらい動かすかの設定
  var works_EffectTop = 15;
  // エフェクト時間(ms)
  var works_EffectTime = 800; 
  // 事前準備として少し下げたところに透明にして配置。
  $('.my-effect').css({ position: 'relative', left: 0, top: works_EffectTop, opacity: 0, transition: works_EffectTime + 'ms' });
  // スクロールイベント
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var works_effectPos = scBottom - works_EffectH;
    // エフェクト対象それぞれの位置とスクロール位置を比べて
    // 範囲に入っていればエフェクトを実行する
    $('.my-effect').each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < works_effectPos ) {
        $(this).css({ 'opacity' : 1, top: 0 });
      }
    });
  });

});