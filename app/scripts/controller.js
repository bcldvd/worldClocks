(function() {
    var app = angular.module('myAppControllers', []);

    app.controller('SelectCtrl', function ($scope) {
        $.ajax({
            url: "../bower_components/moment-timezone/data/packed/latest.json",
            dataType: 'json'
        }).done(function( data ) {
            moment.tz.load(data);
            //the selections for the time zone drop down
            $scope.myData = [{
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

            //Preselect the first item in the array
            $scope.selectedItem = $scope.myData[0];
            $scope.formattedTime = "";

            $scope.updateTime = function () {
                var tempDate;
                var strTz = $scope.selectedItem.value;
                tempDate = moment.tz(strTz);
                $scope.formattedTime = tempDate.format('HH:mm:ss [(]Do MMM[)]');
                $scope.$apply();
            }

            $scope.updateTime();

            //We will run the function updateTime every second
            setInterval(function () {
                $scope.updateTime()
            }, 1000);
        });


      });
})();