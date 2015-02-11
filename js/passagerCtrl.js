mainControllers.controller('passagerCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        //on effectue la requête http
        $http.get(apiPath + '/rides?token=' + getToken()).success(function (data) {
            //console.log(data);
            $scope.rides = data;
        });
    }]);
