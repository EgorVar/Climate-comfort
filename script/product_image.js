$(document).ready(function(){
  $('.card__picture-img__main .item').on('click', function(e){
    if(e.target.classList[1] !== 'active'){
      var url = $(e.target.closest('.item')).eq(0).children().eq(0).attr('src');
      $('.card__picture-img .inner__img').css({'background-image': 'url('+url+')'});
      $('.card__item-picture__full .item__img').css({'background-image': 'url('+url+')'});
      $('.card__picture-img__main .item.active').removeClass('active');
      $(e.target.closest('.item')).eq(0).addClass('active');
    }
  });

  // Открытие полного изображения
  $('.card__picture-img').on('click', function(){
    $('.card__item-picture__full').addClass('active');
    $('body').addClass('body__hidden');
  });
  // Открытие полного изображения


  // Закрытие полного изображения
  $('.card__item-picture__full').on('click', function(e){
    if(e.target.classList[0] == 'card__item-picture__full'){
      $('.card__item-picture__full').removeClass('active');
      $('body').removeClass('body__hidden');
    }
  });


  $('.card__item-picture__full a.close').on('click', function(){
    $('.card__item-picture__full').removeClass('active');
    $('body').removeClass('body__hidden');
  });
  // Закрытие полного изображения



  // Появление фиксированного блока добавить в корзину на странице продуктов
  $(document).on('scroll', function(){
    try{
      if($('.product__desc')[0].offsetHeight < window.scrollY){
        $('.addCart').addClass('active');
      }else{
        $('.addCart').removeClass('active');
      }
    }catch(err){

    }
  });
  // Появление фиксированного блока добавить в корзину на странице продуктов

  // Закрытие фиксированногоблока добавить в корзину на мобильной версии
  $('.addCart a.close').on('click', function(){
    $('.addCart').addClass('addCart__hidden');
    $('header').removeClass('mt__mobile');
  });
  // Закрытие фиксированногоблока добавить в корзину на мобильной версии





});
