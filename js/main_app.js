/*************************************************
Routing Page
*************************************************/
var myApp = angular.module('Sample', [
    'ngRoute',
    'datafactory',
    'ui.bootstrap',
    'datafactory'
  ]).config(function ($routeProvider) {


      $routeProvider
    .when( '/', { controller: 'dataAnalysisCtrl', templateUrl: 'template/dataAnalysis.html' } )
    .when('/todayWeather', { controller: 'todayWeatherCtrl', templateUrl: 'template/todayWeather.html' })
    .otherwise( { redirectTo: '/' } );
    

        
  });
