$(document).ready(function(){
  $('.btn__move-up').on('click', function(){
    $('body, html').animate({scrollTop: 0}, 500);
  });
  //open catalog

  openNavbar();
  // Открытие и закрытие меню навигации в мобильной версии

  viewAddit();
  // Открытие дополнительной информации о доставке на мобильных


  addBox();
  // Добавить в корзину, избранное, сравнение

  openModal();
  // Открытие модальных окон


  changeGridListing();
  // Смена в листинге с отображения карточек с плиток на список


  mobileHeader();
  // Открытие поля обратный звонок


  itemClose();
  // Удаление товаров из корзины, избранного и сравнения


  changeCatalog();
  // Смена каталога товаров с акциями и новинками на главной странице

  $('.btn__arrow').on('click', function(e){
    e.preventDefault();
  });

  $('body').removeClass('body__hidden');
  $('.preloader').removeClass('active');


});


function mobileHeader(){
  $('#header__number').on('click', function(e){
    e.preventDefault();
    $('#header__number').toggleClass('active');
    if($('body').width() <= 1000){
      $('.modal__phone').toggleClass('active');
    }
  });

  $('.modal__phone a.close').on('click', function(){
    $('.modal__phone').removeClass('active');
    $('#header__number').removeClass('active');
  });

}

function itemClose(){
  $('.product__box-wrap .item a.close').on('click', function(e) {
    e.preventDefault();
    $(e.target.closest('.item')).remove();
  });
}


function viewAddit(){
  $('.card__additionally .item').on('click', function(e){
    $(e.target.closest('.item').children[1]).toggleClass('active');
  });
}

function addBox(){
  $('.product__buttons a').on('click', function(e){
    e.preventDefault();
    $(e.target.closest('a')).toggleClass('active');
  })

  // product add in box


  $('.card__btn-top__item a').on('click', function(e){
    e.preventDefault();
    $(e.target.closest('a').children[0]).toggleClass('active');
  });

  // catalog add in box


}

function openModal(){
  $('#sign_in').on('click',function(event){
    event.preventDefault()
    $('.modal__sign-in').closest('.modal__wrap').addClass('active');
    $('body').addClass('body__hidden');
  })

  $('#search').on('click',function(event){
    event.preventDefault()
    $('.modal__search-mobile').closest('.modal__wrap').addClass('active');
    $('body').addClass('body__hidden');
  })
  $('#link__register').on('click',function(event){
    event.preventDefault()
    $('.modal__sign-up').closest('.modal__wrap').addClass('active');
    $('body').addClass('body__hidden');
  })

  $('.modal a.close').on('click', function(e){
    e.preventDefault();
    $('.modal__wrap').removeClass('active');
    $('body').removeClass('body__hidden');
  })
}





function openNavbar(){
  $('.btn__navbar').on('click', function(e){
    if(e.target.closest('.btn__navbar').classList[1] !== 'active'){
      $('.btn__navbar').addClass('active');
      $('.navbar__menu').addClass('active');
      $('body').addClass('body__hidden');
    }else{
      $('.btn__navbar').removeClass('active');
      $('.navbar__menu').removeClass('active');
      $('body').removeClass('body__hidden');
    }
    console.log(e.target.closest('.btn__navbar'));
  });

  $('.btn__setting').on('click', function(){
    $('.settings__wrap-mobile').addClass('active');
    $('body').addClass('body__hidden');
  });

  $('.wrap__header-setting a.close').on('click', function(){
    $('.settings__wrap-mobile').removeClass('active');
    $('body').removeClass('body__hidden');
  });

}

function changeCatalog(){
  $('.desc__btn > .arrow__prev').on('click',changeDesc);


  $('.desc__btn > .arrow__next').on('click',changeDesc);


  function changeDesc(e){
    e.preventDefault();
    $('.description__item').toggleClass('description__item-active');
    $('.desc__dots > div').toggleClass('active');
  }
}

function changeGridListing(){
  $('a#square').on('click', function(e){
    e.preventDefault();
    $('.listing .products__inner').removeClass('list');
    $('a#square').addClass('active');
    $('a#list').removeClass('active');
  });
  $('a#list').on('click', function(e){
    e.preventDefault();
    $('.listing .products__inner').addClass('list');
    $('a#square').removeClass('active');
    $('a#list').addClass('active');
  });
}
