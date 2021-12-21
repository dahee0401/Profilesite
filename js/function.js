$(function () {

  
  //aboutme-slide
  const $meprev = $('.content_right > .prev');
  const $menext = $('.content_right>.next');
  const $aboutme = $('.content_right > ul > li');
  let currentIdx = 0;

    $meprev.on('click',function(){
    if(currentIdx>0){
      currentIdx--;
      $meprev.addClass('on');
      
    }else{
     $meprev.removeClass('on');
     $menext.addClass('on');
    }
    $aboutme.eq(currentIdx).fadeIn().siblings().fadeOut();
  });

   $menext.on('click',function(){
    if(currentIdx<1){
      currentIdx++;
      $menext.addClass('on');
      $meprev.removeClass('on');
    } else {
      currentIdx=1;
       $menext.removeClass('on');
       $meprev.addClass('on');
    }
    $aboutme.eq(currentIdx).fadeIn().siblings().fadeOut();
  });//end of aboutme-slide

// pf popup
const $viewOpen = $('.viewOpen');
const $viewClose = $('.viewClose');
const $viewImg = $('.portfolio-bg>.portfolio-img ');
const $view = $('.portfolio-bg');
  
  $viewOpen.on('click', function (evt) {
    evt.preventDefault();
    let src = $(this).attr('href');

    $viewImg.find('a').css({
      backgroundImage: 'url(' + src + ')'
    });
    $viewImg.parent().fadeIn();
  });

$viewClose.on('click', function (evt) {
    evt.preventDefault();
    $viewImg.scrollTop(0);
    $view.fadeOut();
  });

  $view.on('click', function () {
    $viewImg.scrollTop(0);
    $view.fadeOut();
  });//end of pf popup

  //design popup
const $uiuxOpen = $('.uiuxOpen');
const $uiuxClose = $('.uiuxClose');
const $uiuxImg = $('.uiux-bg>.uiux-img ');
  const $uiux = $('.uiux-bg');
  
   $uiuxOpen.on('click', function (evt) {
    evt.preventDefault();
    let src = $(this).attr('href');

   $uiuxImg.find('a').css({
      backgroundImage: 'url(' + src + ')'
    });
   $uiuxImg.parent().fadeIn();
  });

$uiuxClose.on('click', function (evt) {
    evt.preventDefault();
    $uiuxImg .scrollTop(0);
    $uiux.fadeOut();
  });

 $uiux.on('click', function () {
    $uiuxImg.scrollTop(0);
   $uiux.fadeOut();
  });//end of design popup


  // design prev next
  const $dePrev = $('#design .prev');
  const $deNext = $('#design .next');
  const $design = $('#design .container ul');
  const $designs = $('#design .container ul>li');
  const $gallOpen = $('.gallOpen');
  const $gallClse = $('.gallClse');
  const $gall = $('.gallery_bg');
  const $gallImg = $('.gallery_bg>.gallery_img');
  let nowIdx = 0;

  function galleryMove(){
    $designs.eq(nowIdx).stop().animate({left:0,},500,function(){
      $designs.eq(nowIdx).siblings().css({'left':'990px'}).appendTo($design);
    });
  }

  $dePrev.on('click',function(){
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx = 1;
    }

    galleryMove();
  });

  $deNext.on('click',function(){
    if(nowIdx<1){
      nowIdx++;
    }else{
      nowIdx = 0 ;
    }

    galleryMove();
  });

 $gallOpen.on('click',function(evt){
    evt.preventDefault();
    let src = $(this).attr('href');

    $gallImg.css({
       backgroundImage: 'url(' + src + ')'
    }).parent().fadeIn();
 });
  $gallClse.on('click', function (evt) {
    evt.preventDefault();
    $gall.fadeOut();
  });
  $gall.on('click', function () {
    $gall.fadeOut();
  });//end of design prev next
})