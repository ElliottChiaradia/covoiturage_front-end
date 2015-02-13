mainControllers.controller('detailsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        //on effectue la requête http
        $http.get(apiPath + '/rides/'+$routeParams.rideId+'?token=' + getToken()).success(function (data) {
            $scope.ride = data;
            //console.log(data);
            calcRoute();
        });
    }]);