{"filter":false,"title":"contact.js","tooltip":"/home-tenp/contact.js","undoManager":{"mark":16,"position":16,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["$(document).ready(function() {","","","","$('.bg-slider').bgSwitcher({","        images: ['./profile-img/back1.jpeg','./profile-img/back2.jpeg'], // 切り替える背景画像を指定","    });","    ","var $nav   = $('#navArea');","  var $btn   = $('.toggle_btn');","  var $mask  = $('#mask');","  var open   = 'open'; // class","  // menu open close","  $btn.on( 'click', function() {","    if ( ! $nav.hasClass( open ) ) {","      $nav.addClass( open );","    } else {","      $nav.removeClass( open );","    }","  });","  // mask close","  $mask.on('click', function() {","    $nav.removeClass( open );","  });","    ","","","});"],"id":1}],[{"start":{"row":4,"column":0},"end":{"row":6,"column":7},"action":"remove","lines":["$('.bg-slider').bgSwitcher({","        images: ['./profile-img/back1.jpeg','./profile-img/back2.jpeg'], // 切り替える背景画像を指定","    });"],"id":2},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":21,"column":0},"end":{"row":42,"column":5},"action":"insert","lines":["// 画面下からどの程度の位置でエフェクトするかの設定","  var works_EffectH = 2600;","  // どのくらい動かすかの設定","  var works_EffectTop = 15;","  // エフェクト時間(ms)","  var works_EffectTime = 800; ","  // 事前準備として少し下げたところに透明にして配置。","  $('.my-effect'+ i).css({ position: 'relative', left: 0, top: works_EffectTop, opacity: 0, transition: works_EffectTime + 'ms' });","  // スクロールイベント","  $(window).on('scroll load', function() {","    var scTop = $(this).scrollTop();","    var scBottom = scTop + $(this).height();","    var works_effectPos = scBottom - works_EffectH;","    // エフェクト対象それぞれの位置とスクロール位置を比べて","    // 範囲に入っていればエフェクトを実行する","    $('.my-effect'+ i).each( function() {","      var thisPos = $(this).offset().top;","      if ( thisPos < works_effectPos ) {","        $(this).css({ 'opacity' : 1, top: 0 });","      }","    });","  });"],"id":4}],[{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"remove","lines":["i"],"id":5},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":[" "]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["+"]}],[{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"remove","lines":["i"],"id":6},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"remove","lines":[" "]},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"remove","lines":["+"]}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"remove","lines":["6"],"id":7},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":["2"]}],[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":["0"],"id":8}],[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"remove","lines":["8"],"id":9}],[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["2"],"id":10},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["0"]}],[{"start":{"row":21,"column":0},"end":{"row":42,"column":5},"action":"remove","lines":["// 画面下からどの程度の位置でエフェクトするかの設定","  var works_EffectH = 0;","  // どのくらい動かすかの設定","  var works_EffectTop = 15;","  // エフェクト時間(ms)","  var works_EffectTime = 2000; ","  // 事前準備として少し下げたところに透明にして配置。","  $('.my-effect').css({ position: 'relative', left: 0, top: works_EffectTop, opacity: 0, transition: works_EffectTime + 'ms' });","  // スクロールイベント","  $(window).on('scroll load', function() {","    var scTop = $(this).scrollTop();","    var scBottom = scTop + $(this).height();","    var works_effectPos = scBottom - works_EffectH;","    // エフェクト対象それぞれの位置とスクロール位置を比べて","    // 範囲に入っていればエフェクトを実行する","    $('.my-effect').each( function() {","      var thisPos = $(this).offset().top;","      if ( thisPos < works_effectPos ) {","        $(this).css({ 'opacity' : 1, top: 0 });","      }","    });","  });"],"id":11}],[{"start":{"row":21,"column":0},"end":{"row":23,"column":5},"action":"insert","lines":["function clickEvent() {","        alert('クリックされました');","    }"],"id":12}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"remove","lines":["た"],"id":13},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":["し"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"remove","lines":["ま"]},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"remove","lines":["れ"]},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["さ"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":["ク"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["ッ"]},{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"remove","lines":["リ"]},{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"remove","lines":["ク"]}],[{"start":{"row":22,"column":15},"end":{"row":22,"column":17},"action":"insert","lines":["送信"],"id":14}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":21},"action":"insert","lines":["しました"],"id":15}],[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["！"],"id":16}],[{"start":{"row":21,"column":0},"end":{"row":23,"column":5},"action":"remove","lines":["function clickEvent() {","        alert('送信しました！');","    }"],"id":17}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":0},"end":{"row":21,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":22,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1597325316346,"hash":"e1f0a558d08e44cffa23c067ea9c6e59ed10fb01"}