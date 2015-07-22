angular.module('app')
.controller('PhotoNewCtrl',
  ['$scope', '$http', '$window', '$location', 'PhotoApi', 'baseUrl',
  function($scope, $http, $window, $location, PhotoApi, baseUrl){

    $scope.base_url = baseUrl;
    $scope.token = $window.sessionStorage.token;
    $scope.photos = [];

    $scope.create = function()
    {
      PhotoApi.create($scope.photo, $scope.comment).then(function(http_object){
        console.log(http_object);
        $scope.photos = http_object.data;
        $location.path( '/photos' );
      }).catch(function(e){console.log(e)});
    };

}]);
