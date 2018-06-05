(function($){
	$.fn.tabs = function(){
		var nav = $(this).find('.login_nav'),
			navLis = $(this).find('.login_nav_item'),
			content = $(this).find('.login_content'),
			contentLis = $(this).find('.login_content_item');
		$(navLis[1]).addClass('active');
		$(contentLis[1]).addClass('active');
		$.each(navLis, function(i){
			$(this).addClass('login_nav_item_'+i);
		});
		$.each(contentLis, function(i){
			$(this).addClass('login_content_item_'+i);
		});
		navLis.on('click', function(){
			var data = $(this).attr('class');
			var index = data.lastIndexOf('_');
			data = parseInt(data.substr(index+1));
      		/*console.log(data);*/
			var contentLi = $(contentLis[data]);
			navLis.removeClass('active');
			contentLis.removeClass('active');
			contentLi.addClass('active');
			$(this).addClass('active');
		});
	}
})(jQuery);
/* инициализация табов */
$('#tabs').tabs();
