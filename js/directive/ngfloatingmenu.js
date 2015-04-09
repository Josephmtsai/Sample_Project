var floatingmenu = angular.module('ngfloatingmenu', ['ngfloatingmenu']);
floatingmenu.directive('floatingMenu', [function () {
    return {

        restrict: 'EA',
        
        templateUrl: 'template/ngfloatingmenu.html',
        link: function (scope, iElement, iAttrs) {

            
        }
    }
}]);