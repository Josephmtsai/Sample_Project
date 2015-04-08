angular.module('Sample').controller('MainCtrl', ['$scope', function ($scope) {
    // setActivePage will be available to all children 
    // scopes of this controller
    $scope.setActivePage = function(name) {
      $scope.activePage = name;
    };
  }]);