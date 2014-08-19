//------------------------HEADER STYLE DRIVER

//Show and hide header menu

var screen_width = $('html').width();

$(window).resize(function(){
	screen_width = $('html').width();
	if(screen_width > 576){
		$('header ul').show()
	}else{
		$('header ul').hide()
	}
});

var show_menu = false;

var display_menu = function(){
	if(!show_menu){
		$('header ul').show();
		show_menu = true;
	}else{
		$('header ul').hide();
		show_menu = false;
	}
}

$('#responsive-menu').on('click',function(){
	if(screen_width <= 576) display_menu();
});

$('header ul a li').on('click',function(){
	if(screen_width <= 576) display_menu();
});

$('header .main_link').on('click',function(){
	if(screen_width <= 576){
		display_menu();
		$('header ul').hide();
	}
});
