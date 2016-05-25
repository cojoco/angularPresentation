var app = angular.module("myApp")

app.directive("customDirective", function() {
  return {
    restrict: "AE",
    link: function(scope, elem, attrs) {
      elem.bind("click", function() {
        elem.html("I was clicked!")
      })
    }
  }
})
