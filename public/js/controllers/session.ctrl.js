angular.module('app')
  .controller('SessionCtrl', 
    ['$scope', '$http', '$location', '$window', 'SessionApi', function($scope, $http, $location, $window, SessionApi){

      if ($window.sessionStorage.token == undefined)        
        $scope.token = "hola desconocido"
      else
        $scope.token = $window.sessionStorage.token 
      

      $scope.login = function()
      {
        console.log("hola");
        SessionApi.login($scope.email, $scope.password).then(function(http_object){
          $window.sessionStorage.token = http_object.data.auth_token;
          $scope.token = http_object.data.auth_token;
          $location.path( "/photos" );

          }).catch(function(e){console.log(e)});
      }





}])
