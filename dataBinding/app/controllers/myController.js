var app = angular.module("myApp")
app.controller("myCtrl", function($scope) {
  $scope.name = "foo"
  $scope.resetName = function resetName() {
    $scope.name = "foo"
  }
})
