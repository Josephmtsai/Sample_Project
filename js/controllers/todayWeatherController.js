/***************************************************************
2015/4/9 Weather Controller

****************************************************************/
angular.module('Sample')
.controller('todayWeatherCtrl', ["$scope", "$http" ,"Factory",  function ($scope, $http ,Factory) {
	//Init
	$scope.setActivePage('todayWeather');
	$scope.loadstatus = 0;
	$scope.City = 'Taipei';
	$scope.Country = 'TW';
	$scope.Query = function () {
		$scope.loadstatus ++ ;
	    Factory.getWeather_Data($scope.City , $scope.Country).then(function (data) {
	        $scope.Info = data;
	        $scope.loadstatus--;
	    }, function (err) {
	        $scope.loadstatus--;

	        alert("Error" + error);
	    });
	}
}]);	