var app = angular.module("myApp")

app.controller("myCtrl", function($scope, $rootScope) {
  $scope.name = "foo"
  $rootScope.name = "bar"
})
