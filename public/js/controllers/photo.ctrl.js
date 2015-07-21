angular.module('app')
  .controller('PhotoCtrl', 
    ['$scope', '$http', '$window', 'PhotoApi', function($scope, $http, $window, PhotoApi){

      $scope.token = $window.sessionStorage.token
      $scope.photos = [];
      
      PhotoApi.index().then(function(http_object){
        console.log(http_object);
        $scope.photos = http_object.data

      }).catch(function(e){console.log(e)});
    }]);
