mainControllers.controller('conducteurCtrl', ['$scope', '$routeParams', '$http', 'myCache',
    function($scope, $routeParams, $http, myCache) {

        $scope.ride = {
            "departuretown": {"id":0,"name":""},
            "departure": "",
            "arrivaltown": {"id":0,"name":""},
            "arrival":"",
            "description":"",
            "seats":0,
            "startdate":"",
            "enddate":"",
            "recurrence":{
                "monday":false,
                "tuesday":false,
                "wednesday":false,
                "thursday":false,
                "friday":false,
                "saturday":false,
                "sunday":false
            }
        };

        $scope.creation_trajet = function () {

            $scope.ride.departure = departureTime.value;
            $scope.ride.arrival = arrivalTime.value;
            $scope.ride.startdate = startDate.value;
            $scope.ride.enddate = endDate.value;
            $scope.ride.description = description.value;
            $scope.ride.seats = seats.value;
            $scope.ride.departuretown.id=departure.value;
            $scope.ride.arrivaltown.id=arrival.value;

            //controle sur formulaire A FAIRE !!!!!

            //Envoie des données OK
           /* $http.post(apiPath+'/rides/?token='+getToken(), $scope.ride).success(function(data) {
                alert("Le ride a été créé avec succès !");
            }).error(function(error){
                alert("Une erreur est survenue. Veuillez réessayer plus tard.");
            });
            */
            console.log($scope.ride);
        };

        $scope.click= function(){
            console.log($scope.ride);
        };

    }]);

app.filter('searchFor', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result;
    };

});
