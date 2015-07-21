angular.module('app').service('PhotoApi', ['$http', '$window', 'baseUrl', function($http, $window, baseUrl){  
  function _options(email, password){
  
  return {
      url: baseUrl + "photos/",
      method: 'get',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "auth_token": $window.sessionStorage.token
      },
     }
  }; 

  this.index = function(){  
    return $http(_options());
  };

}]);