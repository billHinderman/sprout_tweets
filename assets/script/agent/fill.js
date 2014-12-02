jQuery(document).ready(function($) {
  $(window).on('resize', function() {
  	$("*[data-fill]").each(function() {
      var modifier = $(this).attr('data-fill-size') ? $(this).attr('data-fill-size') : 1;
  		if($(this).attr('data-fill') == 'strict') {
  			$(this).css({
    			"height":($(window).height())*modifier,
    			"position":"relative"});
  		} else {
  			$(this).css({
    			"min-height":($(window).height())*modifier,
    			"position":"relative"});
  		}
  	});
  });
  $(window).resize();
});
