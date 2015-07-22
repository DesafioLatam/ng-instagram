angular.module('app').service('PhotoApi', ['$http', '$window', 'baseUrl', function($http, $window, baseUrl){

  var index_options = {
    url: baseUrl + 'v1/captures/',
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'auth_token': $window.sessionStorage.token
    }
  };

  this.index = function(){
    return $http(index_options);
  };

  function _create_options(photo, comment){
    return {
      url: baseUrl + 'v1/captures',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth_token': $window.sessionStorage.token,
      },
      data: {
        capture: {
          comment: comment,
        },
        image: photo
      }
    };
  }

  this.create = function(photo, comment){
    return $http(_create_options(photo, comment));
  };

}]);
