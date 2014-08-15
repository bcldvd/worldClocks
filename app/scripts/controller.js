(function() {
    var app = angular.module('myAppControllers', []);

    /**
     * TimeZoneCtrl
     * Loads the timezones
     */
    app.controller('TimeZoneCtrl', function ($scope, $http){
        $scope.loading = true;
        $scope.timezonesPackedUrl = '../bower_components/moment-timezone/data/packed/latest.json';

        $http({method: 'GET', url: $scope.timezonesPackedUrl}).
            success(function(data, status, headers, config) {
                moment.tz.load(data);
                // Once that moment-timezone's data is loaded, stop loading
                setTimeout(function (){
                    // With a delay of 100ms to make things prettier
                    $scope.loading = false;
                }, 100);
            }).
            error(function(data, status, headers, config) {
                alert('Erreur : Impossible de charger les fuseaux horaires');
            });
    });

    app.controller('SelectCtrl', function ($scope, $timeout) {
        //the selections for the time zone drop down
        this.timezones = [{
            label: "Singapore",
            value: "Asia/Singapore"
        }, {
            label: "Sydney",
            value: "Australia/Sydney"
        }, {
            label: "EST5EDT",
            value: "EST5EDT"
        }, {
            label: "Amsterdam",
            value: "Europe/Amsterdam"
        }, {
            label: "London",
            value: "Europe/London"
        }];


      });
})();