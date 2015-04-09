/***************************************************************
2015/4/9 Add Loading Template

****************************************************************/
var directive_template = angular.module('directive_template', ['directive_template']);
directive_template.directive('loadIng', [function () {
    return {

        restrict: 'E',
        scope: { 'counting': '=myCount' },
        templateUrl: 'template/loading.html',
        link: function (scope, iElement, iAttrs) {


        }
    }
}]).directive('ajaxloadIng', [function () {
    return {

        restrict: 'E',
        scope: { 'counting': '=myCount' },
        templateUrl: 'templates/ajaxloading.html',
        link: function (scope, iElement, iAttrs) {


        }
    }
}])
;




