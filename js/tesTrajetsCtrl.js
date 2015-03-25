mainControllers.controller('tesTrajetsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
            //on effectue la requête http
            $http.get(apiPath + '/rides?token=' + getToken() + '&mine=true', {}).success(function (data) {
                $scope.rides = data;
            });
    }]);
