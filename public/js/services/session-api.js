angular.module('app').service('SessionApi', ['$http', 'auth_token', function($http, auth_token){  
  function _options(email, password){
  
  return {
      url: "http://localhost:3000/sessions/",
      method: 'post',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "auth_token": auth_token.token
      },
      data: {
        session: {
            email: email,
            password: password
        }
      }
     }
  }; 

  this.login = function(email, password){  
    return $http(_options(email, password));
  };

  this.logout = function(){  
    return $http(_options());
  };


}]);