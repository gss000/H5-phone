$(function(){
    $(document).on('scroll', function(){
        var top = $(document).scrollTop();
        //屏幕滑动展示
        if(top>100){
            if(!$('.header').hasClass('header-back')){
                $('.header').addClass('header-back');
            }
        }else{
            if($('.header').hasClass('header-back')){
                $('.header').removeClass('header-back');
            }
        }
        if(top > -1){
            $('.screen1-head').removeClass('screen1-head-in');
            $('.screen-1-phone').removeClass('screen-1-phone-in');
            $('.screen-1-shadow').removeClass('.screen-1-shadow-in');

            $('.screen-1-head').addClass('screen1-head-done');
            $('.screen-1-phone').addClass('screen-1-phone-done');
            $('.screen-1-shadow').addClass('screen-1-shadow-done');
        }
        if(top>500){
            $('.screen-2-heading').removeClass('screen-2-heading-in');
            $('.screen-2-subheading').removeClass('screen-2-subheading-in');
            $('.screen-2-phone').removeClass('screen-2-phone-in');

            $('.screen-2-heading').addClass('screen-2-heading-done');
            $('.screen-2-subheading').addClass('screen-2-subheading-done');
            $('.screen-2-phone').addClass('screen-2-phone-done');
        }
        if(top>1300){
            $('.screen-3-heading').removeClass('screen-3-heading-in');
            $('.screen-3-subheading').removeClass('screen-3-subheading-in');
            $('.screen-3-phone').removeClass('screen-3-phone-in');
            $('.screen-3-feature').removeClass('screen-3-feature-in');

            $('.screen-3-heading').addClass('screen-3-heading-done');
            $('.screen-3-subheading').addClass('screen-3-subheading-done');
            $('.screen-3-phone').addClass('screen-3-phone-done');
            $('.screen-3-feature').addClass('screen-3-feature-done');
        }
        if(top>2200){
            $('.screen-4-heading').removeClass('screen-4-heading-in');
            $('.screen-4-subheading').removeClass('screen-4-subheading-in');
            $('.list-item').removeClass('list-item1-in');

            $('.screen-4-heading').addClass('screen-4-heading-done');
            $('.screen-4-subheading').addClass('screen-4-subheading-done');
            $('.list-item').addClass('list-item1-done');
        }
        if(top>3050){
            $('.screen5-bg').removeClass('screen5-bg-in');
            $('.screen-5-heading').removeClass('screen-5-heading-in');
            $('.screen-5-subheading').removeClass('screen-5-subheading-in');

            $('.screen5-bg').addClass('screen5-bg-done');
            $('.screen-5-heading').addClass('screen-5-heading-done');
            $('.screen-5-subheading').addClass('screen-5-subheading-done');
        }
    });

    $('.header-nav a').on('mouseover', function(){
        $('.header-nav a').removeClass('item-on');
        $(this).addClass('item-on');

    })


});