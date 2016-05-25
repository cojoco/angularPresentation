var app = angular.module("myApp")

app.controller("myCtrl", function($scope, hex, $timeout) {
  $scope.delayedBool = true
  $scope.num = 95
  $scope.hexNumber = function hexNumber() {
    $scope.num = hex.hexafy($scope.num)
  }
  $scope.changeBool = function changeBool() {
    $timeout(function() {
      $scope.delayedBool = !$scope.delayedBool
    }, 2000)
  }
})
