angular.module('vctr.services',[])
	.factory('styler',function(){
		this.window = {
			height:$(window).height()
		}
		this.content_height = this.window.height - 58;
		this.set_content = function(){
			$('.ctnt').css('height',this.content_height + 'px');
		}
		this.set_initial_content = function(){
			$('.ctnt').css('height','initial');
			$('.ctnt').css('padding-top','20px');
			$('.ctnt').css('padding-botton','20px');
		}
		this.set_content_height = function(){
			if(this.window.height < 380){
				this.set_initial_content();
			}else{
				this.set_content();
			}
		}

		this.set_selected_el = function(element){
			$('li').removeClass('black');
			if(element!=='.main_link'){
				$('.main_link').removeClass('white');
				$(element).addClass('black');
			}else{
				$(element).addClass('white');
			}
		}	
		return this;
	});
