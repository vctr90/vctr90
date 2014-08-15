angular.module('vctr.services',[])
	.service('styler',function(){
		this.window = {
			height:$(window).height()
		}
		this.content_height = this.window.height - 58;
		this.set_content = function(){
			$('.ctnt').css('height',this.content_height + 'px');
		}
	});
