/***************************************************************
2015/4/9 DataAnalysis Controller

****************************************************************/
angular.module('Sample' ).controller('dataAnalysisCtrl', ["$scope", "$http" ,"$location",  function ($scope, $http,$location) {
	$scope.hello = 'hi aa';
	$scope.setActivePage('Analysis'); // Change the style to active
}]);	