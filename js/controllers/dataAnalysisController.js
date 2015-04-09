/***************************************************************
2015/4/9 DataAnalysis Controller

****************************************************************/
angular.module('Sample' ).controller('dataAnalysisCtrl', ["$scope", "$http" ,"$location",  function ($scope, $http,$location) {
	
	$scope.setActivePage('Analysis'); // Change the style to active

	//Default Color
	$scope.BU_Color = ['#CC0066', '#006699', '#FFCC00', '#00CC00', '#FF0000', '#FFFF00'];

	//Line Chart
    $scope.LineChartNG = {
        options: {
            chart: {
                type: 'line'
            }
        },
        title: {
            text: 'Birth in Taiwan'
        },
        subtitle: {
            text: 'Source:Minstry of the Interiror'
        },
        xAxis: {
            type: 'category',
            categories : [2007, 2008,2009,2010,2011, 2012,2013]
        },
        yAxis: {
            title: {
                text: 'People'
            }
        },
        legend: {
            enabled: false
        },

        series: [{
            name: 'Man',
            colorByPoint: true,
            color: 'white',
            shadow: {
                color: 'gray',
                width: 7,
                offsetX: 0,
                offsetY: 0
            },
            data: [ 106898 ,103937,99492,87213,101943,118848,103120 ]
        },
		{
            name: 'Female',
            colorByPoint: true,
            color: 'red',
            shadow: {
                color: 'red',
                width: 7,
                offsetX: 0,
                offsetY: 0
            },
            data: [ 97516 ,94796,91818,79673,94684,110644,95993 ]
        }
        ]
    }

	//Demo Use Pie Chart
	$scope.piechart =

    {
        title: {
            text: ''
        },
        tooltip: {
            formatter: function () {
                return this.point.name + ': <b>' + Highcharts.numberFormat(this.percentage, 1) + '%</b>';
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    formatter: function () {
                        return this.y;
                    }
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'BU',
      

            data: [{
                name: 'Nordic',
                y:  366,
                drilldown: 'Nordic',
                color : $scope.BU_Color[0]
            }, {
                name: 'MMEA',
                y: 292,
                drilldown: 'MMEA',
                color : $scope.BU_Color[1]
            }, {
                name: 'SE',
                y: 3159,
                drilldown: 'SE',
                color : $scope.BU_Color[2]
            }, {
                name: 'CE',
                y: 911,
                drilldown: 'CE',
                color: $scope.BU_Color[3]
            }, {
                name: 'DACH',
                y: 941,
                drilldown: 'DACH',
                color: $scope.BU_Color[4]
            }, {
                name: 'UK',
                y: 204,
                drilldown: 'UK',
                color: $scope.BU_Color[5]
            }]
        }]
            
    }
     //Drill Down Bar Chart
    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'column'
            }
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 'Click the columns to view Countrys. Click again to Return.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Percentage'
            }
        },
        legend: {
            enabled: false
        },
        
        tooltip: {
            formatter: function() {
                var point = this.point,
                       s = '<b>' + this.y + '% </b><br/>';
                if (point.drilldown) {
                    s += 'Click to Drill Down Country';
                } else {
                    s += 'Click to return to BU List';
                }
                return s;
                
            }
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y + "%";
                    }
                }
                
            }
        },

        series: [{
            name: 'EMEA BU',
            colorByPoint: true,
            color: 'white',
            shadow: {
                color: 'gray',
                width: 7,
                offsetX: 0,
                offsetY: 0
            },
            data: [{ 
                name: 'Nordic',
                y: 3.52,
                drilldown: 'Nordic',
                color : $scope.BU_Color[0]
            }, {
                name: 'MMEA',
                y: 1.88,
                drilldown: 'MMEA',
                color : $scope.BU_Color[1]
            }, {
                name: 'SE',
                y: 7.5,
                drilldown: 'SE',
                color : $scope.BU_Color[2]
            }, {
                name: 'CE',
                y: 4.9,
                drilldown: 'CE',
                color: $scope.BU_Color[3]
            }, {
                name: 'DACH',
                y: 2.47,
                drilldown: 'DACH',
                color: $scope.BU_Color[4]
            }, {
                name: 'UK',
                y: 1.65,
                drilldown: 'UK',
                color: $scope.BU_Color[5]
            }




            ]
        }],
        drilldown: {
            series: [{
                id: 'Nordic',
                data: [
                    ['Sweden', 6.1],
                    ['Norway', 2.5],
                    ['Denmark', 2.8],
                    ['Finland', 1.8],
                    ['Iceland', 1.6]
                ]
            }, {
                id: 'MMEA',
                data: [
                    ['Israel', 4.6],
                    ['South Africa', 2.5],
                    ['United Arab Emirates', 1.1],
                    ['Turkey', 0.4],
                    ['Saudi Arabia', 1.5]

                ]
            }, {
                id: 'SE',
                data: [
                    ['Italy', 12.5],
                    ['France', 3.4],
                    ['Spain', 5.8],
                    ['Turkey', 1.9],
                    ['Portugal', 1.8]

                ]
            }, {
                id: 'CE',
                data: [
                   ['Netherlands', 7.1],
                    ['Belgium', 4.1],
                    ['Russian Federation', 1.9],
                    ['Croatia', 2.2],
                    ['Luxembourg', 1.9]

                ]
            },
             {
                 id: 'DACH',
                 data: [
                    ['Germany', 1.7],
                    ['Austria', 5.8],
                    ['Switzerland', 3.3]

                 ]
             },
             {
                 id: 'UK',
                 data: [
                    ['United Kingdom', 1.5],
                    ['Ireland', 1.1],
                    ['Netherlands', 21.4]

                 ]
             }

            ]
        }
    }
}]);	