(function() {
    var app = angular.module('myAppControllers', []);

    /**
     * LoadingCtrl
     * Loads the timezones
     */
    app.controller('LoadingCtrl', function ($scope, $http){
        $scope.loading = true;
        var timezonesPackedUrl = '../bower_components/moment-timezone/data/packed/latest.json';

        $http({method: 'GET', url: timezonesPackedUrl, cache: true}).
            success(function(data, status, headers, config) {
                moment.tz.load(data);
                // Prepare timezones list for Select2
                app.timezones = data.zones.map(function(array) {
                    return array.split('|')[0];
                });
                // Once that moment-timezone's data is loaded, stop loading
                $scope.loading = false;
            }).
            error(function(data, status, headers, config) {
                //alert('Erreur : Impossible de charger les fuseaux horaires');
                $('.spinner').html('<p>Erreur : Impossible de charger les fuseaux horaires</p>')
                $('.spinner').addClass('error');
            });
    });

    app.controller('TimezoneCtrl', function ($scope) {
        this.timezones = [];
        this.timezone = '';

        this.addTimezone = function() {
            console.log(app.timezones);
            this.timezones.push(this.timezone);
            this.timezone = '';
        }

    });

})();