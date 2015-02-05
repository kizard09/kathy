$(document).foundation();
$('.right-off-canvas-toggle.menu-icon').on('click', function() {
  var scroll_pos = $(document).scrollTop();
  $('.right-off-canvas-menu nav, .menu').css('top',scroll_pos);
  $('.inner-wrap').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    $('.right-off-canvas-menu nav').css('position','fixed');
  }); 
})
$('.exit-off-canvas').on('click', function() {
  if ($('.right-off-canvas-toggle').attr('aria-expanded') === 'true') {
    $('.menu').removeAttr('style');
  }
  $('.right-off-canvas-menu nav').removeAttr('style');
});


$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  if(cur_pos < 200){
    nav.find('a').removeClass('active');
      nav.find('i').css('display','none');
  }
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
     bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      nav.find('i').css('display','none');
      nav.find('a[href="/#'+$(this).attr('id')+'"]').addClass('active');
      nav.find('a[href^="/#' + $(this).attr('id')+'"]').prev().css('display','block');
    }
  });
});
$(function() {
  $('.box').on('click', function(){
    $('.case').hide();
    $('#' + $(this).data('reference')).show();
    $('.box').removeClass('active');
    $(this).addClass('active');
  });
});
$('.passion').on('mouseover', function(){
  console.log('yep')
  $('.passion p').css('display','block')
});
$('.passion').on('mouseout', function(){
  $('.passion p').css('display','none')
});
$('.book').on('mouseover', function(){
  console.log('yep')
  $('.book p').css('display','block')
});
$('.book').on('mouseout', function(){
  $('.book p').css('display','none')
});
$('.kathy').on('mouseover', function(){
  console.log('yep')
  $('.kathy p').css('display','block')
});
$('.kathy').on('mouseout', function(){
  $('.kathy p').css('display','none')
});

var sections = $('section'),
         nav = $('nav'),
  nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  if(cur_pos < 200){
    nav.find('a').removeClass('active_tab');
  }
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
     bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active_tab');
      nav.find('a[href="/#'+$(this).attr('id')+'"]').addClass('active_tab');
    }
  });
});