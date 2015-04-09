/***************************************************************
2015/4/9 Main Controller
define the Main controller for child use...
****************************************************************/
angular.module('Sample').controller('MainCtrl', ['$scope', function ($scope) {
    // setActivePage will be available to all children 
    // scopes of this controller
    $scope.setActivePage = function(name) {
      $scope.activePage = name;
    };
  }]);