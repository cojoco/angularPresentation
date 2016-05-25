var app = angular.module("myApp")

app.service("hex", function() {
  this.hexafy = function hexafy(x) {
    return x.toString(16)
  }
})
