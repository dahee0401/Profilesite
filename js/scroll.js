$(function () {
  const arrTopVal = [];
  const $mnu = $('.gnb > li > a');
  const $paper = $('nav>.rightmnu>li>a');
  
  for (let i = 0; i < 6; i++) {
    arrTopVal[i] = $('section').eq(i).offset().top;
  }
  
  
  const moveFn = function (idx) {
    $('html,body').stop().animate({ scrollTop: arrTopVal[idx]}, 'easeInOutCubic');
  };
  
  // 로드 시 인사말
 $(window).on('load', function(){
   $('.typing-txt').animate({ top: 450 }, 500, 'linear')
   $('.typing-txt').delay(.5).css({ opacity: 1 });
  });


  // 메뉴클릭 시 컨텐츠 이동
  $mnu.on('click', (evt) => {
    evt.preventDefault();
    const nowIdx = $mnu.index(evt.currentTarget);
    moveFn(nowIdx);
  });
  

  $paper.on('click', (evt) => {
    evt.preventDefault();
    const nowIdx = $paper.index(evt.currentTarget);
    moveFn(nowIdx);
  });//end of mnu
    
  
  // 스킬바 작동
  var $skill = $('.skills-section');
  var $skillTop = $skill.offset().top;
  $(window).on('scroll', function () {
    
    const scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 120) {
      $('.mnu').fadeIn(300);
    } else {
      $('.mnu').fadeOut(300);
    }

 if (scrollTop >= 940) {
      $skill.find('.b1').addClass('animate1');
      $skill.find('.b2').addClass('animate2');
      $skill.find('.b3').addClass('animate3');
      $skill.find('.b4').addClass('animate4');
      $skill.find('.b5').addClass('animate5');
 } else {
     $skill.find('.b1').removeClass('animate1');
     $skill.find('.b2').removeClass('animate2');
     $skill.find('.b3').removeClass('animate3');
     $skill.find('.b4').removeClass('animate4');
     $skill.find('.b5').removeClass('animate5');
    }//end of skillbar


    // rightmnu클릭 했을 때 변환
    for (let i = 0; i < 6; i++) {
      if (scrollTop >= arrTopVal[i] - 200) {
        $paper.eq(i).parent().addClass('on').siblings().removeClass('on');
      } else if (scrollTop < arrTopVal[0] - 69) {
        $paper.parent().removeClass('on');
      }
    }  //endof rightmnu
    

  });
  


 
})