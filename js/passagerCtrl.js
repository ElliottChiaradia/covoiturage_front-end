mainControllers.controller('passagerCtrl', ['$scope', '$routeParams', '$http', 'myCache',
    function($scope, $routeParams, $http, myCache) {
        //on effectue la requête http
        $http.get(apiPath + '/rides?token=' + getToken(), {cache:myCache}).success(function (data) {
            //console.log(data);
            $scope.rides = data;
        });
    }]);
