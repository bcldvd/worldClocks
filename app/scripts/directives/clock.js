(function () {
    var app = angular.module('app-directives', []);

    app.directive('clocks', function() {
        return {
            scope: true,  // use a child scope that inherits from parent
            restrict: 'AE',
            replace: 'true',
            template: '<h3>Hello World!!</h3>'
        };
    });
})();