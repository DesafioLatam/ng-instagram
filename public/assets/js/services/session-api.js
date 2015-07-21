angular.module('app').service('SessionApi', ['$http', '$window', function($http, $window){  
  function _login_options(email, password){
  
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
    return $http(_login_options(email, password));
  };

  function _logout_options(){
    return {
          url: "http://localhost:3000/sessions/" + $window.sessionStorage.id,
          method: 'delete',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "auth_token": $window.sessionStorage.token
          },
         }
      }; 



  this.logout = function(){  
    return $http(_logout_options());
  };


}]);