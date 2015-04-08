angular.module('Sample' ).controller('todayWeatherCtrl', ["$scope", "$http","$location",  function ($scope, $http,$location) {
	$scope.setActivePage('todayWeather');
}]);	