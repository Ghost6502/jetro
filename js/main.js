$(document).ready(function(){
    $('.slider__inner').slick({
        fade: true,
      });
      $('.slider__inner-nav').slick({
        slidesToShow: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
      });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
    });
});