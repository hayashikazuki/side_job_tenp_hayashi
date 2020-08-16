$(function() {
    
    
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
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
  


var window_width = $(window).width();

for(let i=1; i<=16; i++)
{
  
  var works_EffectH = 2150;
  
  
  // どのくらい動かすかの設定
  var works_EffectTop = 15;
  // エフェクト時間(ms)
  var works_EffectTime = 800; 
  // 事前準備として少し下げたところに透明にして配置。
  $('.my-effect' + i).css({ position: 'relative', left: 0, top: works_EffectTop, opacity: 0, transition: works_EffectTime + 'ms' });
  // スクロールイベント
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var works_effectPos = scBottom - works_EffectH;
    
    
  
    // エフェクト対象それぞれの位置とスクロール位置を比べて
    // 範囲に入っていればエフェクトを実行する
    $('.my-effect'+ i).each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < works_effectPos ) {
        $(this).css({ 'opacity' : 1, top: 0 });
      }

    });
  });

}



for(let i=1; i<=5; i++)
{
  
  var EffectH = 2150;

  
  var EffectTime = 1000; 

  
   
  // どのくらい動かすかの設定
  var EffectLeft = 15;
  
  
  $('.my-effect-left'+ i).css({ position: 'relative', left: EffectLeft, top: 0, opacity: 0, transition: EffectTime + 'ms' });
  // スクロールイベント
  $(window).on('scroll load', function() {
    var scTop = $(this).scrollTop();
    var scBottom = scTop + $(this).height();
    var effectPos = scBottom - EffectH;
 
    $('.my-effect-left'+ i).each( function() {
      var thisPos = $(this).offset().top;
      if ( thisPos < effectPos ) {
        $(this).css({ 'opacity' : 1, left: 0 });
      }
    });
    
  });
  
}

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