var app = angular.module("myApp")

app.controller("myCtrl", function($scope) {
  $scope.items = [{name:"Motherboard", price:300},
                  {name:"RAM", price:100},
                  {name:"CPU", price:250},
                  {name:"Monitor", price:150}]
})

app.filter("staggerCase", function() {
  return function(x) {
    var txt = "";
    for (var i = 0; i < x.length; i++) {
      if (i % 2 == 0) {
        txt += x[i].toUpperCase()
      }
      else {
        txt += x[i].toLowerCase()
      }
    }
    return txt
  }
})
