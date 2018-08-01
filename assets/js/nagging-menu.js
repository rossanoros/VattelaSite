$(function(){
	
	var menu = $('#navigation'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.slideUp('fast', function () {
					$(this).removeClass('default').addClass('fixed').slideDown();
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.removeClass('fixed').addClass('default');
			}
		});

});