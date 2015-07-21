angular.module('app')
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        controller: 'SessionCtrl',
        templateUrl: 'templates/sessions/login.html'
      })
      .when('/logout', {
        controller: 'SessionCtrl',
        templateUrl: 'templates/sessions/logout.html'
      })
      .otherwise({redirectTo: '/login'});
  });