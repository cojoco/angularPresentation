var app = angular.module("myApp")

app.controller("myCtrl", function($scope) {
  $scope.quantity = 1
  $scope.price = 5
  $scope.items = [{name:"Motherboard", price:300},
                  {name:"RAM", price:100},
                  {name:"CPU", price:250},
                  {name:"Monitor", price:150}]
})
