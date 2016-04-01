myApp.controller("AddHeroController", ["$scope", "$http", "heroModule", "$location", function($scope, $http, heroModule, $location) {
  $scope.heroes = {};
  $scope.data = [];

  $scope.addHero = function(data) {
    var postObject = {};
    postObject.alias = data.alias;
    postObject.first_name = data.first_name;
    postObject.last_name = data.last_name;
    postObject.city = data.city;
    postObject.power_name = data.power_name;

    heroModule.postHero(postObject);
    $location.url('/viewhero');
  };
}]);

myApp.controller("ViewHeroController", ["$scope", "$http", "heroModule", "$location", function($scope, $http, heroModule, $location) {
  $scope.killHero = function(heroID) {
    var heroIdentity = {"heroID": heroID};
    heroModule.killHero(heroIdentity);
  };

  heroModule.getHeroes();

  $scope.data = heroModule.data;
}]);
