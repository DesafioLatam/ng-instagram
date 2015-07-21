angular.module('app')
  .controller('SessionCtrl', 
    ['$scope', '$http', '$location', '$window', 'SessionApi', 'baseUrl', function($scope, $http, $location, $window, SessionApi, baseUrl){

      if ($window.sessionStorage.token == undefined)        
        $scope.token = "hola desconocido"
      else
        $scope.token = $window.sessionStorage.token 
      

      $scope.login = function()
      {
        SessionApi.login($scope.email, $scope.password).then(function(http_object){
          $window.sessionStorage.token = http_object.data.auth_token;
          $window.sessionStorage.user_id = http_object.data.id;
          $scope.token = http_object.data.auth_token;
          $location.path( "/photos" );

          }).catch(function(e){console.log(e)});
      }

      $scope.logout = function()
      {
        SessionApi.logout().then(function(http_object){
          $window.sessionStorage.removeItem("token")
        }).catch(function(e){console.log(e)});
      }




}])
