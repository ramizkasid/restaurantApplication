angular.module('myApp').controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.login = function () {
      $scope.error = false;
      $scope.disabled = true;
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        .then(function () {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

}]);

angular.module('myApp').controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

angular.module('myApp').controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.register = function () {
      $scope.error = false;
      $scope.disabled = true;
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);

angular.module('myApp').controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

// angular.module('myApp').controller('detailsController',
//   ['$scope', '$location', 'AuthService',
//   function ($scope, $location, AuthService) {
//
//     $scope.details = function(){
//       AuthService.details().then(function(){
//
//       })
//     };
//
//
// }]);

angular.module('myApp').controller('detailsController',['$scope', '$location','$http',function ($scope, $location,$http) {

  $scope.details = function() {
      $http.get('/user/details')
          .then(function(response) {
            console.log(response);
          $scope.names = response.data
          $scope.subcategory = [
            {
              name:'chicken',
              rate: 140
            },
            {
              name:'Crispy Vegetable',
              rate: 110
            },
            {
              name:'Mix Vegetable',
              rate: 99
            },
            {
              name:'Special vegetable',
              rate: 85
            },
            {
              name:'Veg Triple',
              rate: 125
            }
          ];
      })
  }﻿



}]);
