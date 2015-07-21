angular.module('app')
  .controller('PhotoIndexCtrl', 
    ['$scope', '$http', '$window', 'PhotoApi', 'baseUrl', function($scope, $http, $window, PhotoApi, baseUrl){

      $scope.base_url = baseUrl
      $scope.token = $window.sessionStorage.token
      $scope.photos = [];
      
      PhotoApi.index().then(function(http_object){
        console.log(http_object);
        $scope.photos = http_object.data

      }).catch(function(e){console.log(e)});
    }]);
