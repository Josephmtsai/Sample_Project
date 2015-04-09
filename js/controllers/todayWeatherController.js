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
	$scope.Weather_icon = '';
	$scope.Query = function () {
		$scope.Info =null ;
		$scope.loadstatus ++ ;
	    Factory.getWeather_Data($scope.City , $scope.Country).then(function (data) {
	        $scope.Info = data;
	       	//設定class
	        for(var i in $scope.Info.weather)
	        {
		        if($scope.Info.weather[i].description.indexOf('cloud') > 0)
		        {
		        	$scope.Weather_icon = 'SI-cloud';

		        }
		        else if($scope.Info.weather[i].description.indexOf('rain')> 0)
		        {
		        	$scope.Weather_icon = 'SI-rain';

		        }
		        else if($scope.Info.weather[i].description.indexOf('clear')> 0)
		        {
		        	$scope.Weather_icon = 'SI-clear';
		        }
		        else 
		        {
		        	$scope.Weather_icon = 'SI-na';
		        }
	    	}
	        $scope.loadstatus--;
	    }, function (err) {
	        $scope.loadstatus--;

	        alert("Error" + error);
	    });
	}
}]);	