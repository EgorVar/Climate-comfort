$(document).ready(function(){

  var active,
      lastActive,
      titles = ['Каталог товаров'],
      sideBtn = $('.sidebar__header-btn');

  // Смена меню навигации с меню каталогом товаров
  $('.navbar__menu .catalog__btn').on('click',function(){
    $('sidebar').toggleClass('active');
    $('.btn__navbar').removeClass('active');
    $('.navbar__menu').removeClass('active');
  });
  // Смена меню навигации с меню каталогом товаров

  // Открытие меню с каталогом товаров
  $('.catalog__btn').on('click', function(){
    $('.sidebar').addClass('active');
    $('body').addClass('body__hidden');
  });
  // Открытие меню с каталогом товаров

  // Закрытие меню с категориями товаров
  $('.sidebar a.close').on('click',function(){
    $('.sidebar').removeClass('active');
    $('body').removeClass('body__hidden');
  });
  // Закрытие меню с категориями товаров


  // Переход между родительскими и дочерними категориями
  $('.sidebar__header-btn').on('click', 'a', function(e){
    e.preventDefault()
    var total = $('.sidebar__header-btn').children().index(e.target) + 1,
        length = $('.sidebar__header-btn').children().length,
        loop = length - total;
        if(loop > 0){
          for (var i = 0; i < loop; i++) {
            $('.sidebar__footer .back a.btn__stroke').trigger('click');
          }
        }
  });
// Переход между родительскими и дочерними категориями

  $('.sidebar__menu ul > li').on('click', openSide);

  //back

  $('.sidebar__footer .back a.btn__stroke').on('click', backSide);

  // Открытие категории
  function openSide(e){
    if($(e.target.closest('li')).eq(0).children('ul').length > 0){
      active = $(e.target.closest('li'));
      active.eq(0).siblings('li').css({'display':'none'});
      active.eq(0).children('ul').css({'display':'flex', 'width': '100%'});
      active.eq(0).css({ 'margin': '0'});
      active.eq(0).children('div').css({'display':'none'});
      active.eq(0).children('ul').children('li').children('div').addClass('moved');
      titles.push(active.eq(0).children('div').eq(0).children('.slide__wrap').text());
      titles = titles.filter(function(elem, pos) {
          return titles.indexOf(elem) == pos;
      });
      sideBtn.empty();
      $.each(titles,function(index, item){
        sideBtn.append('<a href="#" class="title">'+titles[index]+'</a>');
      });
    }
  }
  // Открытие категории



  // Закрытие категории
  function backSide(e){
   if(!active.eq(0).hasClass('sidebar__menu')){
     e.preventDefault();
     active.eq(0).siblings('li').css({'display':'block'});
     active.eq(0).children('ul').css({'display':'none'});
     active.eq(0).css({'margin': '12px 32px'});
     active.eq(0).children('div').css({'display':'block'});
     active.eq(0).parent().children('li').children('div').addClass('moved');
     active = active.parent().parent();
     titles.pop();
     sideBtn.empty();
     $.each(titles,function(index, item){
       sideBtn.append('<a>'+titles[index]+'</a>');
     });
   }
  }
// Закрытие категории
});
