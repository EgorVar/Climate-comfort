$(document).ready(function(){
  try{

    var item = $('.product__desc-item').children();

    for (var i = 0; i < item.length; i++) {
      if((item[i-1] == undefined && item[i].tagName == 'P') || (item[i].tagName == 'P' && item[i-1].tagName == 'P')){
        $(item[i]).addClass('no_label');
      }
    }


  }catch(err){
    console.log(err);
  }
});
