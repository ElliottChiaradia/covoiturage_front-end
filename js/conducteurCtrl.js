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

            var error =0;
            var errorType ="";

            //controles sur formulaire (voir ngif pour mettre en rouge ce qui est faux)
            if($scope.ride.arrivaltown.id =="")
            {
                error =1;
                errorType ="Erreur : Veuillez vérifier votre lieu de départ et de destination.";
            }
            if($scope.ride.departuretown.id =="")
            {
                error =1;
                errorType ="Erreur : Veuillez vérifier votre lieu de départ et de destination.";
            }
            if($scope.ride.arrival =="" || $scope.ride.departure =="" || $scope.ride.arrival < $scope.ride.departure)
            {
                error =1;
                errorType ="Erreur : Veuillez vérifier vos heures de départ et d'arrivée";
            }
            if($scope.ride.recurrence.friday == false && $scope.ride.recurrence.monday == false && $scope.ride.recurrence.saturday == false && $scope.ride.recurrence.thursday == false && $scope.ride.recurrence.tuesday == false && $scope.ride.recurrence.sunday == false && $scope.ride.recurrence.wednesday == false)
            {
                error =1;
                errorType ="Erreur : Veuillez sélectionner un jour de la semaine.";
            }
            if($scope.ride.startdate =="" || $scope.ride.enddate =="")
            {
                error =1;
                errorType ="Erreur : Veuillez sélectionner une plage de dates";
            }

            var format = "yyyy-mm-dd";
            var date=new Date();
            //alert(date);


            if($scope.ride.startdate > $scope.ride.enddate)
            {
                error =1;
                errorType ="Erreur : Veuillez sélectionner une plage de dates valide";
            }


            if(error==1)
            {
                alert(errorType);
            }
            else
            {
                alert("tout est ok");
                //Envoie des données OK
                /* $http.post(apiPath+'/rides/?token='+getToken(), $scope.ride).success(function(data) {
                 alert("Le ride a été créé avec succès !");
                 redirect();
                 }).error(function(error){
                 alert("Une erreur est survenue. Veuillez réessayer plus tard.");
                 });
                 */
            }


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
