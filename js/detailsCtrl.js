mainControllers.controller('detailsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        //on get le paramètre qui précise depuis quelle page on arrive (pour savoir sur quelle page retourner)
        $scope.fromPage = $routeParams.fromPage;
        console.log($routeParams.fromPage);
        //on effectue la requête http
        $http.get(apiPath + '/rides/'+$routeParams.rideId+'?token=' + getToken()).success(function (data) {
            $scope.ride = data;

            calcRoute();
            createCalendar();
        });

        //on envoie les registrations à l'API
        $scope.submit = function () {
            //on construit le tableau des registrations que l'on va envoyer en put
            var regs = '{"registrations" : [' + $("#registrationDates").val() + ']}';
            $http.put(apiPath+'/rides/' + $scope.ride.id + '/registrations?token=' + getToken(), regs).success(function(data) {
                alert("Vous enregistrements ont été mis à jour avec succès !");
                window.location = "#/tes_trajets";

            }).error(function(error){
                alert("Une erreur est survenue. Veuillez réessayer plus tard.");
            });
        };
    }]);