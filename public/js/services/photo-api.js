angular.module('app').service('PhotoApi', ['$http', '$window', function($http, $window){  
  function _options(email, password){
  
  return {
      url: "http://localhost:3000/photos/",
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