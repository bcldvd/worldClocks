(function () {
    var app = angular.module('app-directives', []);

    app.directive('clock', function($timeout) {
        return {
            scope: true,  // use a child scope that inherits from parent
            restrict: 'E',
            template: '<p></p>',
            link: function (scope, elem, attrs) {
                scope.updateTime = function () {
                    if (scope.loading) { return; }
                    var tempDate;
                    var strTz = attrs.timezone;
                    tempDate = moment.tz(strTz);
                    $timeout(function() {
                        elem.html(tempDate.format('HH:mm:ss [(]Do MMM[)]'));
                    }, 0);
                }

                scope.updateTime();

                //We will run the function updateTime every second
                setInterval(function () {
                    scope.updateTime()
                }, 1000);
            }
        };
    });
})();