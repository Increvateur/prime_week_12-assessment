myApp.factory("heroModule", ["$http", function($http) {
  var data = {};

  var postHero = function(data) {
    $http.post("/addhero", data).then(function(response) {
      console.log("Hero Saved to the Database", response);
      getHeroes();
    });
  };

  var getHeroes = function() {
    $http.get("/viewhero").then(function(response) {
      console.log("Retrieving Heroes from the Database");
      data.response = response.data;
    });
  };

  var killHero = function(heroID) {
    $http.delete("/deletehero/" + heroID.heroID).then(function(response) {
      getHeroes();
    });
  };

  return {

    postHero : postHero,
    getHeroes : getHeroes,
    killHero : killHero,
    data : data
  };
}]);
