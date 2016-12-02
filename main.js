(function(){
  var app = angular.module('myApp', []);

  app.controller('myApp', function($scope){

    $scope.title = "You like Gyro's?";
    $scope.heroOpen = false;
    $scope.currentHeight = 0;
    $scope.currentHair = "";

    $scope.showHeroes = function(){
      if($scope.heroOpen === false){
        $('.hero').removeClass('closed');
        $scope.heroOpen = true;
      } else {
        $('.hero').addClass('closed');
        $scope.heroOpen = false;
      }
    }

    $scope.showHeroDetails = function($index) {
      $scope.currentHeight = $scope.heroes[$index].height;
      $scope.currentHair = $scope.heroes[$index].hairs;
    }

    //array of object heroes.
    $scope.heroes = [
      {
        name: "SuperDude",
        height: 6,
        hairs: "Black"
      },
      {
        name: "BatFella",
        height: 5,
        hairs: "unKnown"
      },
      {
        name: "poopMan",
        height: 9,
        hairs: "made of poop"
      }

    ]

  })

})();
