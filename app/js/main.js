$(function (){
    $('.header__btn').on('click', function(){
        $('.rigthside-menu').removeClass('rigthside-menu--close');
    })
    $('.rigthside-menu__close').on('click', function(){
        $('.rigthside-menu').addClass('rigthside-menu--close');
    })
})