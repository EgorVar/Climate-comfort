
// Слайдер на главном экране
$(document).ready(function(){
  $('.preview__slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    spead: 500,
    easing: 'ease',
    fade: true,
    prevArrow: '<a href="#" class="arrow__prev"><img src="images/arrowL.svg" alt=""></a>',
    nextArrow: '<a href="#" class="arrow__next"><img src="images/arrowR.svg" alt=""></a>',
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: $('.preview__dots')
  });





  try{
    $.each($('.preview__dots ul')[0].children, function(index, value){
      var span = $('<span>', {
        text: '0'+(index+=1)
      });
      value.prepend(span[0]);
    });
  }catch(err){

  }


  // Слайдер на главном экране


  // Слайдер на главной странице с товарами по акции и новинками
  $('.catalog__slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    spead: 500,
    easing: 'ease',
    prevArrow: '<a href="#" class="arrow__prev"><img src="images/arrowL.svg" alt=""></a>',
    nextArrow: '<a href="#" class="arrow__next"><img src="images/arrowR.svg" alt=""></a>',
    responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3

      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  });
  // Слайдер на главной странице с товарами по акции и новинками


  // Слайдер со статьями
  $('.articles__slider').slick({
    reinit: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    spead: 500,
    easing: 'ease',
    prevArrow: $('.articles__btn > .arrow__prev'),
    nextArrow: $('.articles__btn > .arrow__next'),
    responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2

      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }
  ]
  });
  // Слайдер со статьями

  // Слайдер с рекомендованными товарами
  $('.recomendation__slider').slick({
    reinit: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    spead: 500,
    easing: 'ease',
    prevArrow: $('.recomendation__arrows > .arrow__prev'),
    nextArrow: $('.recomendation__arrows > .arrow__next'),
    responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3

      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  // Слайдер с рекомендованными товарами


  // Слайдер с недавно просмотренными товарами
  $('.last__slider').slick({
    reinit: true,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    spead: 500,
    easing: 'ease',
    prevArrow: $('.last__arrows > .arrow__prev'),
    nextArrow: $('.last__arrows > .arrow__next'),
    responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3

      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  // Слайдер с недавно просмотренными товарами

});
