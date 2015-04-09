//存放 Data 存取
var datafactory = angular.module('datafactory', ['datafactory']);
datafactory.factory('Factory', function ($http, $q) {
    return {

        //取得天氣資料
        getWeather_Data: function (City,Country) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + City + ',' + Country + '&units=metric'
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (response) {
                deferred.reject(response);

            });
            return deferred.promise;
        }
    }
});    