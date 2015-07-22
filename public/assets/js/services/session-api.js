angular.module('app').service('SessionApi', ['$http', '$window', 'baseUrl', function($http, $window, baseUrl){
  function _login_options(email, password){

    return {
      url: baseUrl + 'sessions/',
      method: 'post',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      },
      data: {
        session: {
          email: email,
          password: password
        }
      }
    };
  }

  this.login = function(email, password){
    return $http(_login_options(email, password));
  };

  function _logout_options(){
    return {
      url: baseUrl + 'sessions/' + $window.sessionStorage.id,
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth_token': $window.sessionStorage.token
      },
    };
  }

  this.logout = function(){
    return $http(_logout_options());
  };


}]);
