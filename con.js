$(function(){
	var nav_offset = $('.head2').offset().top;

	$(window).on('scroll load',function(){
	  console.log(nav_offset);
	  var now_offset = $(window).scrollTop();
	  if ( now_offset >= nav_offset ) {
	    $('.head2').css('position','fixed');
	    
	  } else {
	    $('.head2').css('position','inherit');
	  }
	});
});

