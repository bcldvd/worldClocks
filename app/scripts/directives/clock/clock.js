(function () {
    'use strict';

    var app = angular.module('app-directives', []);

    app.directive('clock', function($timeout) {
        return {
            scope: true,  // use a child scope that inherits from parent
            restrict: 'E',
            templateUrl: 'scripts/directives/clock/clock-partial.html',
            link: function (scope, elem, attrs) {
                scope.resource = {
                    time: 'time',
                    day: 'day'
                };

                scope.updateTime = function () {
                    if (scope.loading) { return; }
                    var tempDate;
                    var strTz = attrs.timezone;
                    tempDate = moment.tz(strTz);
                    $timeout(function() {
                        scope.resource.time = tempDate.format('HH:mm:ss');
                        scope.resource.day = tempDate.format('Do MMM');
                    }, 0);
                };

                scope.updateTime();

                //We will run the function updateTime every second
                setInterval(function () {
                    scope.updateTime()
                }, 1000);
            }
        };
    });
})();