'use strict';

angular.module('apiFrontApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize', 
  'satellizer'
])
  .config(function ($routeProvider, $authProvider) {

    $authProvider.loginUrl = 'http://api.xpto.dev/auth_login';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
