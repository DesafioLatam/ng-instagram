angular.module('app')
	.controller('SessionCtrl', 
		['$scope', '$http', 'auth_token', 'SessionApi', function($scope, $http, auth_token, SessionApi){

		$scope.token = "hola"
		$scope.login = function()
		{
			console.log("hola");
			SessionApi.login($scope.email, $scope.password).then(function(http_object){
				console.log(http_object);
				auth_token.token = http_object.data.auth_token;
				$scope.token = auth_token.token

	      }).catch(function(e){console.log(e)});
		}





}])
