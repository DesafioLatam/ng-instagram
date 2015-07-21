angular.module('app')
	.controller('PhotoCtrl', 
		['$scope', '$http', '$window', 'PhotoApi', function($scope, $http, $window, PhotoApi){

		$scope.token = $window.sessionStorage.token
		$scope.photos = [];
		$scope.index = function()
		{
			PhotoApi.index().then(function(http_object){
			// 	console.log(http_object);
			// 	auth_token.token = http_object.data.auth_token;
			// 	$scope.token = auth_token.token

	  //     }).catch(function(e){console.log(e)});
			});
		}





}])
