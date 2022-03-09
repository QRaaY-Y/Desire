$(function (){
    $('.header__btn').on('click', function(){
        $('.rigthside-menu').removeClass('rigthside-menu--close');
    })
    $('.rigthside-menu__close').on('click', function(){
        $('.rigthside-menu').addClass('rigthside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows:false,
        fade:true,
        autoplay:true
    });

    var mixer = mixitup('.gallery__inner',{
        load:{
            filter:'.living'
        }
    })
})