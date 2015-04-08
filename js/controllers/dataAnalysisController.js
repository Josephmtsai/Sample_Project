angular.module('Sample' ).controller('dataAnalysisCtrl', ["$scope", "$http" ,"$location",  function ($scope, $http,$location) {
	$scope.hello = 'hi aa';
	$scope.setActivePage('Analysis');
}]);	