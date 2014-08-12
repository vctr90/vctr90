//------------------------HEADER STYLE DRIVER

//Show and hide header menu

var show_menu = false;

$('#responsive-menu').on('click',function(){
	if(!show_menu){
		$('header ul').show();
		show_menu = true;
	}else{
		$('header ul').hide();
		show_menu = false;
	}
});
