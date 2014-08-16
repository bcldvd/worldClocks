(function() {
    var app = angular.module('myAppFilters', []);

    app.filter('underscoreToSpace', function() {
        return function(input) {
            // Regex is used to replace all occurences of '_' in the string
            return input.replace(new RegExp('_', 'g'), ' ');
        };
    });


})();