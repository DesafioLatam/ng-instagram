angular.module('app').service('SessionApi', ['$http', '$window', function($http, $window){  
  function _options(email, password){
  
  return {
      url: "http://localhost:3000/sessions/",
      method: 'post',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
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