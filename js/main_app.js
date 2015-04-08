/*************************************************
Routing Page
*************************************************/
var myApp = angular.module('Sample', [
    'ngRoute',
    'datafactory',
    'ui.bootstrap',
    'datafactory'
  ]).directive('headerMenu', function () {
    
    return function(scope, element) {
      // Watch "activePage" variable created in MainCtrl 
      // controller's scope
      scope.$watch('activePage', function(value) {
        // On "activePage" variable change in scope 
        // - adjust currently active page anchor in 
        // the header
        var activeLink = element.find('.' + value),
            activeClass = 'active';
        // Strip all anchors elements from "active" class
        element.find('.' + activeClass)
                .removeClass(activeClass);
        activeLink.addClass(activeClass);
      });
    }
  })
  .config(function ($routeProvider) {


      $routeProvider
    .when( '/', { controller: 'dataAnalysisCtrl', templateUrl: 'template/dataAnalysis.html' } )
    .when('/todayWeather', { controller: 'todayWeatherCtrl', templateUrl: 'template/todayWeather.html' })
    .otherwise( { redirectTo: '/' } );
    

        
  }).controller('MainCtrl', ['$scope', function ($scope) {
    // setActivePage will be available to all children 
    // scopes of this controller
    $scope.setActivePage = function(name) {
      $scope.activePage = name;
    };
  }]);
