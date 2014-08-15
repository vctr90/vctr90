var window = {
	height:$(window).height()
};

var setContentHeight = function(){
	$('.ctnt#resume').css('height',window.height + 'px');
}

setContentHeight();
