angular.module('vctr.controllers',[])
	.controller('defaultCtrl',['$scope','styler',function($scope,styler){
		styler.set_content();
	}])
	.controller('aboutCtrl',['$scope','styler',function($scope,styler){
		styler.set_content();
	}]);
