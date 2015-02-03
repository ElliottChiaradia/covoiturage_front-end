countryControllers.controller('donneesPersonnellesCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get(apiPath+'/users/1?token=asdf').success(function(data) {
            console.log(data);
            $scope.user = data;

        });
        $scope.submit = function () {
            alert('coucou');
            $http.put(apiPath+'/users/1?token=asdf',
                $scope.user).success(function(data) {
                console.log($scope.user);
                 //= data;
                    alert('coucou2');

            });
        };
    }]);




