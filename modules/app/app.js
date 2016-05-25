// First create the secondary module
angular.module("otherApp", [])

// Then inject the secondary module into the primary module
angular.module("myApp", ["otherApp"])
