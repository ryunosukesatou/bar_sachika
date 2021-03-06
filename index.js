$(function(){
    $(".main-image-text").fadeIn(2000);

    $('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:2000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
        pauseOnFocus: true,//フォーカスで一時停止を無効
        pauseOnHover: true,//マウスホバーで一時停止を無効
        pauseOnDotsHover: true,//ドットナビゲーションをマウスホバーで一時停止を無効
});

    $('.nav-btn').click(function(){
        $('nav ul').animate({width:'show'});
        $('nav ul li span').show();
        $('nav').fadeIn();
    });

    $('nav').click(function(){
        $('nav ul').animate({width:'hide'});
        $('nav ul li span').hide();
        $('nav').fadeOut();
    });
 });