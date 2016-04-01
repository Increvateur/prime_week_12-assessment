var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/home", {
      templateUrl: "/views/routes/home.html"
    }).
    when("/addhero", {
      templateUrl: "/views/routes/addhero.html",
      controller: "AddHeroController"
    }).
    when("/viewhero", {
      templateUrl: "/views/routes/viewhero.html",
      controller: "ViewHeroController"
    }).
    otherwise({
      redirectTo: "/home"
    });
}]);
