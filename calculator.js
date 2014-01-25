angular.module('calculator-app', []).controller('calculatorController', function($scope) {
  var query = "";
  $scope.result = 0;
  $scope.click = function(value){
    query += value;
  }
  $scope.evaluate = function(){
    $scope.result = eval(query);
    query = $scope.result;
  }
});